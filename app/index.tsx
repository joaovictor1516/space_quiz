import { QuestionsComponent } from "@/components/questionnaire/QuestionsComponent";
import { questions } from "@/data/constants/questions";
import { Logo } from "@/components/templates/Logo";
import { Page } from "@/components/templates/Page";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <Page>
      <View style={{ gap: 25 }}>

        <Logo/>
        
        <QuestionsComponent question={questions[0]}/>
      
      </View>
    </Page>
  );
}
