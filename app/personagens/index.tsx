import React from "react"
import { Button, Text, View} from "react-native";

export default function List(){
    const router = useRouter();
    return (
    <View>
        <Text>Pagina de lista</Text>
        <Button
        title="1 - detalhe"
        onPress={() => router.push(`/personagens/$(1)`)}
    />
    </View>
);
}