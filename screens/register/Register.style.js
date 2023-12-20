import { StyleSheet, Dimensions } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../styles/GlobalStyles";

const window = Dimensions.get("window");
const screenHeight = window.height;
const screenWidth = window.width;

const styles = StyleSheet.create({

  // scrollView: {
  //   marginHorizontal: 20,
  // },

  passwordLayout: {
    width: screenWidth * 0.7,
    left: (screenWidth - screenWidth * 0.7) / 2,
    height: 50,
    // width: 300,
    // left: 46,
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
    textAlign: "left",
    fontFamily: FontFamily.textInput,
    position: "absolute",
  },
  iconPosition: {
    left: "86%",
    right: "6%",
    width: "8%",
    height: "48%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logoIconPosition: {
    left: 116,
    position: "absolute",
  },
  userIconLayout: {
    height: 24,
    width: 24,
    left: screenWidth * 0.7 - 20,
    position: "absolute",
  },
  registerPosition: {
    height: 26,
    top: "50%",
    marginLeft: -46.5,
    marginTop: -13,
    left: "50%",
    position: "absolute",
  },
  registerChild: {

    top: screenHeight*0.25,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 50,
    elevation: 50,
    shadowOpacity: 1,
    width: screenWidth,
    height: screenHeight*0.75,
    opacity: 0.85,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    borderRadius: Border.br_26xl,
  },
  emailChild: {
    width: screenWidth * 0.7,
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    width: "100%",
  },
  email1: {
    width: "14%",
    textAlign: "left",
    height: "38%",
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
  },
  messageChild: {
    height: "58.33%",
    width: "75%",
    top: "20.83%",
    right: "12.5%",
    bottom: "20.83%",
    left: "12.5%",
    borderStyle: "solid",
    borderColor: Color.colorIndigo,
    borderWidth: 2,
    borderRadius: Border.br_11xs,
    position: "absolute",
  },
  messageItem: {
    height: "10px",
    width: "66.67%",
    top: "37.5%",
    right: "16.67%",
    bottom: "45.83%",
    left: "16.67%",
    borderRadius: Border.br_11xs,
  },
  message: {
    bottom: "26%",
    top: "26%",
    left: "86%",
    right: "6%",
    width: "8%",
    height: "48%",
    position: "absolute",
  },
  email: {
    top: 389,
  },
  password1: {
    width: "24%",
    textAlign: "left",
    height: "38%",
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
  },
  lockIcon1: {
    width: "30px",
    height: "30px",
    top: "12px",
    left: screenWidth * 0.7 - 40,
    bottom: "25.47%",
    right: "6%",
    maxWidth: "100%",
  },
  password: {
    top: 455,
  },
  confirmPassword: {
    width: "45%",
    textAlign: "left",
    height: "38%",
    fontSize: FontSize.textInput_size,
    left: "7.33%",
    top: "34%",
  },
  chieldCheckIcon1: {
    width: "30px",
    height: "30px",
    top: "12px",
    left: screenWidth * 0.7 - 40,
    bottom: "25.47%",
    right: "6%",
    maxWidth: "100%",
  },
  password2: {
    top: 521,
  },
  alreadyAMember1: {
    color: "#252525",
  },
  logIn: {
    color: Color.colorIndigo,
  },
  alreadyAMemberContainer: {
    top: 717,
    fontSize: 13,
    fontWeight: "600",
    fontFamily: FontFamily.ralewaySemiBold,
    textAlign: "left",
  },
  fullName: {
    textAlign: "left",
  },
  // userIcon2: {
  //   display: "none",
  //   left: "86%",
  //   right: "6%",
  //   width: "8%",
  //   height: "48%",
  //   bottom: "26%",
  //   top: "26%",
  // },
  lastName: {
    top: 257,
  },
  firstName: {
    top: 323,
  },
  userAltIcon2: {
    top: 336,
  },
  userAltIcon3: {
    top: 270,
  },
  register2: {
    fontSize: 20,
    color: "#fcfcfc",
    width: 79,
    textAlign: "left",
    fontFamily: FontFamily.textInput,
    top: "50%",
    marginLeft: -46.5,
    marginTop: -13,
  },
  vectorIcon2: {
    top: 7,
    left: 88,
    width: 5,
    height: 12,
    position: "absolute",
  },
  registerParent: {
    width: 93,
  },
  register1: {
    marginLeft: -84.5,
    top: 644,
    width: 167,
    height: 48,
    left: "50%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  logoIcon: {
    top: 29,
    width: 160,
    height: 150,
  },
  register: {
    flex: 1,
    height: 852,
    backgroundColor: "transparent",
    overflow: "hidden",
    width: "100%",
  },
});

export default styles;