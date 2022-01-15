import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Button from '../../../components/Button';
import { Routes, StackNavigationProps } from "../../../components/navigation"
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("screen");

// https://i.pinimg.com/564x/21/32/54/21325490164e80f3e2732a36266a81b1.jpg
// https://www.net-a-porter.com/variants/images/6011092390987882/ou/w2000_q60.jpg

export default function Welcome({
  navigation,
}: StackNavigationProps<Routes, "Welcome">) {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar hidden />
      <View>
        <Image
          style={styles.img}
          source={{
            uri: "https://i.pinimg.com/564x/62/0e/c7/620ec702be65ee96d845f38fd151bb55.jpg",
          }}
        />
        <View style={styles.headerContainer}>
          <View style={styles.logo}>
            <Image
              style={{ width: 35, height: 35, borderRadius: 10 }}
              source={{
                uri: "https://i.ibb.co/mvtjqvq/m.png",
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                // fontFamily: "Helvetica",
                padding: 10,
                fontWeight: "bold",
              }}
            >
              Milan
            </Text>
          </View>
          <View style={styles.backButton}>
            <Icon
              name="x"
              size={35}
              color="#fff"
              onPress={() => {
                navigation.navigate("Onboarding");
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.title}>Start Shopping</Text>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#BB8563" : "#c39476",
            },
            styles.btn,
          ]}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styles.buttonText, { color: "white" }]}>
              Have an account? Login
            </Text>
          </TouchableOpacity>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#F3E9E2" : "#fff",
            },
            styles.btn,
          ]}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <TouchableOpacity activeOpacity={5.9}>
            <Text style={[styles.buttonText, { color: "#392918" }]}>
              Join us, It's Free
            </Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: width,
    height: height,
    resizeMode: "cover",
  },

  bottomView: {
    // backgroundColor:'white',
    flex: 1,
    bottom: 60,
    // width: "100%",
    // height: 50,
    // // bottom: 0,
    position: "absolute",
    justifyContent: "space-evenly",
    alignItems: "center",
    // alignContent: "center",
  },
  // textView: {
  //   // flex: 1,
  //   alignItems: "center",
  //   position: "absolute",
  //   // justifyContent: "flex-start",
  //   // alignItems: "flex-start",
  //   // alignContent: "flex-start",
  // },
  title: {
    fontWeight: "bold",
    fontSize: 48,
    padding: 15,
    color: "#efe3d1",
    bottom: 50,
    marginRight: 120,
  },
  btn: {
    height: 50,
    width: 330,
    // backgroundColor: "#c39476",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.84,
    elevation: 7,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  headerContainer: {
    flex: 1,
    position: "absolute",
    paddingLeft: 10,
    paddingTop: 10,
    flexDirection: "row",
    marginTop: Platform.OS === "android" ? 50 : 10,
  },
  logo: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    margin: 13,
    flexDirection: "row",
  },
  backButton: {
    flex: 1,
    margin: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
});
