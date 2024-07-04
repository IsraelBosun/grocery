import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';


export default function Favourite() {
  return (
    <View style ={tw`flex-1`}>
      <View style ={tw`bg-white h-[47%] px-3`}>
        <TouchableOpacity>
          <Feather style = {tw``} name="arrow-left" size={29} color="black" />
        </TouchableOpacity>
        <Image style={tw`mt-`} source={require('../../assets/images/lime.png')} />
      </View>

      <View style={tw`bg-gray-100 -mt-2 rounded-t-2xl h-[50%] px-3`}>
        <View style={tw`flex-row items-center justify-between mt-3`}>
          <Text style={tw`text-green-800 font-bold text-lg`}>$2.22</Text>
          <TouchableOpacity>
          <Feather name="heart" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={tw`text-xl font-bold`}>Organic Lemons</Text>
        <Text style={tw`text-sm mt-1`}>150lbs</Text>
        <Text style={tw`text-sm mt-1`}>4.5 (89 reviews)</Text>
        <Text style={tw`text-neutral-700`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo temporibus molestiae iste nostrum illum corporis tenetur qui alias porro adipisci eveniet iure dolor quisquam, excepturi officiis? Quam libero ratione dolores iure enim saepe aliquid blanditiis similique cum, fugiat porro amet, inventore placeat quaerat tenetur! Neque laborum consequatur quae provident nulla.</Text>
        <View style={tw`mt-2 gap-3`}>
          <View style={tw`bg-white px-3 py-2 rounded-md flex-row items-center justify-between`}>
            <Text style={tw`text-neutral-700`}>Quantity</Text>
            <View style={tw`flex-row justify-center items-center gap-3`}>
              <TouchableOpacity>
                <Feather name="minus" size={24} color="green" />
              </TouchableOpacity>
            <Text style={tw`font-bold text-lg`}>3</Text>
            <TouchableOpacity>
            <Feather name="plus" size={24} color="green" />
            </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={tw`bg-green-500 px-3 py-3 rounded-md flex-row items-center justify-between`}>
            <Text style={tw`text-white`}>Add to cart</Text>
            <Feather name="shopping-bag" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}




{/* <Feather style = {tw``} name="arrow-left" size={29} color="white" /> */}
