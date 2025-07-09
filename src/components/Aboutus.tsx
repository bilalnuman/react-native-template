import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo, useState } from 'react'
import Heading from '@/shared/Heading';
import CheckBox from '@react-native-community/checkbox';
import GradientButton from '@/shared/GradientButton';
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import BackButton from '@/shared/BackButton';

const CHECKBOX_OPTIONS = [
    { label: 'Friend or Family', value: 'a' },
    { label: 'Social Media', value: 'b' },
    { label: 'Email or Newsletter', value: 'c' },
    { label: 'Flyer or Poster', value: 'd' },
    { label: 'Online Ad / Sponsored Post', value: 'e' },
];



const Aboutus = ({ onTabChange }: HomeScreenPropsTab) => {
    const [toggleCheckBox, setToggleCheckBox] = useState<string[]>([]);
    const toggleCheckbox = (value: string) => {
        setToggleCheckBox((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        );
    };
    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:"flex-end", paddingVertical: 30 }}>
                    <BackButton isBack={false} />
                    <TouchableOpacity onPress={() => onTabChange("HowWouldYouLike")}><Text style={{ color: '#fff', fontSize: 16, }}>Skip fo now</Text></TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <Heading heading='How did you hear about us?'
                        subHeading='Tell us how you discovered ReThinkology'
                    />
                </View>

                <View style={{ gap: 15 }}>
                    {CHECKBOX_OPTIONS.map((option) => (
                        <View key={option.value} style={[styles.radioContainer, toggleCheckBox.includes(option.value) && styles.selectedOption]}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox.includes(option.value)}
                                onValueChange={() => toggleCheckbox(option.value)}
                                tintColors={{ true: '#fff', false: '#fff' }}

                            />
                            <Text style={{ color: '#fff', marginLeft: 10 }}>{option.label}</Text>
                        </View>
                    ))}

                </View>
            </View>
            <GradientButton onPress={() => onTabChange("HowWouldYouLike")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default memo(Aboutus);


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
        fontWeight: "500"
    },
    selectedOption: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderColor: 'rgba(255,255,255,0.15)'
    }
});