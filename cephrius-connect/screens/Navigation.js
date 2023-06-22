import React from 'react'
import { StyleSheet } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Home from './Home';
import MeetingRoom from './MeetingRoom';

function Navigation() {
    const Stack = createStackNavigator();
  return (
        <NavigationContainer>                        
            <Stack.Navigator initialRouteName={Home} screenOptions={{headerShown: true}} >
                
                <Stack.Screen style = {styles.container}
                    name ="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name = "Room"
                    component={MeetingRoom}
                    options = {{
                        title: 'Start a Meeting',
                        headerStyle: {
                            backgroundColor: "#1c1c1c",
                            shadowOpacity: 0
                        },
                        headerTintColor: "white"
                    
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
  );
}

export default Navigation

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    }
})
