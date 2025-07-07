import React, { ReactNode } from 'react';
import {
    ImageBackground,
    ImageResizeMode,
    StyleProp,
    ImageStyle,
    ImageSourcePropType,
    StyleSheet,
} from 'react-native';

interface Props {
    source?: ImageSourcePropType;
    resizeMode?: ImageResizeMode;
    children?: ReactNode;
    containerStyle?: StyleProp<ImageStyle>;
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
            style={[{ flex: 1 }, containerStyle,styles.backgroundImage]}
            resizeMode={resizeMode}
            {...rest}
        >
            {children}
        </ImageBackground>
    );
};

export default BackgroundImage;

const styles= StyleSheet.create({
      backgroundImage: {
        flex:1,
        width: '100%',
        height: '100%',
        position:"absolute",
        backgroundColor: "#358AC9",
        top:0,
        left:0,
        right:0,
        bottom:0
    },
});
