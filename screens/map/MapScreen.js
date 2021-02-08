import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Dimensions, Text, TouchableWithoutFeedback, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker, Callout } from "react-native-maps";
import { useSelector, useDispatch } from "react-redux";
import * as Location from "expo-location";

import ErrorOccured from "../../components/UI/ErrorOccured";
import * as shopsActions from "../../store/actions/shops";
import FiltersList from "../../components/UI/FiltersList";
import CustomSearchRounded from "../../components/UI/CustomSearchRounded";
import CustomLoader from "../../components/UI/CustomLoader";

const filterList = [
  { id: "f1", title: "Filter", isSelected: false },
  { id: "f2", title: "Favoris", isSelected: true },
  { id: "f3", title: "Catégories", isSelected: false },
  { id: "f4", title: "Marque", isSelected: false },
  { id: "f5", title: "Ouvert", isSelected: false }
];

const MapScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const latitudeDelta = 0.1;
  const longitudeDelta = 0.1;

  const [userLocation, setUserLocation] = useState({
    latitude: 45.7663955,
    longitude: 4.8355592,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta
  });

  const [cameraPosition, setCameraPosition] = useState({
    latitude: 45.7663955,
    longitude: 4.8355592,
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta
  });

  function goToUserPosition() {
    setCameraPosition(userLocation);
  }

  const shopsToPrint = useSelector((state) => state.shops.shopsOnTheMap);

  const dispatch = useDispatch();

  // Fonction pour récuperer les éléments
  const loadShopsFromLocation = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(shopsActions.fetchShopsFromLocation());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);
  }, [dispatch, setIsLoading, setError]);

  // Actualise si le state change
  useEffect(() => {
    setIsLoading(true);
    loadShopsFromLocation().then(() => {
      setIsLoading(false);
    });
  }, [dispatch, loadShopsFromLocation]);

  if (error) {
    console.log(error);
    return <ErrorOccured onPress={loadShopsFromLocation} />;
  }
  if (isLoading) {
    return <CustomLoader />;
  }
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
              <TouchableWithoutFeedback onPress={goToUserPosition}>
                <Ionicons name="location-outline" size={35} color="#989898" />
              </TouchableWithoutFeedback>
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
            region={cameraPosition}
            // onRegionChange={
            //   (result) => console.log(cameraPosition)
            //   // setCameraPosition({
            //   //   latitude: result.latitude,
            //   //   longitude: result.longitude,
            //   //   latitudeDelta: latitudeDelta,
            //   //   longitudeDelta: longitudeDelta
            //   // })
            // }
            onUserLocationChange={(result) =>
              setUserLocation({
                latitude: result.nativeEvent.coordinate.latitude,
                longitude: result.nativeEvent.coordinate.longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta
              })
            }
            // onRegionChange={(region) => console.log("changed")}
            // onRegionChangeComplete={(region) => console.log("changed done")}
            minZoomLevel={5}
            // maxZoomLevel={14}
            showsMyLocationButton={true}
            showsUserLocation={true}
          >
            {shopsToPrint.map((shop, index) => (
              <Marker key={index} coordinate={{ longitude: shop.coordinates[0], latitude: shop.coordinates[1] }} onPress={() => console.log(shop)}>
                {/* <View style={styles.markerStyle}>
                  <Ionicons name="home-outline" size={25} color="black" />
                </View> */}
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
