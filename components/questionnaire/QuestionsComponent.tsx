import { StyleSheet, View } from "react-native";
import { question } from "@/data/model/question";
import { Statment } from "./Statment";
import { Option } from "./Option";

export interface QuestionsProps{
    question: question;
    questionnaireFunctionalit: () => void;
}

export function QuestionsComponent(props: QuestionsProps){
    return (
        <View style={ styles.container }>
            <Statment statement={props.question.statement}/>

            <View style={ styles.options }>
                {props.question.options.map((option, index) => 
                    <Option key={ index } 
                            index={ index } 
                            text={ option } 
                            onPress={ props.questionnaireFunctionalit }/>
                )}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 5
    },
    options: {
        gap: 10
    }
})