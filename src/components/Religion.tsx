import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'
import RadioButton from '@/shared/RadioButton'
import GradientButton from '@/shared/GradientButton';
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs';
import BackButton from '@/shared/BackButton';
const RELIGIOUS = [
    { label: 'Religious', value: 'religious' },
    { label: 'Not Religious', value: 'not_religious' },
    { label: 'Spiritual', value: 'spiritual' },
];


const Religion = ({ onTabChange }: HomeScreenPropsTab) => {
    const [selectedValue, setSelectedValue] = useState<string>('male');

    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("AgeChoose")} />
                    <TouchableOpacity onPress={() => onTabChange("MyFutureSelfGoals")}><Text style={{ color: '#fff', fontSize: 16, }}>Skip fo now</Text></TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Heading heading='Is religion important to you? '
                        subHeading='Your faith matters. Let’s align your path with what you value most.'
                        subHeadingStyle={{ paddingHorizontal: 30 }}
                    />
                </View>
                <View style={{ gap: 15, marginTop: 15 }}>
                    {RELIGIOUS.map((option) => (
                        <View key={option.value} style={[styles.radioContainer, selectedValue === option.value && styles.selectedOption]}>
                            <RadioButton
                                key={option.value}
                                label={option.label}
                                selected={selectedValue === option.value}
                                onPress={() => setSelectedValue(option.value)}
                                color="#fff"
                                labelStyle={styles.label}
                            />
                        </View>
                    ))}
                </View>
            </View>
            <GradientButton onPress={() => onTabChange("MyFutureSelfGoals")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default Religion

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
    label: {
        fontSize: 15,
        fontWeight: 500
    },
    selectedOption: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderColor: 'rgba(255,255,255,0.15)'
    }
});