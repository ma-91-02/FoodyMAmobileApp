import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function LanguagesTitle({ title, onPress }) {
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
          <View style={styles.flag}>
            {/* <Text>*</Text> */}
          </View>
          <View style={styles.flex}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default LanguagesTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 8,
    marginBottom: 8,
    // height: 10,
    borderRadius: 8,
    // elevation: 4,
    alignItems: "center",
    backgroundColor: "#3a5f56",
    // shadowColor: "black",
    // shadowOpacity: 0.03,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // overflow: Platform.os === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    // flex: 1,
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    // marginRight:"80%",
    // paddingStart:
  },
  // flex: { flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' },
  title: {
    // flex:12,
    // fontWeight: "bold",
    fontStyle:'regular',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 24,
    color: "#fff",
    fontWeight: "300",
  },
});
