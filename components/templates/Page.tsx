import { ImageBackground, StyleSheet, View } from "react-native";

const backgroundImage = require("@/assets/images/background.jpg");

export interface PageProps {
     children: React.ReactNode;
}

export function Page(props: PageProps){
     return (
          <View style={ styles.container }>
               <ImageBackground 
                    source={ backgroundImage }
                    resizeMode="cover"
                    style={ styles.image }
                    imageStyle={{ opacity: 0.5 }}
               >

                    {props.children}
               
               </ImageBackground>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000"
     },
     image: {
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center"
     }
});