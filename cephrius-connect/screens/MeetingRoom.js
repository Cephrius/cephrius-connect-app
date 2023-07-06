import React, {useState, useEffect} from 'react'
import { View,Text,StyleSheet,TextInput, Alert , SafeAreaView, Touchable} from 'react-native'
import StartMeeting from '../components/StartMeeting'
import { io } from "socket.io-client"
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const menuIcons = [
    {
        id: 1,
        name: "microphone",
        title: "Mute",
        customColor: "#efefef",

    }, 
    {
        id: 2,
        name: "video-camera",
        title: "Stop Camera",
  

    },
    {
        id: 3,
        name: "upload",
        title: "Share Screen",
        

    },
    {
        id:4 ,
        name: "users",
        title: "Participants",
        

    },
]


let socket;
 
function MeetingRoom() { 
  const [name, setName] = useState()
  const [roomId, setRoomID] = useState()
  const [activeUsers, setActiveUsers] = useState(["Chiedozie", "John", "Jane"]);
  const [startCamera, setStartCamera ] = useState(false);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted"){
        setStartCamera(true);
        } else {
            Alert.alert("Access denied");
        }
    };
  
  const joinRoom = () => {
      __startCamera();
      socket.emit('join-room', { roomId: roomId, userName: name})
  };
  
  useEffect(() =>{
        socket = io("https://eaba-2601-2c1-8083-3a00-69e2-37b2-8985-605e.ngrok-free.app")
        socket.on('connection', ()=> console.log("connected"))
        socket.on("all-users", users => {
          console.log("Active Users");
          console.log(users)
          setActiveUsers(users)
          })
  }, [])
//   skips the browser warning screen

  return (
        <View style={styles.container}>
            {/* Start Meeting section */}
            {startCamera ? (
              <SafeAreaView style = {{ flex: 1}}>
                <View style = {styles.cameraContainer}>
                       <Camera 
                      type= {"front"}
                      style={{ width: "100%", height: 600}}
                      
                  >
                  </Camera>  
                  {activeUsers.map((user, index) =>
                    <View key={ index } style={styles.activeUsersContainer}>
                        <Text style = {{ color: "white"}}>{user}</Text>
                    </View>
                  )}
                </View>

                {/* Footer */}
                <View style={styles.menu}>
                    { menuIcons.map((icon, index) =>
                        <TouchableOpacity
                            style = {styles.tile}
                          >
                              <FontAwesome name= {icon.name} size={23} color= {"#efefef"} />
                              <Text style={styles.textTile}> { icon.title } </Text>
                          </TouchableOpacity>
                    )}
                      
                </View>
              </SafeAreaView>
                
              
            ) : (
              // Start Meeting Section
              <StartMeeting 
                name = {name}
                setName ={setName}
                roomId = {roomId}
                setRoomID = {setRoomID}
                joinRoom ={joinRoom}
            />
            )
            }
        
        </View>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#1c1c1c",
        flex: 1,
    },
    tile: {
      justifyContent: "center",
      alignItems: "center",
      height: 50,
      marginTop: 15
    },
    textTile:{
      color: "white",
      marginTop: 10,
      fontSize: 13

    },
    menu: {
      flexDirection: "row",
      justifyContent: "space-around",

    },
    cameraContainer:{
      flex: 1,
      backgroundColor: "black",
      justifyContent: "center"

    }


})