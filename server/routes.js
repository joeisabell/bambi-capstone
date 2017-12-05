const express = require('express')
const router = express.Router()

// POST /api/addWarranty
router.get('/matchbox', async (req, res, next) => {

  res.status(200).json({
    message: "The warranty registration was succeful!"
  })

})

module.exports = router
