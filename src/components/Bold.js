import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Bold = ({children}) => (
  <Text style={styles.bold}>{children}</Text>
)

const styles = StyleSheet.create({ 
  bold: {
    fontWeight: '700'
  }
})

export default Bold