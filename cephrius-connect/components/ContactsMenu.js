import React from 'react'
import{ View,Text,StyleSheet, Image} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign";

const ContactsMenuButtons = [
      {
        type: "starred",
        name: "Starred",

      },
      {
        type: "contact",
        name: "Bill Grant",
        photo: require("../assets/photo-1500648767791-00dcc994a43e.jpg"),
      },
      {
        type: "contact",
        name: "Jesse Ramierez",
        photo: require("../assets/photo-1507003211169-0a1dd7228f2d.jpg")
      },
      {
        type: "contact",
        name: "Adam Samuels",
        photo: require("../assets/photo-1539571696357-5a69c17a67c6.jpg")
      }

]

// ContactsMenu added new features
function ContactsMenu() {
  return (
    <View style = {styles.container}>
        {/* Contact container */}
        { ContactsMenuButtons.map((contact, index) =>
          <View 
              key = {index}
              style = {styles.row}>
              {/* Image */}
              {contact.type == "starred" ? (
                 <View style = {styles.starredIcon}>
                      <AntDesign name= "star" size={30} color = "#efefef" />
                </View> ):
                (
                   <Image source={contact.photo} style = {styles.image} />
                 )
            }
             
              {/* Text */}
              <Text style = {styles.text}>
                {contact.name}
              </Text>
          </View>
        )}
        
    </View>
  )
}

export default ContactsMenu

const styles = StyleSheet.create({
    container: {
      

    },
    text: {
     color: "white",
     paddingLeft: 18,
     fontSize: 18,

    },
    starredIcon: {
      backgroundColor: "#333333",
      width: 55,
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    
    },
    row:{
      flexDirection : "row",
      marginTop: 21,
      alignItems: "center",
    },
    image: {
      width: 55,
      height: 55,
      borderRadius: 20
    }

})