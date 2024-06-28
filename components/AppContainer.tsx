import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const AppContainer = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {children}
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  </QueryClientProvider>
);
