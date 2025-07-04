import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const BackButton = ({ callback }: { callback?: Function }) => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        callback && callback();
        navigation.canGoBack() && navigation.goBack()
    }

    return (
        !navigation.canGoBack() ? <View style={{ height: 60,backgroundColor:"#fff" }}></View>:
            <TouchableOpacity
                onPress={handleBackPress}
                style={styles.container}
            >
                <MaterialIcon style={styles.icon} name="keyboard-backspace" size={24} color="#000" />
            </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        paddingTop: 30,
        paddingVertical: 8
    },
    icon: {
        alignSelf: "flex-start"
    }
})