import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'

interface Props {
    heading: string,
    subHeading?: string,
    headingStyle?: TextStyle,
    subHeadingStyle?: TextStyle,
}

const Heading = ({ heading, subHeading, headingStyle, subHeadingStyle }: Props) => {
    return (<View>
        <Text style={[styles.heading, headingStyle]}>
            {heading}
        </Text>
        <Text style={[styles.subHeading, subHeadingStyle]}>{subHeading}</Text>
    </View>)
}

export default Heading

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 600,
        textAlign: 'center',
        color: "#fff",
        lineHeight: 30
    },
    subHeading: {
        fontSize: 12,
        textAlign: 'center',
        color: "#fff",
        lineHeight: 20
    },
})