import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'small' | 'medium' | 'large';

interface LoadingButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loadingText?: string;
  testID?: string;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,
  style,
  textStyle,
  variant = 'primary',
  size = 'medium',
  loadingText,
  testID,
}) => {
  const isDisabled = disabled || loading;

  const getButtonStyle = (): (ViewStyle | ImageStyle)[] => {
    const baseStyle: (ViewStyle | ImageStyle)[] = [styles.button];
    
    // Add size style
    switch (size) {
      case 'small':
        baseStyle.push(styles.small);
        break;
      case 'large':
        baseStyle.push(styles.large);
        break;
      default:
        baseStyle.push(styles.medium);
    }
    
    // Add variant style
    switch (variant) {
      case 'secondary':
        baseStyle.push(styles.secondary);
        break;
      case 'outline':
        baseStyle.push(styles.outline);
        break;
      default:
        baseStyle.push(styles.primary);
    }

    if (isDisabled) {
      baseStyle.push(styles.disabled);
    }

    return baseStyle;
  };

  const getTextStyle = (): TextStyle[] => {
    const baseStyle: TextStyle[] = [styles.text];
    
    // Add size-specific text style
    switch (size) {
      case 'small':
        baseStyle.push(styles.smallText);
        break;
      case 'large':
        baseStyle.push(styles.largeText);
        break;
      default:
        baseStyle.push(styles.mediumText);
    }
    
    // Add variant-specific text style
    switch (variant) {
      case 'secondary':
        baseStyle.push(styles.secondaryText);
        break;
      case 'outline':
        baseStyle.push(styles.outlineText);
        break;
      default:
        baseStyle.push(styles.primaryText);
    }

    if (isDisabled) {
      baseStyle.push(styles.disabledText);
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={isDisabled}
      testID={testID}
    >
      {loading ? (
        <>
          <ActivityIndicator
            size="small"
            color={variant === 'outline' ? '#007AFF' : '#FFFFFF'}
            style={styles.spinner}
          />
          <Text style={[getTextStyle(), textStyle]}>
            {loadingText || 'Loading...'}
          </Text>
        </>
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  } as ViewStyle,
  
  // Size variants
  small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 36,
  } as ViewStyle,
  medium: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    minHeight: 48,
  } as ViewStyle,
  large: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    minHeight: 56,
  } as ViewStyle,

  // Color variants
  primary: {
    backgroundColor: '#007AFF',
  } as ViewStyle,
  secondary: {
    backgroundColor: '#6C757D',
  } as ViewStyle,
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#007AFF',
  } as ViewStyle,
  disabled: {
    backgroundColor: '#E9ECEF',
    shadowOpacity: 0,
    elevation: 0,
  } as ViewStyle,

  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  } as TextStyle,
  smallText: {
    fontSize: 14,
  } as TextStyle,
  mediumText: {
    fontSize: 16,
  } as TextStyle,
  largeText: {
    fontSize: 18,
  } as TextStyle,
  primaryText: {
    color: '#FFFFFF',
  } as TextStyle,
  secondaryText: {
    color: '#FFFFFF',
  } as TextStyle,
  outlineText: {
    color: '#007AFF',
  } as TextStyle,
  disabledText: {
    color: '#6C757D',
  } as TextStyle,

  spinner: {
    marginRight: 8,
  } as ViewStyle,
});

export default LoadingButton;