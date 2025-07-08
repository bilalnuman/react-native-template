import { StatusBar, StyleSheet, View, Animated, Easing } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import React, { useEffect, useRef } from 'react'
import Logo from '@/shared/Logo';
import BackgroundImage from '@/shared/BackgroundImage';

interface SplashScreenProps {
    onReady?: () => void;
    duration?: number;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onReady, duration = 4000 }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;
    const textFadeAnim = useRef(new Animated.Value(0)).current;
    const textSlideAnim = useRef(new Animated.Value(30)).current;
    const backgroundFadeAnim = useRef(new Animated.Value(0)).current;
    const backgroundScaleAnim = useRef(new Animated.Value(1.1)).current;

    useEffect(() => {
        changeNavigationBarColor('transparent', true, true);
        Animated.sequence([
            Animated.parallel([
                Animated.timing(backgroundFadeAnim, {
                    toValue: 1,
                    duration: 1200,
                    easing: Easing.out(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(backgroundScaleAnim, {
                    toValue: 1,
                    duration: 1200,
                    easing: Easing.out(Easing.quad),
                    useNativeDriver: true,
                }),
            ]),
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.out(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.out(Easing.back(1.2)),
                    useNativeDriver: true,
                }),
            ]),
            Animated.parallel([
                Animated.timing(textFadeAnim, {
                    toValue: 1,
                    duration: 800,
                    easing: Easing.out(Easing.quad),
                    useNativeDriver: true,
                }),
                Animated.timing(textSlideAnim, {
                    toValue: 0,
                    duration: 800,
                    easing: Easing.out(Easing.quad),
                    useNativeDriver: true,
                }),
            ]),
        ]).start();
        const timer = setTimeout(() => {
            onReady?.();
        }, duration);

        return () => {
            clearTimeout(timer);
            // changeNavigationBarColor('#ffffff', true, true);
        };
    }, [duration, onReady]);

    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <Animated.View
                style={[
                    styles.backgroundContainer,
                    {
                        opacity: backgroundFadeAnim,
                        transform: [{ scale: backgroundScaleAnim }]
                    }
                ]}
            >
                <BackgroundImage />
            </Animated.View>
            <View style={styles.contentContainer}>
                <Animated.View
                    style={[
                        styles.logoContainer,
                        {
                            opacity: fadeAnim,
                            transform: [{ scale: scaleAnim }]
                        }
                    ]}
                >
                    <Logo />
                </Animated.View>
                <Animated.Text
                    style={[
                        styles.titleText,
                        {
                            opacity: textFadeAnim,
                            transform: [{ translateY: textSlideAnim }]
                        }
                    ]}
                >
                    Re-Thinkology
                </Animated.Text>
            </View>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundContainer: {
        flex: 1,
    },
    contentContainer: {
        position: 'absolute',
        top: -70,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: '100%',
        width: '100%',
    },
    logoContainer: {
        marginTop: 100,
    },
    titleText: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "600",
    },
})