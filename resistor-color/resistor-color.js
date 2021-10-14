//create a array with all colors in
//create a function that return the numeric value/index of a given color

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]

export const colorCode = (color) => {
    let index = COLORS.indexOf(color);
    return index
}