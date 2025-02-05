import { ImageBackground, StyleSheet, View } from "react-native";

const backgroundImage = require("@/assets/images/background.jpg");

export interface PageProps {
     children: React.ReactNode;
}

export function Page(props: PageProps){
     return (
          <View>
               <ImageBackground 
                    source={ backgroundImage }
                    resizeMode="cover"
                    style={ styles.image }
               >

                    {props.children}
               
               </ImageBackground>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {},
     image: {
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
     }
});