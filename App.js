import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowHeight = Dimensions.get("window").height;
export default App = () => {
  const [brandID, setBrandID] = useState(null);
  const brands = [
    {
      id: 1,
      brand: "Toyota",
      models: [
        { id: 1, name: "Etios" },
        { id: 2, name: "Fortuner" },
        { id: 3, name: "Etios Cross" },
        { id: 4, name: "Land Cruiser" },
      ],
    },
    {
      id: 2,
      brand: "Honda",
      models: [
        { id: 1, name: "City IVTEC" },
        { id: 2, name: "Brio" },
        { id: 3, name: "City ZX" },
        { id: 4, name: "CRV" },
      ],
    },
    {
      id: 3,
      brand: "Subaru",
      models: [
        { id: 1, name: "Outback" },
        { id: 2, name: "Impreza" },
        { id: 3, name: "Leborg" },
        { id: 4, name: "XV Crosstrek" },
      ],
    },
    {
      id: 4,
      brand: "Suzuki",
      models: [
        { id: 1, name: "Swift" },
        { id: 2, name: "Baleno" },
        { id: 3, name: "Celerio" },
        { id: 4, name: "Ertiga" },
      ],
    },
    {
      id: 5,
      brand: "Mitsubishi",
      models: [
        { id: 1, name: "Swift" },
        { id: 2, name: "Baleno" },
        { id: 3, name: "Celerio" },
        { id: 4, name: "Ertiga" },
      ],
    },
    {
      id: 6,
      brand: "Isuzu",
      models: [
        { id: 1, name: "Swift" },
        { id: 2, name: "Baleno" },
        { id: 3, name: "Celerio" },
        { id: 4, name: "Ertiga" },
      ],
    },
  ];
  const handleOnPress = (item) => {
    console.log(item);
    setBrandID(item);
  };
  const renderVehicles = ({ item }) => (
    <TouchableOpacity
      style={[styles.boxWrapper, styles.boxWrapper]}
      onPress={() => handleOnPress(item.id)}
    >
      <View style={styles.brandWrapper}>
        {/* onPress={handleOnPress(item.id)} */}
        <Text style={styles.brand}>{item.brand}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.vehicleWrapper}>
        <FlatList
          data={brands}
          renderItem={renderVehicles}
          keyExtractor={(item) => item.id}
          // horizontal={true}
          numColumns={4}
        ></FlatList>
      </View>
      <View style={styles.modelsWrapper}>
        <Text>Model List</Text>
        <View></View>
      </View>

      {/* { ? (
        <View>
          <Text>Hello</Text>
        </View>
      ) : (
        ""
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  vehicleWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  boxWrapper: {
    flex: 1,
  },

  brandWrapper: {
    width: 80,
    height: 100,
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 10,
    marginRight: 10,
  },
  boxShadow: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  // bodyWrapper: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // modelsWrapper: {
  //   flex: 1,
  //   borderWidth: 1,
  //   borderColor: "red",
  //   width: "100%",
  //   alignItems: "center",
  // },

  // brand: {},
});
