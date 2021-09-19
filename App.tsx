import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import TodoCard from './components/TodoCard';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-black flex h-full`}>
      <View style={tw`m-6`}>
        <View style={tw`mb-6`}>
          <Text style={tw`text-white text-3xl font-black`}>Good day</Text>
          <Text style={tw`text-purple-600 text-xl font-semibold`}>These are your tasks for today</Text>
        </View>
        <ScrollView>
            <TodoCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
