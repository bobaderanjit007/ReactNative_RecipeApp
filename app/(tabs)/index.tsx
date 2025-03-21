import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);
  const router = useRouter();

  useEffect(() => {
    ring1padding.value = 0;
    ring2padding.value = 0;

    setTimeout(() => {
      ring1padding.value = withSpring(ring1padding.value + hp(5));
    }, 100);
    setTimeout(() => {
      ring2padding.value = withSpring(ring2padding.value + hp(4));
    }, 300);
    setTimeout(() => {
      router.replace("/home");
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
      <StatusBar style="light" />

      {/* Logo image with ring */}
      <Animated.View
        className="bg-white/20 rounded-full"
        style={{ padding: ring1padding }}
      >
        <Animated.View
          className="bg-white/20 rounded-full"
          style={{ padding: ring2padding }}
        >
          <Image
            source={require("@/assets/images/logo.webp")}
            style={{ width: hp(20), height: hp(20) }}
          />
        </Animated.View>
      </Animated.View>

      {/* title and punchline */}
      <View className="flex items-center space-y-2">
        <Text
          style={{ fontSize: hp(7) }}
          className="font-bold text-white tracking-widest text-6xl"
        >
          Foody
        </Text>
      </View>
      <Text
        style={{ fontSize: hp(2) }}
        className="font-medium text-white tracking-widest text-lg"
      >
        Food is always right
      </Text>
    </View>
  );
}
