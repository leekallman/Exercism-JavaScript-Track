const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
const decodedValue = (colorArray) => {
  if (colorArray.length > 2) {
    colorArray.pop();
  }
  return + colorArray.map(color => COLORS.indexOf(color)).join('')
}

export { COLORS, decodedValue }