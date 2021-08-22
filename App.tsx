import * as React from 'react';
import { NavigationContainer, StackRouter} from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BucketListPage from './Screens/BucketlListPage';
import IncompleteItems from './Screens/Incomplete';
import CompleteItems from './Screens/Complete';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import RightTopNavButton from './Components/RightTopNavButton';
import ActivityInfo from './Screens/ActivityDetails';
import ActivityNotes from './Screens/ActivityNotes';
import LogInScreen from './Screens/LogInScreen';

// import Navigator from './Routes/HomeStack';
// import HomeStack from './Routes/HomeStack';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivityDetailsScreen from './Screens/ActivityDetails';
import AddNewBucket from './Screens/AddNewBucket';
import SignUpScreen from './Screens/SignUpScreen';

const Tab = createMaterialTopTabNavigator()

// top tab navigator when you click into a bucket list. Contains two screens. 
const BucketDetails = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Incomplete Items" component={IncompleteItems}/>
        <Tab.Screen name="Complete Items" component={CompleteItems}/>
      </Tab.Navigator>
    );
};

const Tab2 = createMaterialTopTabNavigator()

const ActivityTab = () => {
  return (
    <Tab2.Navigator>
        <Tab2.Screen name="Info" component={ActivityInfo}/>
        <Tab2.Screen name="Notes" component={ActivityNotes}/>
    </Tab2.Navigator>
  );
};

const Stack = createStackNavigator();

const MyStack = ( { navigation }) => {
  return (

    <NavigationContainer >
        <Stack.Navigator>

        <Stack.Screen name = "Welcome!" component={LogInScreen}
            
        />

        <Stack.Screen name = "Sign Up Screen" component={SignUpScreen}
            options={{
              headerBackTitleVisible: false,
              headerTitle: "Sign Up",
              headerTitleAlign: 'left',
              headerTitleStyle: {
                fontSize: 24,
                color:'#383838',
                fontWeight: "300",
              },
              headerStyle: {
                height: 100
              },
              headerLeft: () => (
                <TouchableOpacity 
                onPress={() => navigation.goBack()}
                style={{
                  paddingLeft: 20,
                  paddingBottom: 8,
                }}>

                
                <Image source={require('./assets/outline_clear_black_24dp.png')}
                  style={{
                    width: 24,
                    height: 24,
                    tintColor: '#383838',
                }} />

              </TouchableOpacity>
            ),

            }}
          />

          {/* bucket list page with modified header */}
          <Stack.Screen name = "Bucket Lists" component={BucketListPage}
            options={{
              headerBackTitleVisible: false,
              headerTitle: "Bucket Lists",
              headerTitleAlign: 'left',
              headerTitleStyle: {
                fontSize: 24,
                color:'#383838',
                fontWeight: "300",
              },
              headerStyle: {
                height: 100
              },
              headerLeft: () => (
                null
            ),

              headerRight: () => (
                  <View style={{
                    paddingRight: 20,
                    paddingBottom: 8
                  }}>
                    <RightTopNavButton icon={require('./assets/outline_search_black_24dp.png')} />
                  </View>
              ),
            }}
          />

          <Stack.Screen name = "Add New Bucket" component={AddNewBucket}
          
          options={{
              headerBackTitleVisible: false,
              headerTitleContainerStyle: {
                left: 56,
                paddingBottom: 8
              },
              headerTitle: "Add New Bucket",
              headerTitleAlign: 'left',
              headerTitleStyle: {
                fontSize: 24,
                color:'#383838',
                fontWeight: "300",
              },
              headerStyle: {
                height: 100
              },
              
              
              headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={{
                    paddingLeft: 20,
                    paddingBottom: 8,
                  }}>

                  
                  <Image source={require('./assets/outline_clear_black_24dp.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: '#383838',
                  }} />

                </TouchableOpacity>
          ),
              headerRight: () => (
                  <TouchableOpacity       
                  style={{
                    paddingRight: 20,
                    paddingBottom: 8,
                  }}>
                    <Text style={{
                    color: '#546DF2',
                    fontSize: 16
                  }}> Done </Text>
                  </TouchableOpacity>
            ),
      }}
      /> 

          {/* bucket details page with modified header */}
          <Stack.Screen name = "BucketDetails" component={BucketDetails}
          
              options={{
                  headerBackTitleVisible: false,
                  headerTitleContainerStyle: {
                    left: 56,
                    paddingBottom: 8
                  },
                  headerTitle: "Bucket Details",
                  headerTitleAlign: 'left',
                  headerTitleStyle: {
                    fontSize: 24,
                    color:'#383838',
                    fontWeight: "300",
                  },
                  headerStyle: {
                    height: 100
                  },
                  
                  
                  headerLeft: () => (
                    <TouchableOpacity 
                      onPress={() => navigation.goBack()}
                      style={{
                        paddingLeft: 20,
                        paddingBottom: 8,
                      }}>

                      
                      <Image source={require('./assets/outline_arrow_back_black_24dp.png')}
                        style={{
                          width: 24,
                          height: 24,
                          tintColor: '#383838',
                      }} />

                    </TouchableOpacity>
              ),
                  headerRight: () => (
                      <View style={{
                        paddingRight: 20,
                        paddingBottom: 8
                      }}>
                        <RightTopNavButton icon={require('./assets/outline_search_black_24dp.png')} />
                      </View>
                ),
          }}
          />

        <Stack.Screen name = "ActivityTab" component={ActivityTab}
            options={{
              headerBackTitleVisible: false,
              headerTitleContainerStyle: {
                left: 56,
                paddingBottom: 8
              },
              headerTitle: "Activity Details",
              headerTitleAlign: 'left',
              headerTitleStyle: {
                fontSize: 24,
                color:'#383838',
                fontWeight: "300",
              },
              headerStyle: {
                height: 100
              },
              
              
              headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={{
                    paddingLeft: 20,
                    paddingBottom: 8,
                  }}>

                  
                  <Image source={require('./assets/outline_arrow_back_black_24dp.png')}
                    style={{
                      width: 24,
                      height: 24,
                      tintColor: '#383838',
                  }} />

                </TouchableOpacity>
          ),

              headerRight: () => (
                  <View style={{
                    paddingRight: 20,
                    paddingBottom: 8
                  }}>
                    <RightTopNavButton icon={require('./assets/outline_edit_black_24dp.png')} />
                  </View>
              ),
            }}

          />

      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <HomeStack/>
    // </NavigationContainer>
  );
};

export default MyStack;