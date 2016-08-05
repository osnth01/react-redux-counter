const counter = (currentCount = 0, action) => {
  switch(action) {
    case 'UP':
      return currentCount + 1
    case 'DOWN':
      return currentCount - 1
    default:
      return currentCount
  }
}

export default counter