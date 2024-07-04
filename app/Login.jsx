import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import tw from 'twrnc'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();

  return (
    <View style={tw`flex-1 `}>
      <StatusBar style='' />
      <View style= {tw`bg-red-800 h-[50%] z-0`}>
        <Image resizeMode='' style = {tw`h-full  `} source = {require('../assets/images/woman.png')} />
        <View style = {tw`mt-7 absolute flex-row justify-center items-center gap-24 px-3`}>
          <TouchableOpacity onPress={()=> router.back()}>
        <Feather style = {tw``} name="arrow-left" size={29} color="white" />
          </TouchableOpacity>
        <Text style = {tw`text-white text-xl font-semibold`}>Welcome</Text>
        </View>
      </View>

      <View style={tw`bg-white -mt-5  rounded-t-3xl bg-[#f4f5f7] h-[150%] z-10`}>
        <View style={tw`px-5 mt-6 `}>
          <Text style={tw`text-2xl font-semibold`}>Welcome back</Text>
          <Text style= {tw`text-gray-500 `}>Sign in to your account.</Text>
          <View style={tw`mt-5 flex gap-3`}>

            <View style = {tw`flex-row  justify-center gap-1 items-center py-3 rounded-md bg-white`}>
                <Feather name="mail" size={24} color="black" />
                <TextInput style={tw` w-[80%] px-2 `} placeholder='Email Address' />
            </View>
            <View style = {tw`flex-row  justify-center gap-1 items-center py-3 rounded-md bg-white`}>
                <Feather name="lock" size={24} color="black" />
                <TextInput style={tw` w-[80%] px-2 `} placeholder='* * * * * * * * * *' />
            </View>
            <View style = {tw`flex justify-end items-end mt-1`}>
                <View>

                </View>
                <View><Text style={tw`text-blue-600`}>Forgot password?</Text></View>
            </View>
          </View>
            <TouchableOpacity 
            onPress={()=>router.push('/Home')} 
            style = {tw`flex-row bg-[#AEDC81] justify-center mt-4 items-center py-3 rounded-md`}>
                <Text style={tw`text-lg text-white`}>Login</Text>
            </TouchableOpacity>
            <View style={tw`mt-2 flex-row items-center justify-center`}>
              <Text style={tw`text-gray-600`}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/Signup')} >
                <Text style={tw`font-semibold`}>  Sign up.</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}
