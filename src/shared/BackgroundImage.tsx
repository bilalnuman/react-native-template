import React, { ReactNode } from 'react';
import {
    ImageBackground,
    ImageResizeMode,
    StyleProp,
    ImageSourcePropType,
    StyleSheet,
    ViewStyle,
} from 'react-native';

interface Props {
    source?: ImageSourcePropType;
    resizeMode?: ImageResizeMode;
    children?: ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
}

const BackgroundImage = ({
    source = require('@/assets/splash-screen.png'),
    resizeMode = 'cover',
    children,
    containerStyle,
    ...rest
}: Props) => {
    return (
        <ImageBackground
            source={source}
            style={[StyleSheet.absoluteFill, styles.backgroundImage, containerStyle]}
            resizeMode={resizeMode}
            {...rest}
        >
            {children}
        </ImageBackground>
    );
};

export default BackgroundImage;

const styles = StyleSheet.create({
    backgroundImage: {
        backgroundColor: '#358AC9',
    },
});
