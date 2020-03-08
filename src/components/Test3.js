import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getRemoteValue } from '../services/firebase'
import B from './Bold'

const Test3 = () => {
  const { text, color } = JSON.parse(getRemoteValue('experiment_3'))
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Color / Text 🎨</Text>
        <Text style={styles.description}>
          Excellent! Finally, let's try another way, let's use directly the value 
          from <B>Remote Config</B>. Here you will se a rectangle with the 
          color and text that cames from Firebase.
        </Text>
        <Text style={styles.description}>
          Variants are <B>Red</B>, <B>Blue</B>, and <B>Green</B>.
        </Text>
        <View style={[styles.rectangle, {backgroundColor: color}]}>
          <Text style={styles.rectangleText}>
            I'm <B>{text}</B>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 24
  },
  title: {
    marginBottom: 12,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  rectangleText: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.white
  },
  rectangle: {
    width: 144,
    height: 72,
    marginTop: 48,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8
  }
})

export default Test3