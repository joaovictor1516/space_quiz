import { QuestionsComponent } from "@/components/questionnaire/QuestionsComponent";
import { useQuestionnaire } from "@/data/hooks/useQuestionnaire";
import { Result } from "@/components/questionnaire/Result";
import { Logo } from "@/components/templates/Logo";
import { Page } from "@/components/templates/Page";
import { View } from "react-native";

export default function Index() {
  const { question, toAnswer, completed, reset, answear, totalQuestions} = useQuestionnaire();

  return (
    <Page>
      <View style={{ gap: 25 }}>

        <Logo/>
        
        { completed ?
          (
            <Result reset={ reset } total={ answear } totalQuestions={ totalQuestions }/> 
          ) : 
          (
            <QuestionsComponent question={ question }
                                questionnaireFunctionalit={ toAnswer }/>
          )
        }

      </View>
    </Page>
  );
}
