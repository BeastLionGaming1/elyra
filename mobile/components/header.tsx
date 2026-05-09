import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const user = {
  profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtv5W2kZzUEUsrFqwFabzaUELocBmLDWZ1ruM0NbJS-Gj5qK2OY9jNogU&s"
}

function Header() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profile }}/>
      
      <View style={styles.right}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
  }
});

export default Header;