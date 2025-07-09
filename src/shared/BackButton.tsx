import { StyleSheet, TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    iconColor?: string,
    isBack?: boolean,
}

const BackButton = ({ onPress = () => { }, style, containerStyle, iconColor = "#fff", isBack = true }: Props) => {
    if (!isBack) {
        return null
    }
    else {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={containerStyle}
            >
                <MaterialIcon
                    style={[styles.icon, style]}
                    name="keyboard-backspace"
                    size={24}
                    color={iconColor}
                />
            </TouchableOpacity>
        );
    }
};

export default BackButton;

const styles = StyleSheet.create({

    icon: {
        alignSelf: 'flex-start',
    },
});
