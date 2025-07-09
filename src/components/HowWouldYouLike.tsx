import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Heading from '@/shared/Heading'
import GradientButton from '@/shared/GradientButton'
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs'
import BackButton from '@/shared/BackButton'

const HowWouldYouLike = ({ onTabChange }: HomeScreenPropsTab) => {
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("Aboutus")} />
                </View>
                <View style={styles.container}>
                    <Heading heading='How would you like to be called? '
                        subHeading='Pick the Name You Want to Be Called.'
                    />
                </View>
                <TextInput placeholder="Enter Your Name" style={[styles.radioContainer, { color: "#fff" }]} placeholderTextColor={"#fff"} />
            </View>
            <GradientButton onPress={() => onTabChange("Gender")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default HowWouldYouLike

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    radioContainer: {
        borderWidth: 1,
        height: 54,
        paddingHorizontal: 20,
        alignItems: "center",
        borderRadius: 27,
        flexDirection: "row",
        borderColor: "#fff",
    },
})