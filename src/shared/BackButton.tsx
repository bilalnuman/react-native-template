import { StyleSheet, TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    callback?: () => void;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    iconColor?: string
}

const BackButton = ({ callback, style, containerStyle, iconColor = "#fff" }: Props) => {
    const navigation = useNavigation();

    const handleBackPress = () => {
        callback?.();
        if (navigation.canGoBack()) navigation.goBack();
    };

    if (!navigation.canGoBack()) {
        return <View style={[styles.container, containerStyle]} />;
    }

    return (
        <TouchableOpacity
            onPress={handleBackPress}
            style={[styles.container, containerStyle]}
        >
            <MaterialIcon
                style={[styles.icon, style]}
                name="keyboard-backspace"
                size={24}
                color={iconColor}
            />
        </TouchableOpacity>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        paddingBottom: 50,
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    icon: {
        alignSelf: 'flex-start',
    },
});
