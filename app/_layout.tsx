import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import {useEffect} from 'react';

SplashScreen.preventAutoHideAsync(); //espera as fontes serem carregadas antes de mostrar a aplicação

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "SOLARSPACEDEMO-Regular": require("@/assets/fonts/SOLARSPACEDEMO-Regular.otf"),
    "SPACEMISSION": require("@/assets/fonts/SPACEMISSION.otf")
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
