import { connect } from 'react-redux'
import NavigationCardStack from './NavigationCardStack'
import { push, pop} from './actions/navigation'
import { openDrawer, closeDrawer } from './actions/drawer'

function mapStateToProps (state) {
  return {
    navState: state.navState,
    drawerState: state.drawer.drawerState
  }
}
export default connect(
  mapStateToProps,
  {
    push: (route) => push(route),
    pop: () => pop(),
    openDrawer: () => openDrawer(),
    closeDrawer: () => closeDrawer()
  }
)(NavigationCardStack)
