import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';


export default function Welcome() {
  const router = useRouter()
  return (
    <View style={tw`flex-1 `}>
      <StatusBar style='' />
      <View style= {tw`bg-red-800 h-[60%] z-0`}>
        <Image resizeMode='' style = {tw`h-full  `} source = {require('../assets/images/female.png')} />
        <View style = {tw`mt-7 absolute flex-row justify-center items-center gap-24 px-3`}>
          <TouchableOpacity>
        <Feather style = {tw``} name="arrow-left" size={29} color="white" />
          </TouchableOpacity>
        <Text style = {tw`text-white text-xl font-semibold`}>Welcome</Text>
        </View>
      </View>
      <View style={tw`bg-white -mt-5  rounded-t-3xl bg-[#f4f5f7] h-[150%] z-10`}>
        <View style={tw`px-5 mt-6 `}>
          <Text style={tw`text-2xl font-semibold`}>Welcome</Text>
          <Text style= {tw`text-gray-500 `}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit minus perferendis quo suscipit.</Text>
          <View style={tw`mt-5 flex gap-5 `}>
            <TouchableOpacity onPress={()=> router.push('/(tabs)/Home')} style = {tw`flex-row  justify-center gap-7 items-center py-3 rounded-md bg-white`}>
                <Image style ={tw`w-7 h-7`} source={require('../assets/images/google-icon.png')} />
                <Text style={tw`text-lg text-[#868889]`}>Continue with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>router.push('Login')} 
            style = {tw`flex-row bg-[#AEDC81] justify-center gap-8 items-center py-3 rounded-md`}>
                <Image style ={tw`w-7 h-7`} source={require('../assets/images/person.png')} />
                <Text style={tw`text-lg text-white`}>Create an account</Text>
            </TouchableOpacity>
            <View style={tw`flex-row items-center justify-center`}>
              <Text style={tw`text-gray-600`}>Already have an account?</Text>
              <TouchableOpacity >
                <Text style={tw`font-semibold`}>  Login</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

{/* <Feather name="arrow-left" size={24} color="black" /> */}
