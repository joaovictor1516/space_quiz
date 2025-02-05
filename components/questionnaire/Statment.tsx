import { StyleSheet, Text, View } from "react-native";

export interface StatmentProps{
    statement: string;
}

export function Statment(props: StatmentProps){
    return (
        <View style={ styles.container }>
            <Text style={ styles.statement }>{props.statement}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    statement: {
        color: "#fff"
    }
});