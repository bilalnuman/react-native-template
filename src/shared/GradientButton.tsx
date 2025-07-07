import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
    StyleProp,
    TextStyle,
    ViewStyle,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientButtonProps {
    onPress: () => void;
    title?: string;
    loading?: boolean;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    gradientColors?: string[];
    gradientLocations?: number[];
}

const GradientButton = ({
    onPress,
    title = 'Submit',
    loading = false,
    buttonStyle,
    textStyle,
    gradientColors = ['#C7F1FB', '#B1E4F3', '#A4DCEE', '#77C1E7', '#77C1E7', '#46A4DF'],
    gradientLocations = [0, 0.26, 0.47, 0.69, 0.89, 1],
}: GradientButtonProps) => {
    return (
        <LinearGradient
            colors={gradientColors}
            locations={gradientLocations}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={[styles.gradient, buttonStyle]}
        >
            <TouchableOpacity onPress={onPress} style={styles.touchable} activeOpacity={0.8}>
                <View style={[styles.touchable, textStyle]}>
                    <Text style={styles.text}>{title}</Text>
                    {loading && <ActivityIndicator size="small" color="#007bff" style={{ marginLeft: 8, marginTop: 3 }} />}
                </View>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default GradientButton;

const styles = StyleSheet.create({
    gradient: {
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    touchable: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",

    },
    text: {
        color: "#103B5B",
        paddingVertical: 13,
        fontWeight: 700,
        fontSize: 18,
    },
});
