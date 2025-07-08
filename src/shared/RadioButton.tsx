import React, { memo } from 'react';
import {
    View,
    Pressable,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
    ColorValue,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';

export interface RadioButtonProps {
    /** Any ReactNode (string, text with icon, etc.) */
    label: React.ReactNode;
    /** Is this option currently selected? */
    selected: boolean;
    /** Callback fired on press */
    onPress: () => void;
    /** Colour for selected border & fill (defaults to theme blue) */
    color?: ColorValue;

    // Style overrides
    containerStyle?: StyleProp<ViewStyle>;
    outerCircleStyle?: StyleProp<ViewStyle>;
    innerCircleStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    selected,
    onPress,
    color = '#007AFF',
    containerStyle,
    outerCircleStyle,
    innerCircleStyle,
    labelStyle,
}) => {
   const rippleColor = `${String(color)}32`; // Light transparent

    const content = (
        <View style={[styles.container, containerStyle]}>
            <View
                style={[
                    styles.outerCircle,
                    { borderColor: color },
                    outerCircleStyle,
                ]}
            >
                {selected && (
                    <View
                        style={[
                            styles.innerCircle,
                            { backgroundColor: color },
                            innerCircleStyle,
                        ]}
                    />
                )}
            </View>

            {typeof label === 'string' ? (
                <Text style={[styles.label, labelStyle]}>{label}</Text>
            ) : (
                label
            )}
        </View>
    );

    // 👇 Ensure ripple works by using TouchableNativeFeedback on Android
    return Platform.OS === 'android' ? (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple(rippleColor, false, 24)}
        >
            <View style={{ borderRadius: 28, overflow: 'hidden' }}>{content}</View>
        </TouchableNativeFeedback>
    ) : (
        <Pressable onPress={onPress}>{content}</Pressable>
    );
};



export default memo(
    RadioButton,
    (prev, next) =>
        prev.selected === next.selected &&
        prev.label === next.label &&
        prev.color === next.color &&
        prev.containerStyle === next.containerStyle &&
        prev.outerCircleStyle === next.outerCircleStyle &&
        prev.innerCircleStyle === next.innerCircleStyle &&
        prev.labelStyle === next.labelStyle
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        backgroundColor: 'transparent',
    },
    outerCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    label: {
        marginLeft: 12,
        fontSize: 16,
        color: '#fff',
    },
});
