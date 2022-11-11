import {
  Pressable,
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function CategoryGridTitle({ title, onPress }) {
  const urlImage=
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg";
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.containerImage}>
        {/* <Text>image</Text> */}
          <Image source={{ uri: urlImage }} style={styles.image}  />
          </View>
          <LinearGradient style={styles.containerTitle} colors={["#FFFFFF", "#D2FFAF"]}>
            <Text style={styles.title}>{title}</Text>
          </LinearGradient>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    elevation: 4,
    alignItems: "center",
    backgroundColor: "white",
    // shadowColor: "#128917",
    // shadowOpacity: 0.25,

    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    overflow: Platform.os === "android" ? "hidden" : "visible",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,

  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    flexDirection:'column',
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    height: 160,
    width:'100%',
    // width:200,
    overflow:"hidden",
  },
  containerImage: {
    flex: 4,
    flexDirection:'row',
    backgroundColor: "#D2FFAF",
    width: "100%",
    margin:0
  },
  image: {
    width: "100%",
    margin:0,
    // height: 140,
  },
  containerTitle:{
    flex:1,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    width:'100%',
    padding:0,
    backgroundColor: "#D2FFAF",
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderWidth:1,
    textAlign:'center',
  },
  title: {
    flex:1,
    color:'#128917',
    width: "100%",
    fontSize: 16,
    padding:3,
    justifyContent:'center',
    alignItems:'center',
    fontWeight: "400",
    textAlign: "center",
    alignItems:'center'
  },
});
