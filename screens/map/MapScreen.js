import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker, Callout } from "react-native-maps";
import { useSelector } from "react-redux";

import FiltersList from "../../components/UI/FiltersList";
import CustomSearchRounded from "../../components/UI/CustomSearchRounded";

const filterList = [
  { id: "f1", title: "Filter", isSelected: false },
  { id: "f2", title: "Favoris", isSelected: true },
  { id: "f3", title: "Catégories", isSelected: false },
  { id: "f4", title: "Marque", isSelected: false },
  { id: "f5", title: "Ouvert", isSelected: false }
];

const MapScreen = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState({
    latitude: 45.7663955,
    longitude: 4.8355592,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1
  });

  const shops = useSelector((state) => state.shops.shops);

  return (
    <View style={styles.screen}>
      <View>
        <View style={{ paddingTop: 10, paddingHorizontal: 10 }}>
          <View style={styles.searchContainer}>
            <CustomSearchRounded
              placeholder={"Recherchez un magasin"}
              onChangeText={(text) => setSearchQuery(text)}
              onStartSearch={() => {
                console.log("chercher");
              }}
              style={{ flex: 1 }}
            />
            <View style={styles.locationButtonContainer}>
              <Ionicons name="location-outline" size={35} color="#989898" />
            </View>
          </View>
          <FiltersList
            selectedFilterId="f2"
            data={filterList}
            onSelect={(filterId) => {
              console.log("Filter selected: " + filterId);
            }}
          />
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            mapType="standard"
            initialRegion={userLocation}
            // onUserLocationChange={(region) => console.log("user mooved")}
            // onRegionChange={(region) => console.log("changed")}
            // onRegionChangeComplete={(region) => console.log("changed done")}
            minZoomLevel={5}
            // maxZoomLevel={14}
            showsMyLocationButton={true}
            showsUserLocation={true}
          >
            {shops.map((shop, index) => (
              <Marker
                key={index}
                coordinate={shop.coordinates}
                // onPress={() => console.log(shop)}
              >
                <View style={styles.markerStyle}>
                  {/* <Text style={{ color: "white" }}>Shop</Text> */}
                  <Ionicons name="home-outline" size={25} color="black" />
                </View>
                <Callout tooltip>
                  <View style={styles.tooltipStyle}>
                    <Text numberOfLines={1}>{shop.title}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        </View>
      </View>
    </View>
  );
};

export const screenOptions = {
  headerTitle: "Carte des shops"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  locationButtonContainer: {
    marginLeft: 4,
    width: 32,
    alignItems: "center"
  },
  mapContainer: {
    marginTop: 15
  },
  map: {
    width: Dimensions.get("window").width,
    height: "100%"
  },
  markerStyle: {
    // backgroundColor: "black",
    // padding: 10,
  },
  tooltipStyle: {
    borderRadius: 15,
    padding: 7,
    width: 150,
    height: 100,
    alignItems: "center",
    flex: 1,
    backgroundColor: "white"
  }
});

export default MapScreen;
