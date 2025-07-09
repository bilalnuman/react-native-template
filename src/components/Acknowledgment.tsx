import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Heading from '@/shared/Heading'
import CustomDropdown from '@/shared/CustomDropdown';
import CheckBox from '@react-native-community/checkbox';
import GradientButton from '@/shared/GradientButton';
import { HomeScreenPropsTab } from '@/types/HomeScreenTabs';
import BackButton from '@/shared/BackButton';
const OPTIONS = [
    { label: 'React Native', value: 'rn' },
    { label: 'Flutter', value: 'flutter' },
    { label: 'Swift', value: 'swift' },
];
const Acknowledgment = ({ onTabChange }: HomeScreenPropsTab) => {
    const [selected, setSelected] = useState<string | number | null>(null);
    const [isCheck, setIsCheck] = useState<string>("");
    const handleCheck = (value: any) => {
        if (isCheck !== value)
            setIsCheck(value);
        else
            setIsCheck("");
    };
    return (
        <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingVertical: 30 }}>
                    <BackButton onPress={() => onTabChange("MyFutureSelfLove")} />
                </View>
                <Heading
                    heading='Acknowledgment is Curative'
                />
                <View style={styles.container}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 500, }}>Trauma</Text>
                    <View style={{ flexDirection: "row", gap: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                disabled={false}
                                value={isCheck === "yes" ? true : false}
                                onValueChange={() => handleCheck("yes")}
                                tintColors={{ true: '#fff', false: '#fff' }}
                                style={{
                                    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                                }}
                            />
                            <Text style={{ color: '#fff', marginLeft: 5, fontSize: 16 }}>Yes</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                disabled={false}
                                value={isCheck === "no" ? true : false}
                                onValueChange={() => handleCheck("no")}
                                tintColors={{ true: '#fff', false: '#fff' }}
                                style={{
                                    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }]
                                }}
                            />
                            <Text style={{ color: '#fff', marginLeft: 5, fontSize: 16 }}>No</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <CustomDropdown
                        options={OPTIONS}
                        value={selected}
                        onSelect={(opt) => setSelected(opt.value)}
                    />
                </View>
            </View>
            <GradientButton onPress={() => onTabChange("CoachingSchedule")} title='Continue' buttonStyle={{ marginTop: 20 }} />
        </View>
    )
}

export default Acknowledgment

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 54,
        paddingHorizontal: 20,
        alignItems: "center",
        borderRadius: 27,
        flexDirection: "row",
        justifyContent: "space-between",
        borderColor: "#fff",
        marginBottom: 15
    },
})