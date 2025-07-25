import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Heading from '@/shared/Heading'
import img from '@/assets/img1.png'
import GradientButton from '@/shared/GradientButton'
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs'
import BackButton from '@/shared/BackButton'

const StateofRelease = ({ onTabChange }: HomeScreenPropsTab) => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("MyFutureSelfGoals")} />
                </View>
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
            <GradientButton onPress={() => onTabChange("MyFutureSelfLove")} title='Continue' buttonStyle={{ marginTop: 20 }} />
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
        marginTop: 16
    },
})