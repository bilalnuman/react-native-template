import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'
import GradientButton from '@/shared/GradientButton';
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs';
import BackButton from '@/shared/BackButton';

const MyFutureSelfLove = ({ onTabChange }: HomeScreenPropsTab) => {
    const [text, setText] = useState('');
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("StateofRelease")} />
                    <TouchableOpacity onPress={() => onTabChange("Acknowledgment")}><Text style={{ color: '#fff', fontSize: 16, }}>Skip fo now</Text></TouchableOpacity>
                </View>
                <Heading
                    heading='My Future Self Love'
                    subHeading='Think about times you have been happy with yourself or proud of yourself and/or present'
                    subHeadingStyle={{ paddingHorizontal: 30 }}
                />
                <View style={styles.container}>
                    <TextInput
                        style={styles.textArea}
                        multiline
                        numberOfLines={5}
                        placeholder="Write here .............."
                        placeholderTextColor="#fff"
                        value={text}
                        onChangeText={setText}
                    />
                </View>
            </View>
            <GradientButton onPress={() => onTabChange("Acknowledgment")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default MyFutureSelfLove

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    textArea: {
        height: 123,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        textAlignVertical: 'top',
        color: '#fff'
    },
})