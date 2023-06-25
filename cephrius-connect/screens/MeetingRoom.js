import React, {useState, useEffect} from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from "socket.io-client"

let socket;

function MeetingRoom() {


  const [name, setName] = useState()
  const [roomId, setRoomID] = useState()

  const joinRoom = () => {
    socket.emit('join-room', { roomId: roomId, userName: name})
  }
  
  useEffect(() =>{
        const API_URL = "https://7e00-2601-2c1-8083-3a00-6053-93fc-a809-97d0.ngrok-free.app"
        socket = io('${API_URL}');
        console.log("Hello")
        socket.on('connection', () =>console.log("connected"))
        
  }, [])
//   skips the browser warning screen
  fetch('${API_URL}', {
            headers: {
        'ngrok-skip-browser-warning': 'true' // Set the header with the desired value
  }
})
  return (
        <View style={styles.container}>
            {/* Start Meeting section */}
            <StartMeeting 
                name = {name}
                setName ={setName}
                roomId = {roomId}
                setRoomID = {setRoomID}
                joinRoom ={joinRoom}
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