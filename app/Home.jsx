import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <View>
      <View>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput />
      </View>
    </View>
  )
}