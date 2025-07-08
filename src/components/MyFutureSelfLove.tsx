import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'

const MyFutureSelfLove = () => {
    const [text, setText] = useState('');
    return (
        <View style={{ marginTop: 30 }}>
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
    )
}

export default MyFutureSelfLove

const styles = StyleSheet.create({
    container: {
        marginTop:20
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