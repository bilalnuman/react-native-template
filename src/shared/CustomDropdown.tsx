import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
    View,
    Text,
    FlatList,
    TextInput,
    Pressable,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from 'react-native';

type Option = {
    label: string;
    value: string | number;
};

type Props = {
    options: Option[];
    placeholder?: string;
    value: string | number | null;
    onSelect: (val: Option) => void;
    searchable?: boolean;

    // Styles
    containerStyle?: ViewStyle;
    dropdownStyle?: ViewStyle;
    itemStyle?: ViewStyle;
    inputStyle?: TextStyle;
    labelStyle?: TextStyle;
    selectedTextStyle?: TextStyle;
};

const CustomDropdown: React.FC<Props> = ({
    options,
    value,
    onSelect,
    placeholder = 'Select...',
    searchable = true,

    containerStyle,
    dropdownStyle,
    itemStyle,
    inputStyle,
    labelStyle,
    selectedTextStyle,
}) => {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState('');
    const selectedOption = options.find((opt) => opt.value === value);

    const toggleDropdown = () => setVisible((prev) => !prev);

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <View style={[styles.container, containerStyle]}>
            <Pressable
                style={[styles.selected, dropdownStyle]}
                onPress={toggleDropdown}
            >
                <Text style={[styles.selectedText, selectedTextStyle]}>
                    {selectedOption?.label || placeholder}
                </Text>
                <Feather
                    name={visible ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color="#fff"
                />
            </Pressable>

            {visible && (
                <View style={styles.dropdown}>
                    {searchable && (
                        <TextInput
                            style={[styles.input, inputStyle]}
                            placeholder="Search..."
                            value={search}
                            onChangeText={setSearch}
                        />
                    )}
                    <FlatList
                        data={filteredOptions}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <Pressable
                                style={[styles.item, itemStyle]}
                                onPress={() => {
                                    onSelect(item);
                                    setVisible(false);
                                    setSearch('');
                                }}
                            >
                                <Text style={[styles.label, labelStyle]}>{item.label}</Text>
                            </Pressable>
                        )}
                        keyboardShouldPersistTaps="handled"
                    />
                </View>
            )}
        </View>
    );
};

export default CustomDropdown;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        zIndex: 1000,
    },
    selected: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderRadius: 27,
        borderColor: '#fff',
    },
    selectedText: {
        fontSize: 16,
        color: '#fff',
        fontWeight:500
    },
    dropdown: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        backgroundColor: '#fff',
        maxHeight: 200,
    },
    input: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    item: {
        padding: 12,
    },
    label: {
        fontSize: 16,
        color: '#333',
    },
});
