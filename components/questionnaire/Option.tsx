import { Pressable, StyleSheet, Text } from "react-native";

export interface OptionProps{
    index: number;
    text: string;
    onPress: () => void;
}

export function Option(props: OptionProps){
    return (
        <Pressable style={ style.button } onPress={ props.onPress }>
            <Text style={ style.text }>{ props.text }</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        backgroundColor: "#2e9d48",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 40
    },
    text: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
})