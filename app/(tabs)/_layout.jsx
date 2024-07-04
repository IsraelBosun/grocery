import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '../../components/TabBar.jsx'

export default function _layout() {
  return (
    <Tabs
        options={{headerShown: false}}
        // tabBar={props => <TabBar {...props} />}
    >
        <Tabs.Screen
            name='Home'
            options={{
                headerShown: false,
                title: 'Home'
            }}
        />
        <Tabs.Screen
            name="Favourite"
            options={{
                headerShown: false,
                title: "Favourite"
            }}
        />
        <Tabs.Screen
            name="Cart"
            options={{
                title: "Cart"
            }}
        />
        <Tabs.Screen
            name="User"
            options={{
                title: "User"
            }}
        />
    </Tabs>
  )
}