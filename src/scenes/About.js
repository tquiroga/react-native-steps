import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { pop } from '../actions/navigation'
import { openDrawer } from '../actions/drawer'

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

class About extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from About</Text>
        <Text onPress={() => this.props.pop()}>Back</Text>
        <Text onPress={() => this.props.openDrawer() }>Open drawer</Text>
      </View>
    );
  }
}

function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    pop: () => dispatch(pop()),
    openDrawer: () => dispatch(openDrawer())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
