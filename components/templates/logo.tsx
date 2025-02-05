import { StyleSheet, Text, View } from "react-native";

export function Logo(){
    return (
        <View>
            <Text style={styles.title}>SPACE QUIZ</Text>
            <Text style={styles.subTitle} >Perguntas de outro mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: "SOLARSPACEDEMO-Regular",
        fontSize: 35,
        textAlign: "center",
        color: "#fff"
    },
    subTitle: {
        fontFamily: "SPACEMISSION",
        fontSize: 20,
        textAlign: "center",
        color: "#fff"
    }
});