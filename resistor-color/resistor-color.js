//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// 1. create a list of the band colors
// 2. function that fetch the value of the given color


export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const colorCode = (color) => {
    return COLORS.indexOf(color);
}