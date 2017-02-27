import { PUSH_ROUTE, POP_ROUTE } from '../constants/actions';

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop() {
  return {
    type: POP_ROUTE
  }
}
