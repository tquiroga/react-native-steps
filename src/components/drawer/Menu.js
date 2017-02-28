import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

const Menu = (props) => {
  return (
    <View style={styles.container}>
      <Text>Hello I am a menu</Text>
    </View>
  )
}

export default Menu
