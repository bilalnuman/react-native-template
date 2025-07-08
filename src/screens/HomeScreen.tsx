import AppLayout from '@/layouts/AppLayout';
import GradientButton from '@/shared/GradientButton';
import Heading from '@/shared/Heading';
import RadioButton from '@/shared/RadioButton';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native-gesture-handler';
import { Acknowledgment, MyFutureSelfGoals, MyFutureSelfLove, StateofRelease } from '@/components';


const OPTIONS = [
  { label: 'I am Male', value: 'male' },
  { label: 'I am Female', value: 'female' },
  { label: 'I prefer not to say', value: 'other' },
];
const RELIGIOUS = [
  { label: 'Religious', value: 'religious' },
  { label: 'Not Religious', value: 'not_religious' },
  { label: 'Spiritual', value: 'spiritual' },
];

const CHECKBOX_OPTIONS = [
  { label: 'Friend or Family', value: 'a' },
  { label: 'Social Media', value: 'b' },
  { label: 'Email or Newsletter', value: 'c' },
  { label: 'Flyer or Poster', value: 'd' },
  { label: 'Online Ad / Sponsored Post', value: 'e' },
];

const CHOICES = ['14 - 17', '18 - 24', '25 - 29', '30 - 34', '35 - 39', '40 - 44', '45 - 49', 'Older than 50'];

const HomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState<string>('male');
  const [toggleCheckBox, setToggleCheckBox] = useState<string[]>([]);
  const [choices, setChoice] = useState<string[]>([]);

  const toggleCheckbox = (value: string) => {
    setToggleCheckBox((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };
  const handleChoicePress = (value: string) => {
    setChoice((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };
  return (
    <AppLayout>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
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

          {/* end */}
          <View style={[styles.container, { marginTop: 60 }]}>
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
          {/* end */}


          <View style={[styles.container, { marginTop: 60 }]}>
            <Heading heading='How would you like to be called? '
              subHeading='Pick the Name You Want to Be Called.'
            />
          </View>
          <TextInput placeholder="Enter Your Name" style={[styles.radioContainer, { color: "#fff" }]} placeholderTextColor={"#fff"} />
          {/* end */}

          <View>
            <View style={[styles.container, { marginTop: 60 }]}>
              <Heading heading='Welcome to ReThinkology'
                subHeading='Your faith matters. Let’s align your path with what you value most.'
                subHeadingStyle={{ paddingHorizontal: 30 }}
              />
              <View style={styles.imgContainer}>
                <Image source={require('@/assets/img1.png')} resizeMode="cover" style={styles.image} />
              </View>
            </View>
          </View>
          {/* end */}

          <View>
            <View style={[styles.container, { marginTop: 60 }]}>
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
          {/* end */}


          <View>
            <View style={[styles.container, { marginTop: 60 }]}>
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
          {/* end */}
          <MyFutureSelfGoals />

          <StateofRelease />
          
          <MyFutureSelfLove />

          <Acknowledgment/>

        </View>
      </ScrollView>
      <GradientButton onPress={() => { }} title='Continue' buttonStyle={{ marginVertical: 20 }} />
    </AppLayout>
  );
};

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
  },
  activeChoices: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderColor: 'rgba(255,255,255,0.15)'
  },
  imgContainer: {
    height: 335,
    marginTop: 8,
    borderRadius: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;