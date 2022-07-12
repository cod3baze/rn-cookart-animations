import React, { RefObject, useCallback, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

import { Composer } from "./composer";
import { screenTypes, ScrollableScreenKeys } from "./screenTypes";

const { width } = Dimensions.get("screen");

const IMAGE_SIZE = 80;
const SPACING = 10;

export function ShazamApp() {
  const [screens] = useState<ScrollableScreenKeys[]>([...screenTypes]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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

  const renderItem = useCallback(
    ({ item }: { item: ScrollableScreenKeys }) => (
      <Composer key={item.id} screen_id={item.id} />
    ),
    [activeIndex]
  );

  const keyExtractor = useCallback((item: any) => String(item.id), []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
      <FlatList
        ref={topRef}
        data={screens}
        keyExtractor={keyExtractor}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        renderItem={renderItem}
        style={[StyleSheet.absoluteFillObject]}
      />

      <FlatList
        ref={thumbRef}
        data={screens}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: "absolute", bottom: IMAGE_SIZE }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({ index }) => (
          <TouchableOpacity
            onPress={() => scrollToActiveIndex(index)}
            style={{
              width: IMAGE_SIZE,
              height: IMAGE_SIZE,
              borderRadius: 12,
              marginRight: SPACING,
              borderWidth: 2,
              borderColor: activeIndex === index ? "#FFFFFF" : "transparent",
              backgroundColor: "#f34",
            }}
          />
        )}
      />
    </View>
  );
}
