import { Text, View, StyleSheet } from "react-native";

function MealDetails({
  duration,
  ingredients,
  price,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration} m </Text>
      <Text style={[styles.price, textStyle]}>
        {price.toUpperCase()}
      </Text>
      {/* <Text style={[styles.detailsItem, textStyle]}>
        {ingredients.toUpperCase()}
      </Text> */}
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    flex:1,
    color:'#128917',
    fontSize:16,
    fontWeight:'400',
    lineHeight:16,
    textAlign:'left'
  },
  price:{
    flex:1,
    color:'#128917',
    fontSize:16,
    fontWeight:'400',
    lineHeight:16,
    textAlign:'right'
  }
});
