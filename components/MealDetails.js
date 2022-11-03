import { Text, View, StyleSheet } from "react-native";

function MealDetails({
  duration,
  complexity,
  price,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}M  - </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {price.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {/* {affordability.toUpperCase()} */}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
