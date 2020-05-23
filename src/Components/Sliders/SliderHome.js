import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  useWindowDimensions,
  FlatList
} from "react-native";
import ItemHomeSlider from "./ItemHomeSlider";
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      scrollContainer: {
        position: 'absolute',
        // zIndex: 1,
        alignItems: "center",
        justifyContent: "center"
      },
      indicatorContainer: {
        position: 'relative',
        bottom: 130,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      },
      normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "#93278f",
        marginHorizontal: 4
      }
})

export const SliderHome = (props) => {

    const scrollX = useRef(new Animated.Value(0)).current;
    const { width: windowWidth } = useWindowDimensions();
    const { children, sliders } = props;
    return(
        // <SafeAreaView style={styles.container}>
            <View style={styles.scrollContainer}>
                <ScrollView
                horizontal={true}
                style={{ flex: 1}}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([
                    {
                    nativeEvent: {
                        contentOffset: {
                        x: scrollX
                        }
                    }
                    }
                ])}
                scrollEventThrottle={1}
                >
                    <FlatList
                        data={sliders}
                        renderItem={({item, imageIndex}) => (
                            <View
                                style={{ width: windowWidth, height: 250 }}
                                key={imageIndex}
                            >
                                <ItemHomeSlider image={item.image} title={item.title}/>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                        numColumns={1}
                        horizontal={true}
                    />
                </ScrollView>
                <View style={styles.indicatorContainer}>
                        {sliders.map((slider, imageIndex) => {
                            const width = scrollX.interpolate({
                            inputRange: [
                                windowWidth * (imageIndex - 1),
                                windowWidth * imageIndex,
                                windowWidth * (imageIndex + 1)
                            ],
                            outputRange: [8, 16, 8],
                            extrapolate: "clamp"
                            });
                            return (
                            <Animated.View
                                key={imageIndex}
                                style={[styles.normalDot, { width }]}
                            />
                            );
                        })}
                    </View>
            </View>
        //</SafeAreaView>
    )
}
