import React from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { scale, verticalScale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import image from '../assets';
import StatusBar1 from '../Compoent/StatusBar';
import Buttoncompoent from '../Compoent/Buttoncompoent';

const { width, height } = Dimensions.get('window');
const COLORS = { primary: '#282534', white: '#fff', black: "#000", blue: '#0C7EFA' };
const slides = [
    {
        id: '1',
        image: image.monkey,
        title: 'Kids Story',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
    },
    {
        id: '2',
        image: image.child,
        title: 'Kids Story',
        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
    },

];

const Slide = ({ item }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: moderateVerticalScale(40), backgroundColor: "white", justifyContent: 'center', width: Dimensions.get('window').width, alignItems: 'center' }}>
            <Image
                source={item?.image}
                style={{ marginTop: moderateVerticalScale(20), height: moderateScale(300), width: moderateScale(280), resizeMode: 'contain' }}
            />
            <View style={{ marginTop: moderateVerticalScale(20) }}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const OnBoarding = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };

    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                {/ Indicator container /}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20,
                    }}>
                    {/ Render indicator /}
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: "#25B1E0",
                                    width: 11,
                                    height: 11,
                                    borderRadius: moderateScale(2)
                                },
                            ]}
                        />
                    ))}
                </View>

               

                <Buttoncompoent onPress={() => navigation.navigate('Homescreen')}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <StatusBar1 />
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: "#01031A",
        fontSize: 16,
        marginTop: 10,
        maxWidth: '75%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: "black",
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        backgroundColor: "grey",
        marginHorizontal: 3,
        borderRadius: moderateScale(5),
        width: 11,
        height: 11,
        borderRadius: moderateScale(2)
    },
    btn: {
        flex: 1,
        height: 47,
        borderRadius: 10,
        backgroundColor: "#F08072",
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default OnBoarding;
