import React, { useRef, RefObject, useState } from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
  FlatListProps,
} from "react-native";
import { pictures } from "./pictures";

const { width, height } = Dimensions.get("screen");

const IMAGE_SIZE = 80;
const SPACING = 10;

export function GalleryView() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [images] = useState([...pictures]);

  const topRef: RefObject<FlatList> = useRef(null);
  const thumbRef: RefObject<FlatList> = useRef(null);

  const scrollToActiveIndex = (index: number) => {
    setActiveIndex(index);

    // scroll FlatList
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (!images) return <Text style={{ color: "#000" }}>elias alexandre</Text>;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        ref={topRef}
        data={images}
        keyExtractor={(item) => String(item)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        renderItem={({ item }) => (
          <View style={{ width, height }}>
            <Image style={{ width, height }} source={{ uri: item }} />
          </View>
        )}
        style={[StyleSheet.absoluteFillObject]}
      />

      <FlatList
        ref={thumbRef}
        data={images}
        keyExtractor={(item) => String(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: "absolute", bottom: IMAGE_SIZE }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
            <Image
              style={{
                width: IMAGE_SIZE,
                height: IMAGE_SIZE,
                borderRadius: 12,
                marginRight: SPACING,
                borderWidth: 2,
                borderColor: activeIndex === index ? "#FFFFFF" : "transparent",
              }}
              source={{ uri: item }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
