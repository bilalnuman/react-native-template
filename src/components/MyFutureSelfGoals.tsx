import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import money from "@/assets/money.png"
import appearance from "@/assets/appearance.png"
import selfLove from "@/assets/selfLove.png"
import house from "@/assets/house.png"
import car from "@/assets/car.png"
import gift from "@/assets/gift.png"
import peace from "@/assets/peace.png"
import relationship from "@/assets/relationship.png"
import health from "@/assets/health.png"
import addiction from "@/assets/addiction.png"
import question from "@/assets/question.png"

const GOALS = [
    {
        id: 1,
        label: 'Happiness aspirations',
        icon: <Feather name='smile' color="#fff" size={22} />
    },
    {
        id: 2,
        label: 'Money',
        icon: <Image source={money} style={{ width: 24, height: 24 }} />
    },
    {
        id: 3,
        label: 'Physical appearance',
        icon: <Image source={appearance} style={{ width: 24, height: 24 }} />
    },
    {
        id: 4,
        label: 'Self Love',
        icon: <Image source={selfLove} style={{ width: 24, height: 24 }} />
    },
    {
        id: 5,
        label: 'House',
        icon: <Image source={house} style={{ width: 22, height: 22 }} />
    },
    {
        id: 6,
        label: 'Car',
        icon: <Image source={car} style={{ width: 24, height: 24 }} />
    },
    {
        id: 7,
        label: 'Material Things',
        icon: <Image source={gift} style={{ width: 22, height: 22 }} />
    },
    {
        id: 8,
        label: 'Peace',
        icon: <Image source={peace} style={{ width: 22, height: 22 }} />
    },
    {
        id: 9,
        label: 'Love Relationship',
        icon: <Image source={relationship} style={{ width: 22, height: 22 }} />
    },
    {
        id: 10,
        label: 'Health',
        icon: <Image source={health} style={{ width: 22, height: 22 }} />
    },
    {
        id: 11,
        label: 'Stop Addiction',
        icon: <Image source={addiction} style={{ width: 24, height: 24 }} />
    },
    {
        id: 12,
        label: "SI don't know/need help",
        icon: <Image source={question} style={{ width: 22, height: 22 }} />
    },
]

const MyFutureSelfGoals = () => {
    const [goals, setGoals] = useState<string[]>([])
    const handleGoalPress = (value: string) => {
        setGoals((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };
    return (
        <View style={{ marginTop: 60 }}>
            <View style={{ flexDirection: 'row', alignItems: "flex-start" }}>
                <Heading heading='My Future Self Goals' />
                <EvilIcon name='exclamation' color={"#fff"} size={24} style={{ paddingTop: 6 }} onPress={() => Alert.alert('Hello')} />
            </View>
            <View style={{ gap: 15 }}>
                {GOALS.map((goal) => (
                    <TouchableOpacity onPress={() => handleGoalPress(goal.label)} style={[styles.container, goals.includes(goal.label) && styles.selected]} key={goal.id}>
                        {goal.icon}
                        <Text style={styles.text}>{goal.label}</Text>
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    )
}

export default MyFutureSelfGoals

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 54,
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