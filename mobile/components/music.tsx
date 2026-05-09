import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function SongCard({ song, onPlay }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: song.poster }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>

      <TouchableOpacity onPress={() => onPlay(song)}>
        <Text style={styles.play}>▶</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  artist: {
    fontSize: 12,
    color: "gray",
  },
  play: {
    fontSize: 20,
    color: "#1DB954",
  },
});