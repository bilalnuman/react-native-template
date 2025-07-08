import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Heading from '@/shared/Heading'
import img from '@/assets/img1.png'

const StateofRelease = () => {
    return (
        <View style={{ marginTop: 30 }}>
            <Heading
                heading='State of Release'
                subHeading='Your faith matters. Let’s align your path with what you value most.'
                subHeadingStyle={{ paddingHorizontal: 30 }}
            />
            <View style={styles.imgContainer}>
                <Image source={img} />
            </View>
            <View style={styles.playerContainer}></View>
        </View>
    )
}

export default StateofRelease

const styles = StyleSheet.create({
    imgContainer: {
        height: 335,
        marginTop: 8,
        borderRadius: 15,
        overflow: 'hidden'
    },
    playerContainer: {
        height: 131,
        backgroundColor: "#C7F1FB",
        borderRadius: 15,
        marginTop:16
    },
})