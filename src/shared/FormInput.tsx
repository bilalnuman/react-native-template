import React, { memo, useRef, useState } from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TextInputProps,
    ViewStyle,
    TextStyle,
    Animated,
    Easing,
    Pressable,
} from 'react-native';
import { Controller, Control } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FormInputProps extends TextInputProps {
    name: string;
    control: Control<any>;
    error?: string;
    floatLabel?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    invalidWrapperStyle?: ViewStyle;
    inputWrapper?: ViewStyle;
    invalidInputStyle?: TextStyle;
    label?: string;
    enablePasswordToggle?: boolean;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    labelStyle?: TextStyle;
    errorStyle?: TextStyle;
    iconColor?:string
}

const FLOAT_ANIM_DURATION = 150;
export const PLACEHOLDER_COLOR = '#999';

const FormInput: React.FC<FormInputProps> = ({
    name,
    control,
    error,
    floatLabel = false,
    label,
    icon,
    iconPosition = 'right',
    iconColor = '#999',
    enablePasswordToggle,
    containerStyle,
    inputStyle,
    invalidWrapperStyle,
    invalidInputStyle,
    labelStyle,
    errorStyle,
    secureTextEntry,
    inputWrapper,
    multiline,
    numberOfLines = 4,
    ...inputProps
}) => {
    const [secure, setSecure] = useState<boolean>(!!secureTextEntry);
    const [focused, setFocused] = useState(false);

    const anim = useRef(new Animated.Value(floatLabel ? 0 : 1)).current;
    const animValue = useRef(floatLabel ? 0 : 1);

    const animateTo = (toValue: 0 | 1) => {
        if (!floatLabel || animValue.current === toValue) return;
        animValue.current = toValue;
        Animated.timing(anim, {
            toValue,
            duration: FLOAT_ANIM_DURATION,
            useNativeDriver: false,
            easing: Easing.ease,
        }).start();
    };

    const labelTranslateY = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -18],
    });

    const labelScale = anim.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });

    const isInvalid = !!error;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => {
                const hasValue = (value?.length ?? 0) > 0;
                if (hasValue) animateTo(1);
                if (!hasValue && !focused) animateTo(0);

                return (
                    <View style={[styles.container, containerStyle]}>

                        {label && floatLabel? (
                            <Animated.Text
                                style={[
                                    styles.label,
                                    labelStyle,
                                    floatLabel && {
                                        transform: [{ translateY: labelTranslateY }, { scale: labelScale }],
                                    },
                                    {
                                        top: floatLabel ? 0 : undefined,
                                        color:
                                            focused || hasValue ? '#007AFF' : PLACEHOLDER_COLOR,
                                    },
                                ]}
                            >
                                {label}
                            </Animated.Text>
                        )
                        : label&&<Text style={[labelStyle]}>{label}</Text>}

                        <View
                            style={[
                                styles.inputWrapper,
                                inputWrapper,
                                focused && { borderColor: '#007AFF' },
                                isInvalid && { borderColor: '#FF3B30' },
                                isInvalid ? { backgroundColor: "transparent" } : invalidWrapperStyle,
                                !isInvalid && hasValue && { borderColor: '#34C759' }

                            ]}
                        >
                            {iconPosition === 'left' && icon && (
                                <View style={styles.iconLeft}>{icon}</View>
                            )}

                            <TextInput
                                style={[
                                    styles.input,
                                    multiline && { height: numberOfLines * 24 },
                                    inputStyle,
                                    isInvalid && invalidInputStyle,
                                ]}
                                value={value}
                                onChangeText={onChange}
                                onBlur={() => {
                                    setFocused(false);
                                    onBlur();
                                    if (!hasValue) animateTo(0);
                                }}
                                onFocus={() => {
                                    setFocused(true);
                                    animateTo(1);
                                }}
                                placeholder={floatLabel ? label : inputProps.placeholder || label}
                                placeholderTextColor={PLACEHOLDER_COLOR}
                                secureTextEntry={secure}
                                multiline={multiline}
                                numberOfLines={numberOfLines}
                                {...inputProps}
                            />

                            {enablePasswordToggle ? (
                                <Pressable onPress={() => setSecure(!secure)}>
                                    <Icon
                                        name={secure ? 'eye-off' : 'eye'}
                                        size={20}
                                        color={iconColor}
                                        style={styles.iconRight}
                                    />
                                </Pressable>
                            ) : (
                                iconPosition === 'right' && icon && (
                                    <View style={styles.iconRight}>{icon}</View>
                                )
                            )}
                        </View>
                        {isInvalid && (
                            <Text style={[styles.error, errorStyle]}>{error}</Text>
                        )}
                    </View>
                );
            }}
        />
    );
};

export default memo(FormInput);
const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    label: {
        position: 'absolute',
        left: 0,
        fontSize: 14,
        fontWeight: '500',
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
        color:"#fff"
    },
    iconLeft: {
        marginRight: 8,
    },
    iconRight: {
        marginLeft: 8,
    },
    error: {
        color: '#FF3B30',
        fontSize: 12,
        marginTop: 4,
    },
});
