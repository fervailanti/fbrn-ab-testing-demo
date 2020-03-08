import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native'
import { refreshConfig } from '../services/firebase'
import { images } from '../images/images'

const RefreshConfig = () => {

  const [loading, setLoading] = useState(false)

  const refreshPress = () => {
    setLoading(true)
    refreshConfig()
    .catch(console.log)
    .finally(() => {
      setLoading(false)
    })
  }

  const content = {
    refresh: <Text style={styles.text}>Refresh Values</Text>,
    spinner: <Image source={images.loader} style={styles.spinner} resizeMode='contain'/>
  }

  return (
    <TouchableOpacity style={styles.button} onPress={refreshPress}>
      {loading ? content.spinner : content.refresh}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    margin: 24,
    borderWidth: 2,
    borderColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 172,
    borderRadius: 32,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: 'green'
  },
  spinner: {
    width:24,
    height:24
  }
})

export default RefreshConfig