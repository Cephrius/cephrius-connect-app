import React from 'react'
import { View,Text,StyleSheet,TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


function StartMeeting({name, roomId}) {
    return ()

    
}

export default StartMeeting

const Styles = StyleSheet.create({
    
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
