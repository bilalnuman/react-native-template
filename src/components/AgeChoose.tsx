import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'
import GradientButton from '@/shared/GradientButton';
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs';
import BackButton from '@/shared/BackButton';
const CHOICES = ['14 - 17', '18 - 24', '25 - 29', '30 - 34', '35 - 39', '40 - 44', '45 - 49', 'Older than 50'];

const AgeChoose = ({ onTabChange }: HomeScreenPropsTab) => {
    const [choices, setChoice] = useState<string[]>([]);
    const handleChoicePress = (value: string) => {
        setChoice((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("ReThinkology")} />
                    <TouchableOpacity onPress={() => onTabChange("Religion")}><Text style={{ color: '#fff', fontSize: 16, }}>Skip fo now</Text></TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Heading heading='Choose Your Age '
                        subHeading='Select age range for better meditation content.'
                    />
                </View>
                <View style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}>
                    {CHOICES.map((choice) => (
                        <TouchableOpacity
                            onPress={() => handleChoicePress(choice)}
                            key={choice}
                            style={[styles.radioContainer,
                            {
                                width: "48%",
                                marginBottom: 15,

                            }, choices.includes(choice) && styles.activeChoices,
                            ]}
                        >
                            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>
                                {choice}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <GradientButton onPress={() => onTabChange("Religion")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default AgeChoose

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
    activeChoices: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderColor: 'rgba(255,255,255,0.15)'
    }
});