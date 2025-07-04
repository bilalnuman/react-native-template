import AsyncStorage from '@react-native-async-storage/async-storage';

export const zustandStorage = {
    getItem: async (name: string): Promise<string | null> => {
        const value = await AsyncStorage.getItem(name);
        return value;
    },
    setItem: async (name: string, value: string): Promise<void> => {
        await AsyncStorage.setItem(name, value);
    },
    removeItem: async (name: string): Promise<void> => {
        await AsyncStorage.removeItem(name);
    },
};
