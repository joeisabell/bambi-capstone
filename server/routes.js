const express = require('express')
const axios = require('axios')
const router = express.Router()

// POST /api/addWarranty
router.post('/matchbox', async (req, res, next) => {
  const { storeName, itemDesc, itemNbr, quantity } = req.body

  axios
    .post(process.env.AZUREML_URL, {
    	Inputs: {
    		input1:[{
    			"Item Nbr": itemNbr,
    			"Store Name": storeName,
    			"Item Desc 1": itemDesc,
    			"POS Qty": quantity
    		}]
    	}
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`
      }
    })
    .then( async result => {
      const cleanResult = parseResult(result)
      const itemInfo = await getItemDetails(cleanResult.itemNbrs, req.db)
      res.status(200).json({
        store: cleanResult.storeName,
        items: itemInfo
      })
    })
    .catch(err => {
      console.log(err)
      res.status(400).send({ message: "Error!" })
    })
})



function parseResult(result) {
  const obj = result.data.Results.output1[0]
  const itemNbrs = Object.keys(obj).reduce((acc, key) => {
    if(key.toLowerCase().includes('item')) {
      acc.push(obj[key])
    }
    return acc
  }, [])

  return {
    storeName: obj.User,
    itemNbrs: itemNbrs.slice(0,3)
  }
}

async function getItemDetails(itemNbrs, db) {
  return await db.sequelize
    .query(`
      SELECT
          [Item Nbr],
          [Item Desc 1],
          [Unit Retail]
      FROM [Item Info]
      WHERE [Item Nbr] in (${itemNbrs})`,
      { type: db.sequelize.QueryTypes.SELECT }
    )
}




module.exports = router
