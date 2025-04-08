import { View, Text, ScrollView } from "react-native";
import React from "react";

const Categories = () => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-4"
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {/* Add categories here */}
        <Text>Category 1</Text>
        <Text>Category 2</Text>
        <Text>Category 3</Text>
        <Text>Category 4</Text>
        <Text>Category 5</Text>
        <Text>Category 6</Text>
        <Text>Category 7</Text>
        <Text>Category 8</Text>
        <Text>Category 9</Text>
        <Text>Category 10</Text>
      </ScrollView>
    </View>
  );
};

export default Categories;
