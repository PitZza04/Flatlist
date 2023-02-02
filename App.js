import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowHeight = Dimensions.get("window").height;
const boxWidth = Dimensions.get("window").width / 4 - 16;
console.log(boxWidth);
export default App = () => {
  const [brandID, setBrandID] = useState(undefined);
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
    {
      id: 7,
      brand: "Isuzu",
      models: [
        { id: 1, name: "Swift" },
        { id: 2, name: "Baleno" },
        { id: 3, name: "Celerio" },
        { id: 4, name: "Ertiga" },
      ],
    },
    {
      id: 8,
      brand: "Cas",
      models: [
        { id: 1, name: "Swift" },
        { id: 2, name: "Baleno" },
        { id: 3, name: "Celerio" },
        { id: 4, name: "Ertiga" },
      ],
    },
  ];
  const handleOnPress = useCallback(
    (item) => {
      //setModels(item);.
      // console.log(item);
      setBrandID((brandID) => brandID[item]);
      console.log(brandID);
      // setBrandID((prevData) => prevData[item]);
      // console.log(brandID);
    },
    [brandID]
  );
  // const ShowModel = () => {
  //   <View style={styles.modelWrapper}>
  //     {brandID?.map((item) => (
  //       <Text key={item.id}>{item.name}</Text>
  //     ))}
  //   </View>;
  // };
  // const renderVehicles = ({ item }) => (
  //   <View>
  //     <TouchableOpacity
  //       style={styles.boxWrapper}
  //       onPress={() => handleOnPress(item.id)}
  //     >
  //       <View style={[styles.brandWrapper, styles.boxShadow]}>
  //         {/* onPress={handleOnPress(item.id)} */}
  //         <Text style={styles.brand}>{item.brand}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   </View>
  // );
  return (
    <View style={styles.container}>
      <View style={styles.vehicleWrapper}>
        {brands.map(({ id, brand, models }) => (
          <TouchableOpacity key={id - 1} onPress={() => handleOnPress(id)}>
            <View style={styles.boxWrapper}>
              <View style={[styles.brandWrapper]}>
                <Text style={styles.brand}>{brand}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {brandID ? console.log("hello") : console.log("hi")}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginVertical: 50,
    backgroundColor: "#fff",
  },
  vehicleWrapper: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  brandWrapper: {
    width: boxWidth,
    alignItems: "center",
  },
  modelWrapper: {
    flex: 1,
  },
  boxWrapper: {
    height: 100,
    marginHorizontal: 5,
    marginBottom: 15,
    borderRadius: 10,
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
  //   marginTop: 20,
  //   borderColor: "red",
  //   width: "100%",
  //   alignItems: "center",
  // },

  // brand: {},
});
