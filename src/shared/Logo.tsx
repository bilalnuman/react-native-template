import { Image, StyleSheet } from 'react-native'
import React from 'react'

const Logo = () => {
    return (
        <Image source={require('@/assets/logo.png')} style={{ width: 60, height: 60}} resizeMode={"contain"} />
    )
}

export default Logo
