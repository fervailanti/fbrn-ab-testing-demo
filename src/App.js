import React from 'react'
import { ScrollView } from 'react-native'
import Header from './components/Header'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import { fetchConfig } from './services/firebase'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Link from './components/Link'
import RefreshConfig from './components/RefreshConfig'

fetchConfig().catch(console.log)

const Stack = createStackNavigator();

const navStyle = {
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  headerBackTitle: 'Back'
}

const Home = ({ navigation }) => (
  <ScrollView>
    <Header/>
    <RefreshConfig/>
    <Link text='Test #1' press={() => navigation.navigate('test1')}/>
    <Link text='Test #2' press={() => navigation.navigate('test2')}/>
    <Link text='Test #3' press={() => navigation.navigate('test3')}/>
  </ScrollView>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='home' component={Home} options={{
          title:'Experiments',
          ...navStyle
        }}/>
        <Stack.Screen name='test1' component={Test1} options={{
          title:'Test #1',
          ...navStyle
        }}/>
        <Stack.Screen name='test2' component={Test2} options={{
          title:'Test #2',
          ...navStyle
        }}/>
        <Stack.Screen name='test3' component={Test3} options={{
          title:'Test #3',
          ...navStyle
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
