import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function Home() {
  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`mx-3`}>
      <View style={tw`flex-row items-center pl-2 bg-gray-200 rounded py-2 `}>
      <AntDesign name="search1" size={22} color="black" style={tw``} />
      <TextInput placeholder='Search Keywords' style={tw`pl-4 mr-9`} />
      </View>

      <View style={tw`w-[100%]`}>
        <Image style={tw`w-[100%] h-[68%] mt-2 rounded-md`} resizeMode='auto' source={require('../../assets/images/hero.png')} />
        <View style={tw`absolute items-center top-35 left-4`}>
          <Text style={tw`font-bold text-xl`}>20% off on your {'\n'}first purchase</Text>
        </View>
      </View>
      </View>
    </View>
  )
}