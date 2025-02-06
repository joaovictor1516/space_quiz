import { Pressable, StyleSheet, Text } from "react-native";

export interface OptionProps{
    index: number;
    text: string;
    onPress: () => void;
}

export function Option(props: OptionProps){
    return (
        <Pressable style={ style.button }>
            <Text style={ style.text }>{ props.text }</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#2E9D48",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    text: {
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold"
    }
})