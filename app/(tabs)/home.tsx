import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("@/assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5) }}
          />
          <BellIcon size={hp(4)} color="gray" />
        </View>

        {/* greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{fontSize: hp(1.7)}} className="text-neutral-600">Hello, Ranjit!</Text>
          <View>
            <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">
                Make your own Food,
            </Text>
          </View>
          <Text style={{fontSize: hp(3.8)}} className="font-semibold text-neutral-600">
                stay at <Text className="text-amber-400">home</Text>
           </Text>
        </View>

        {/* search bar */}
        <View>
          <TextInput placeholder="Search any recipe" />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color="gray" />
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Home;
