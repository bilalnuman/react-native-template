import { Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
interface Props {
    heading?: string,
    subHeading?: string,
    logoStyle?: ImageStyle,
    containerStyle?:ViewStyle,
    headingStyle?: TextStyle,
    subHeadingStyle?: TextStyle,
    children?: ReactNode
}
const Logo = ({ heading, subHeading, logoStyle, containerStyle, headingStyle, subHeadingStyle, children }: Props) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <Image source={require('@/assets/logo.png')} style={[styles.logo, logoStyle]} resizeMode={"contain"} />
            {heading && <Text style={[headingStyle, styles.heading]}>{heading}</Text>}
            {subHeading && <Text style={[subHeadingStyle, styles.subHeading]}>{subHeading}</Text>}
            {children}
        </View>
    )
}

export default Logo
const styles = StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center" },
    logo: { width: 60, height: 60 },
    heading: { fontSize: 24, lineHeight: 30, fontWeight: 600, color: "#fff", marginTop: 10 },
    subHeading: { fontSize: 15, lineHeight: 20, color: "#fff", marginTop: 10, textAlign: "center" },
})
