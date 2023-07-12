import React { useState } from 'react'
import { View,Text,StyleSheet, TextInput, SafeAreaView } from "react-native"
import chatHeader from './chatHeader'

function Chat({ setModalVisible }) {

  const [ messageText, setMessageText ] = useState()
  return (
    <View style = {styles.container}>
        <SafeAreaView style={{height: "100%"}}>
          <chatHeader setModalVisible={setModalVisible} /> 
          {/* Chat Messages */}
          <View style ={styles.chatMessages}>

          </View>
          {/* Type Message */}
          <View style={styles.chatFormContainer}>
              <Text style={{ color: "white" }}> Send to:Everyone</Text>
              <View style={styles.chatForm}>
                  <TextInput 
                      value={messageText}
                      onChangeText={text => setMessageText(text)}
                      style ={styles.TextInput}
                      placeholder='Tap here to chat'
                  />
              </View>
          </View>
        </SafeAreaView>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c1c1c",

    },
    chatMessages: {

    },
    chatFormContainer: {

    },
    chatForm: {

    },

})