import React, { Component } from 'react'
import styled from 'styled-components'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import Yup from 'yup'

import AutoSuggest from './AutoSuggest'
import './form.css'
import data from './data'

export default class MatchboxForm extends Component {

  submitForm = ( values, { setSubmitting, setErrors } ) => {
    const { setItems } = this.props

    const itemObj = data.items.find(item => item.name === values.itemDesc)
    const body = {
      ...values,
      itemNbr: itemObj["Item Nbr"]
    }
    axios
      .post("/api/matchbox", body)
      .then(res => {
        console.log(res)
        setSubmitting(false)
        setItems(res.data.items)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Formik
        onSubmit={this.submitForm}
        initialValues={{
          storeName: '',
          itemDesc: '',
          quantity: '',
        }}
        validationSchema={ Yup.object().shape({
          storeName: Yup.string().required('Store Name is required'),
          itemDesc: Yup.string().required('Item Desc is required'),
          quantity: Yup.number()
                        .min(0, 'The quantity must be greater than 0')
                        .required('The quantity is required'),
        })}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <BoxForm>
            { errors.storeName && touched.storeName &&
              <ErrorMessage>{errors.storeName}</ErrorMessage>}
            <StyledSuggest
              data={data.stores}
              type='text'
              name='storeName'
              placeholder='Store Name'
              onChange={setFieldValue}
              onBlur={handleBlur}
              value={values.storeName}
              err={errors.storeName && touched.storeName}
            />
            { errors.itemDesc && touched.itemDesc &&
              <ErrorMessage>{errors.itemDesc}</ErrorMessage>}
            <StyledSuggest
              data={data.items}
              type='text'
              name='itemDesc'
              placeholder='Item Desc'
              onChange={setFieldValue}
              onBlur={handleBlur}
              value={values.itemDesc}
              err={errors.itemDesc && touched.itemDesc}
            />
            { errors.quantity && touched.quantity &&
              <ErrorMessage>{errors.quantity}</ErrorMessage>}
            <Input
              placeholder='Quantity'
              type='number'
              name='quantity'
              err={errors.quantity && touched.quantity}
            />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </BoxForm>
        )}
      />
    )
  }
}



const BoxForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 20px;
`

const Input = styled(Field)`
  border: solid thin;
  border-color: ${props => props.err ? 'red' : '#2e3234'};
  border-radius: 5px;
  padding: 5px;
  margin: 5px 0;
  font-size: 14pt;
  width: 100%;
`

const StyledSuggest = Input.withComponent(AutoSuggest)

const Button = styled.button`
  font-size: 14pt;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`
const ErrorMessage = styled.div`
  color: red;
`
