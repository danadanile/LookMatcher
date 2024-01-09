import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight * 0.7,
    backgroundColor: "#fff",
    top: 0,
  },

  itemImg: {
    width: "30%",
    height: "30%",
    resizeMode: "contain",
    position: "absolute",
    top: 0,
  },

  itemImg: {
    top: 0,
    width: "100%",
    height: "100%",
  },

  back: {
    left: screenWidth * 0.02,
    top: screenWidth * 0.02,
    width: "10%",
    height: "10%",
    position: "absolute",
    resizeMode: "contain",
  },

  heart: {
    right: screenWidth * 0.02,
    top: screenWidth * 0.02,
    width: "10%",
    height: "10%",
    position: "absolute",
    resizeMode: "contain",
  },

  prev: {
    left: screenWidth * 0.02,
    top: screenWidth * 0.7,
    width: "10%",
    height: "10%",
    position: "absolute",
    resizeMode: "contain",
  },

  next: {
    right: screenWidth * 0.02,
    top: screenWidth * 0.7,
    width: "10%",
    height: "10%",
    position: "absolute",
    resizeMode: "contain",
  },

  buttonPrev: {
    left: screenWidth * 0.02,
    top: screenHeight * 0.1,
    position: "absolute",
    resizeMode: "contain",
    width: "30%",
    height: "30%",
  },

  buttonNext: {
    left: screenWidth * 0.88,
    top: screenHeight * 0.1,
    position: "absolute",
    resizeMode: "contain",
    width: "30%",
    height: "30%",
  },

  iconPrev: {
    right: screenWidth * 0.02,
    top: screenWidth * 0.4,
    width: "30%",
    height: "30%",
    resizeMode: "contain",
  },

  iconNext: {
    left: screenWidth * 0.02,
    top: screenWidth * 0.4,
    width: "30%",
    height: "30%",
    resizeMode: "contain",
  },
});

export default styles;
