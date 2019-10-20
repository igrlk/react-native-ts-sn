import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Loop from 'resources/images/svg/Loop';

import styles from './selectWithSearchStyles';

export type SelectItem = {
  text: string;
  value: any;
  uuid?: string;
  description?: string;
  name?: string;
};

interface SelectWithSearchProps {
  label: string;
  value: string;
  setActiveItem: (arg: any) => any;
  setValue: (arg: any) => any;
  items: SelectItem[];
  error?: string | null;
}

export default function SelectWithSearch({
  label,
  value,
  setActiveItem,
  setValue,
  items,
  error,
}: SelectWithSearchProps) {
  const filteredItems = value
    ? items.filter(
        (item: SelectItem) => item.text.toLowerCase().indexOf(value.toLowerCase()) !== -1,
      )
    : items;

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsDropdownVisible(true)}>
          <TextInput
            autoCapitalize='none'
            value={value}
            onChangeText={setValue}
            style={styles.input}
            onFocus={() => setIsDropdownVisible(true)}
          />
          {error && <Text style={styles.error}>{error}</Text>}

          <View style={styles.loop}>
            <Loop />
          </View>
        </TouchableOpacity>

        {isDropdownVisible && (
          <View style={styles.dropdown}>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
              {filteredItems.map((item: SelectItem, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setActiveItem(item);
                    setValue(item.text);
                    setIsDropdownVisible(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
}
