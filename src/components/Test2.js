import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native'
import { images } from '../images/images'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getRemoteValue } from '../services/firebase'
import B from './Bold'

const config = {
  youtube: {
    text: 'YouTube',
    image: images.youtube,
    color: '#FF0000',
    url: 'https://www.youtube.com/'
  },
  linkedin: {
    text: 'LinkedIn',
    image: images.linkedin,
    color: '#0077B5',
    url: 'https://www.linkedin.com/'
  },
  instagram: {
    text: 'Instagram',
    image: images.instagram,
    color: '#262625',
    url: 'https://www.instagram.com/'
  },
  medium: {
    text: 'Medium',
    image: images.medium,
    color: '#292929',
    url: 'https://www.medium.com/'
  },
  github: {
    text: 'GitHub',
    image: images.github,
    color: '#333333',
    url: 'https://www.github.com/'
  },
}

const Test2 = () => {
  const experiment = getRemoteValue('experiment_2')
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Button 🔗</Text>
        <Text style={styles.description}>
          Ok, let's test more than two posibilities! Here you will see a button that opens a external website. 
        </Text>
        <Text style={styles.description}>
          Variants are: <B>YouTube</B>, <B>InkedIn</B>, <B>Instagram</B>, <B>Medium</B> and <B>GitHub</B>.
        </Text>
        <TouchableOpacity 
          style={[styles.button, {borderColor: config[experiment].color}]} 
          onPress={() => Linking.openURL(config[experiment].url)}>
          <Image source={config[experiment].image} style={styles.icon} resizeMode='contain'/>
          <Text style={[styles.description, {color:config[experiment].color}]}>
            <B>{config[experiment].text}</B>
          </Text>
        </TouchableOpacity>
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
  icon: {
    width:24,
    height:24,
    marginRight:8
  },
  button: {
    marginTop: 48,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 32
  }
})

export default Test2