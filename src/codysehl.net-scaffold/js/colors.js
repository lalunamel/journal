import Color from "color";

const colors = {
  blue: "#289cd8",
  black: "#0b0b0b",
  red: "#f0424b",
  gray: "#efefef"
};
colors.calmBlue = Color(colors.blue)
  .lighten(0.1)
  .string();
colors.calmBlack = Color(colors.black)
  .lighten(0.25)
  .string();
colors.calmerBlack = Color(colors.black)
  .lighten(0.3)
  .string();
// $calm-blue = lighten($blue, 10%)
// $calm-black = lighten($black, 25%)
// $calmer-black = lighten($black, 30%)

export default colors;
