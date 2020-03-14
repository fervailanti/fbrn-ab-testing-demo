import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Link = ({ text, press, testID }) => (
  <TouchableOpacity style={styles.button} onPress={press} testID={testID}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    margin: 12,
    borderWidth: 2,
    borderColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: '#333'
  }
})

export default Link