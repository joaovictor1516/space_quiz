import { questions } from "../constants/questions";
import { question } from "../model/question";
import { useState } from "react";

export function useQuestionnaire(){
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [answears, setAnswears] = useState<Number[]>([]);
    const [questionsList, setQuestionsList] = useState<question[]>(drawQuestions());

    function drawQuestions():question[]{
        const newQuestions = [...questions];

        return newQuestions.
            sort(() => Math.random() - 0.5).
            splice(0, 10);
    };
    
    return {
        get question(){
            return questionsList[indexQuestion];
        },

        get answear(){
            return questions.
                map((question) => question.answear).
                map((answear, index) => answear === answears[index]).
                filter(Boolean).length;
        },

        get totalQuestions(){
            return questions.length;
        },

        get completed(){
            return indexQuestion === questionsList.length;
        },

        toAnswer(answear: number){
            setAnswears([...answears, answear]);
            setIndexQuestion(indexQuestion + 1);
        },

        reset(){
            setAnswears([]);
            setIndexQuestion(0);
            setQuestionsList(drawQuestions());
        }
    }
}