import { StyleSheet, View } from "react-native";
import { question } from "@/data/model/question";
import { Statment } from "./Statment";

export interface QuestionsProps{
    question: question;
}

export function QuestionsComponent(props: QuestionsProps){
    return (
        <View style={ styles.container }>
            <Statment statement={props.question.statement}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    }
})