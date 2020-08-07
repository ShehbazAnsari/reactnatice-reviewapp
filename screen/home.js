import React, { useState } from 'react'
import { Text, View, Button, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { globalStyles } from '../style/global.js'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'



export default function Home({ navigation }) {

  const [reviews, setReviews] = useState([
    { title: 'Shehbaz Ansari', rating: 5, body: 'Java Masoom Developer😇', key: 1 },
    { title: 'Adnan Sami😂', rating: 5, body: 'React-Native Bc pubg me mike on kar  Developer😂', key: 2 },
    { title: 'Rafian Shaikh', rating: 5, body: 'Halwa Paratha Developer urf Keema Developer😂', key: 3 },
    { title: 'Shamuwel Ansari', rating: 5, body: '90 Min Developer😂', key: 4 }

  ])
  

  const [modalOpen, setModalOpen] = useState(false)
  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }
  return (
    <View style={globalStyles.container}>


      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <MaterialIcons name='close'
            size={28}
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }} />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <MaterialIcons name='add' size={28} onPress={() => setModalOpen(true)} style={styles.modalToggle} />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  modalContent: {

  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
})