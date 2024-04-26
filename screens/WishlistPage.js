import * as React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import Wishlist from "../components/wishlist/Wishlist";
import ToolBar from "../components/toolbar/ToolBar";
import BackButton from "../components/backButton/BackButton";

const window = Dimensions.get("window");
const screenHeight = window.height;

const WishlistPage = () => {
  return (
    <View>
      <ScrollView contentContainerStyle={{ minHeight: screenHeight * 1.3 }}>
        <Wishlist />
        <BackButton />
      </ScrollView>
      <View>
        <ToolBar />
      </View>
    </View>
  );
};

export default WishlistPage;
