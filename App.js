import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowHeight = Dimensions.get("window").height;
const boxWidth = Dimensions.get("window").width / 4 - 17;
import brands from "./data/brands";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const BrandScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.vehicleWrapper}>
      {brands.map(({ id, brand, models }) => (
        <TouchableOpacity
          key={id}
          onPress={() =>
            navigation.navigate("Model", {
              id: id,
              brand: brand,
              models: models,
            })
          }
        >
          <View style={[styles.boxWrapper, styles.shadowStyle]}>
            <View style={styles.brandWrapper}>
              <Text style={styles.brand}>{brand}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>

    {/* {brandID ? console.log("hello") : console.log("hi")} */}
  </View>
);
const ModelScreen = ({ route, navigation }) => {
  const { models } = route.params;
  console.log(models);

  return (
    <View style={styles.container}>
      <View style={styles.vehicleWrapper}>
        {models.map(({ id, name }) => (
          <TouchableOpacity key={id}>
            <View style={[styles.boxWrapper, styles.shadowStyle]}>
              <View style={styles.brandWrapper}>
                <Text style={styles.brand}>{name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Brand" component={BrandScreen}></Stack.Screen>
        <Stack.Screen name="Model" component={ModelScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>
    //   <View style={styles.vehicleWrapper}>
    //     {brand.map(({ id, brand, models }) => (
    //       <TouchableOpacity key={id} onPress={() => handleOnPress(id, models)}>
    //         <View style={[styles.boxWrapper, styles.shadowStyle]}>
    //           <View style={styles.brandWrapper}>
    //             <Text style={styles.brand}>{brand}</Text>
    //           </View>
    //         </View>
    //       </TouchableOpacity>
    //     ))}
    //   </View>

    //   {/* {brandID ? console.log("hello") : console.log("hi")} */}
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fafafa",
  },
  vehicleWrapper: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",

    marginHorizontal: 10,
  },
  brandWrapper: {
    width: boxWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  modelWrapper: {
    flex: 1,
  },
  boxWrapper: {
    height: 100,
    marginHorizontal: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  shadowStyle: {
    borderWidth: 1,
    borderColor: "#DADADA",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  // bodyWrapper: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // modelsWrapper: {
  //   flex: 1,
  //   borderWidth: 1,
  //   marginTop: 20,
  //   borderColor: "red",
  //   width: "100%",
  //   alignItems: "center",
  // },

  // brand: {},
});
