import * as React from "react";
import { ScrollView, View, Image, TouchableOpacity } from "react-native";
import styles from "./tool.style";




const ToolBar2 = () => {

   

    return (
       
            <View style={styles.home}>

                <View style={[styles.password]}>
                    <View

                        style={styles.newData}
                        mode="outlined"

                    />




                    {/* <TouchableOpacity>
                        <View style={styles.center}>
                            <Image
                                style={[styles.ProfileIcon, styles.lockIconLayout]}
                                contentFit="cover"
                                source={require("../../assets/icons/profile-bar.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.center}>
                            <Image
                                style={[styles.heartIcon, styles.lockIconLayout]}
                                contentFit="cover"
                                source={require("../../assets/icons/heart-bar.png")}
                            />
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.center}>
                            <Image
                                style={[styles.homeIcon, styles.lockIconLayout]}
                                contentFit="cover"
                                source={require("../../assets/icons/home1.png")}
                            />
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity>
                        <View style={styles.center}>
                            <Image
                                style={[styles.searchIcon, styles.lockIconLayout]}
                                contentFit="cover"
                                source={require("../../assets/icons/search-bar.png")}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.center}>
                            <Image
                                style={[styles.shirtIcon, styles.lockIconLayout]}
                                contentFit="cover"
                                source={require("../../assets/icons/shirt-bar.png")}
                            />
                        </View>
                    </TouchableOpacity> */}


                </View>

            </View>

      

    );
};

export default ToolBar2;
