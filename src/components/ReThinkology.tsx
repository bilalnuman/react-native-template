import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import Heading from '@/shared/Heading'
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs'
import GradientButton from '@/shared/GradientButton'
import BackButton from '@/shared/BackButton'

const ReThinkology = ({ onTabChange }: HomeScreenPropsTab) => {
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View style={[styles.container]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("Gender")} />
                </View>
                <Heading heading='Welcome to ReThinkology'
                    subHeading='Your faith matters. Let’s align your path with what you value most.'
                    subHeadingStyle={{ paddingHorizontal: 30 }}
                />
                <View style={styles.imgContainer}>
                    <Image source={require('@/assets/img1.png')} resizeMode="cover" style={styles.image} />
                </View>
            </View>
            <GradientButton onPress={() => onTabChange("AgeChoose")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default ReThinkology

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    imgContainer: {
        height: 335,
        marginTop: 8,
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
})