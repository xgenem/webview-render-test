import Stack from "expo-router/stack";

function PostsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          title: "",
        }}
      />
    </Stack>
  );
}

export default PostsLayout;
