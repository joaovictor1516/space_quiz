import { View, Text, Pressable, StyleSheet } from "react-native";

export interface ResultProps{
    totalQuestions: number;
    reset: () => void;
    total: number;
}

export function Result(props: ResultProps){
    return (
        <View style={ styles.container }>
            <Text style={ styles.text }>Você acertou: </Text>
            
            <Text style={ styles.importantText }>
                { props.total / props.totalQuestions * 100 }%
            </Text>
            
            <Pressable style={ styles.button } onPress={ props.reset }>
                <Text style={ styles.textButton }>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#47556977",
        paddingVertical: 5,
        borderRadius: 20,
        width: 150,
        height: 90
    },
    importantText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 900,
    },
    text: {
        color: "#94A3B8",
        fontSize: 14,
        fontWeight: 600
    },
    textButton: {
        color: "#fff"
    },
    button: {
        backgroundColor: "#2e9d48",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8
    }
})