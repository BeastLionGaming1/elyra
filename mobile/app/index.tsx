import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/header.tsx";
import SongCard from "../components/music.tsx"

import { songs } from "./songs.js";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, padding: 20}}>
        <View>
          <Header />
          <View>
            <FlatList
              data={songs}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ScrollView>
                  <SongCard song={item} onPlay={(song) => console.log("Play", song)} />
                </ScrollView>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}