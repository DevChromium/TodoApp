import React from "react";
import { View , Text} from "react-native";
import tw from "tailwind-react-native-classnames";

const TodoCard = () => {
    return (
        <View style={tw`bg-white rounded-md`}>
            <View style={tw`m-4`}>
                <Text style={tw`text-black text-xl`}>Task name</Text>
                <Text style={tw`text-black`}>Deadline</Text>
            </View>
        </View>
    )
}

export default TodoCard;