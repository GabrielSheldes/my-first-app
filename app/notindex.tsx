import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function HomeScreen(){
    const router = useRouter()
    return(
        <View>
            <Button title="" onPress={() => router.push('/navigation/tabs')}/>
            <Button title="" onPress={() => router.push('/navigation/drawer')}/>
            <Button title="" onPress={() => router.push('/navigation/stack')}/>
        </View>
    );
}