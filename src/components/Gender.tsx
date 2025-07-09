import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'
import RadioButton from '@/shared/RadioButton';
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs';
import GradientButton from '@/shared/GradientButton';
import BackButton from '@/shared/BackButton';
const OPTIONS = [
    { label: 'I am Male', value: 'male' },
    { label: 'I am Female', value: 'female' },
    { label: 'I prefer not to say', value: 'other' },
];

const Gender = ({ onTabChange }: HomeScreenPropsTab) => {
    const [selectedValue, setSelectedValue] = useState<string>('male');
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("HowWouldYouLike")} />
                    <TouchableOpacity onPress={() => onTabChange("ReThinkology")}><Text style={{ color: '#fff', fontSize: 16, }}>Skip fo now</Text></TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Heading heading='What is your Gender?'
                        subHeading='Select gender for more specific content'
                    />
                </View>
                <View style={{ gap: 15, marginTop: 15 }}>
                    {OPTIONS.map((option) => (
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
            <GradientButton onPress={() => onTabChange("ReThinkology")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default Gender

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20
    },
    radioContainer: {
        borderWidth: 1,
        height: 56,
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
    },
})