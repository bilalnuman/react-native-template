import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'
import GradientButton from '@/shared/GradientButton'
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs'
import BackButton from '@/shared/BackButton'
import { TouchableOpacity } from 'react-native'
import gift from "@/assets/clock.png"
import coffee from "@/assets/coffee.png"
import breakfast from "@/assets/breakfast.png"
import workout from "@/assets/workout.png"
import shower from "@/assets/shower.png"
import drive from "@/assets/drive.png"
import bed from "@/assets/bed.png"
import sleep from "@/assets/sleep.png"
import CheckBox from '@react-native-community/checkbox'

const GOALS = [
    {
        label: 'Wake Up',
        icon: <Image source={gift} style={{ width: 22, height: 22 }} />
    },
    {
        label: 'Coffee Time',
        icon: <Image source={coffee} style={{ width: 22, height: 22 }} />
    },
    {
        label: 'Breakfast',
        icon: <Image source={breakfast} style={{ width: 22, height: 22 }} />
    },
    {
        label: 'Workout',
        icon: <Image source={workout} style={{ width: 22, height: 22 }} />
    },
    {
        label: 'Shower',
        icon: <Image source={shower} style={{ width: 22, height: 22 }} />
    },
    {
        label: 'Drive-to-Work',
        icon: <Image source={drive} style={{ width: 22, height: 22 }} />
    },
    {
        label: 'Going to Bed',
        icon: <Image source={bed} style={{ width: 22, height: 22 }} />
    },
    {
        label: 'First Hour of Sleep',
        icon: <Image source={sleep} style={{ width: 22, height: 22 }} />
    },
]

const CoachingSchedule = ({ onTabChange }: HomeScreenPropsTab) => {
    const [isCheck, setIsCheck] = useState<boolean>(false);
    const [goals, setGoals] = useState<string>("")
    // const handleGoalPress = (value: string) => {
    //     setGoals((prev) =>
    //         prev.includes(value)
    //             ? prev.filter((v) => v !== value)
    //             : [...prev, value]
    //     );
    // };
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("Acknowledgment")} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: "flex-start", justifyContent: "center" }}>
                    <Heading heading='Coaching Schedule  ' />
                    <Pressable style={{ paddingTop: 6 }} onPress={() => Alert.alert('Alert')}>
                        <Image source={require('@/assets/alert.png')} style={{ width: 20, height: 20, marginLeft: -4 }} resizeMode="contain" />
                    </Pressable>
                </View>
                <View style={{ gap: 15 }}>
                    {GOALS.map((goal) => (
                        <TouchableOpacity onPress={() => setGoals(goal.label)} style={[styles.container, goals.includes(goal.label) && styles.selected]} key={goal.label}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: '100%' }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                                    {goal.icon}
                                    <Text style={styles.text}>{goal.label}</Text>
                                </View>
                                <Image source={require('@/assets/arrow.png')} style={{ width: 19, height: 19 }} />
                            </View>
                        </TouchableOpacity>
                    ))}

                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 15 }}>
                    <CheckBox
                        disabled={false}
                        value={isCheck}
                        onValueChange={() => setIsCheck(!isCheck)}
                        tintColors={{ true: '#fff', false: '#fff' }}
                    />
                    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>Same this for Weekend</Text>
                </View>
                <GradientButton onPress={() => onTabChange("Acknowledgment")} title='Continue' buttonStyle={{ marginTop: 25 }} />
            </View>
        </View>
    )
}

export default CoachingSchedule

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 56,
        paddingHorizontal: 20,
        alignItems: "center",
        borderRadius: 27,
        flexDirection: "row",
        borderColor: "#fff",
        gap: 10
    },
    text: {
        fontSize: 15,
        fontWeight: 500,
        color: "#fff"
    },
    selected: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderColor: 'rgba(255,255,255,0.15)'
    },
})