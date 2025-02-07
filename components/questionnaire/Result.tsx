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
                { Math.round(props.total / props.totalQuestions) * 100 }%
            </Text>
            
            <Pressable style={ styles.button } onPress={ props.reset }>
                <Text style={ styles.text }>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 5
    },
    importantText: {
        color: "#fff"
    },
    text: {
        color: "#fff"
    },
    button: {

    }
})