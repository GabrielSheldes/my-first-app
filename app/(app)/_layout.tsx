import {Slot, Redirect} from "expo-router"
// import { useAuth} from "@/service/auth/useAuth"
import { ActivityIndicator, View } from "react-native"

export default function AppLayut(){
    // const {user, loading } = useAuth();

    if (false) {
        return(
            <View>
                <ActivityIndicator/>
            </View>
        );
    }
    if(false) {
        return <Redirect href="/(auth)/login"/>
    }
    return 
}