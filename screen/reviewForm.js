import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { globalStyles } from '../style/global.js'
import { Formik } from 'formik'
import * as yup from 'yup'


const reviewSchema = yup.object({
  title: yup.string().required().min(5),
  body: yup.string().required().min(8),
  rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
    return parseInt(val) < 6 && parseInt(val) > 0
  })
})

export default function ReviewForm({ addReview }) {

  return (
    <View style={globalStyles.container}>
      <Formik initialValues={{ title: '', body: '', rating: '' }}
      validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm()
          addReview(values)
        }}
      >
        {(props) =>
          (
            <View>
              <TextInput
                placeholder='Review title'
                onChangeText={props.handleChange('title')}
                value={props.values.title}
                style={globalStyles.input}
                onBlur={props.handleBlur('title')}
              />
              <Text style={globalStyles.errorText}> {props.touched.title && props.errors.title }</Text>
              <TextInput
                multiline
                placeholder='Review body'
                onChangeText={props.handleChange('body')}
                value={props.values.body}
                style={globalStyles.input}
                onBlur={props.handleBlur('body')}
              />
              <Text style={globalStyles.errorText}> {props.touched.body && props.errors.body }</Text>
              <TextInput
                placeholder='Rating (1-5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                style={globalStyles.input}
                keyboardType='numeric'
                onBlur={props.handleBlur('rating')}
              />
              <Text style={globalStyles.errorText}> {props.touched.rating && props.errors.rating }</Text>
              <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
            </View>

          )}
      </Formik>
    </View>
  )
}