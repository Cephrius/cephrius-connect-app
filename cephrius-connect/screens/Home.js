import React from 'react'
import{ View, SafeAreaView, StyleSheet/*Allows us to add text in text in the safe areas*/} from "react-native" 
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ContactsMenu from '../components/ContactsMenu'
import MenuButtons from '../components/MenuButtons'

function Home( { navigation } ) {
  return (
    <View style={styles.container}>
        <SafeAreaView style={{height: '100%'}}>
            <Header />
            <SearchBar />
            <MenuButtons navigation={navigation} />
            <ContactsMenu />
        </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c", // <---- Background Colour for top of the screen
        padding: 15,

    }
})