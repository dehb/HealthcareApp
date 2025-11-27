import { createNavigationContainerRef } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function navigateMovement (name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  } else {
    setTimeout(() => navigateMovement(name, params), 1000)
  }
}
export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

