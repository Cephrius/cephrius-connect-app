import React, {useState} from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StartMetting from '../components/StartMeeting'



function MeetingRoom() {


  const [name, setName] = useState()
  const [roomId, setRoomID] = useState()
  
  
  return (
        <View style={styles.container}>
            {/* Start Meeting section */}
            <StartMeeting 
                name = {name}
                setName ={setName}
                roomId = {roomId}
                setRoomID = {setRoomID}
            />
        </View>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1c",
        flex: 1,
    }

})