import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export interface StatmentProps{
    statement: string;
}

export function Statment(props: StatmentProps){
    return (
        <View style={ styles.container }>
            <LinearGradient
                colors={["#00d4ff", "#1a7ea7", "#020024"]}
                style={styles.background}
            />
            <Text style={ styles.statement }>{props.statement}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#852E9C",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10
    },
    statement: {
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
        opacity: 0.8
    },
    background: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 10
    }
});