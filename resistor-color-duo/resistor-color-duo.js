//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = () => {
  const color1 = "brown"
  const color2 = "black"
  const indexOfFirst = COLORS.indexOf(color1)
  const indexOfSecond = COLORS.indexOf(color2)
  return indexOfFirst, indexOfSecond
};
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

decodedValue()