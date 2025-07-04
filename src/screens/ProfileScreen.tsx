import { useAuthStore } from '@/store/useAuthStore';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const { logout } = useAuthStore()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text onPress={() => {
        logout()
      }}>Logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;