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

    },
    text: {
        
    }
})