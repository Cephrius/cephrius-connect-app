import React, {useState} from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'



function MeetingRoom() {


  const [name, setName] = useState()
  const [roomId, setRoomID] = useState()
  
  
  return (
        <View style={styles.container}>
            {/* Start Meeting section */}
            <View style={styles.startMeetingContainer}>
                <View style = {styles.info}>
                    <TextInput
                        style = {styles.TextInput}
                        value={name}
                        placeholder='Enter name'
                        placeholderTextColor="#767476"
                        onChangeText = {text => setName(text)}
                    />
                </View> 

                <View style={styles.info}>
                    <TextInput
                        style = {styles.TextInput}
                        value={roomId}
                        placeholder='Enter Room ID'
                        placeholderTextColor="#767476"
                        onChangeText = {text => setRoomID(text)}
                    />
                </View>  
                <View style ={{ alignItems: "center" }}>
                    <TouchableOpacity
                    onPress = {() =>{}}
                    style = {styles.startMeetingButton}
                    >
                    
                            <Text style = {{color: "white", fontWeight: "bold"}}>
                                Start Meeting
                            </Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1c",
        flex: 1,


    },
    info: {
        width: "100%",
        backgroundColor: "#373538",
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#484648",
        padding: 12,
        justifyContent: "center",


    },
    TextInput: {
        color: "white",
        fontSize: 19
    },
    startMeetingButton: {
        width: 350,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#344feb",
        height: 50,
        borderRadius: 15
    }
})