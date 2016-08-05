const counter = (currentCount = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    default:
      return currentCount
  }
}

export default counter