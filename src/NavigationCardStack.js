import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Text, NavigationExperimental } from 'react-native'
import Drawer from 'react-native-drawer'
import Home from './scenes/Home'
import About from './scenes/About'
import Menu from './components/drawer/Menu';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental

let styles = {}

class Header extends Component {
  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
  }

  _back = () => {
    this.props.pop()
  }

  _renderTitleComponent= (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
}

class NavigationCardStackExample extends Component {
  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }


  openDrawer() {
    this._drawer.open()
  }

  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
    }
  }
  _renderHeader = (sceneProps) => {
    return (
      <Header
        pop={this.props.pop}
        openDrawer={this.props.openDrawer}
        {...sceneProps}
      />
    );
  }
  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<Menu />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {  // eslint-disable-line
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <NavigationCardStack
          renderHeader={this._renderHeader}
          navigationState={this.props.navState}
          renderScene={this._renderScene}
          />
      </Drawer>
    )
  }
}

styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
}

export default NavigationCardStackExample
