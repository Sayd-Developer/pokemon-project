'use client'

import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Badge } from "react-native-paper";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleMessage = async (event: any) => {
    const { type, name } = JSON.parse(event.nativeEvent.data);
    if (type === "like") {
      setFavorites((prevFavorites) => [...prevFavorites, name]);
      await AsyncStorage.setItem("favorites", JSON.stringify([...favorites, name]));
    } else if (type === "dislike") {
      const updatedFavorites = favorites.filter((pokemon) => pokemon !== name);
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const loadFavorites = async () => {
    const savedFavorites = await AsyncStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://pokemon-project-nine-gamma.vercel.app/" }}
        onMessage={handleMessage}
        javaScriptEnabled={true}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
        <Button title="Home" onPress={() => { }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Button title="Favorites" onPress={() => { }} />
          <Badge>{favorites.length}</Badge>
        </View>
      </View>
    </View>
  );
};

export default App;
