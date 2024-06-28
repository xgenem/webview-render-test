import React from "react";
import { Stack } from "expo-router/stack";
import { AppContainer } from "components/AppContainer";

export default function Layout() {
  return (
    <AppContainer>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </AppContainer>
  );
}
