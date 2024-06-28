import { usePosts } from "@/hooks/posts";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

function Post() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const { post, isLoading } = usePosts(id as string);

  useEffect(() => {
    navigation.setOptions({
      title: post.title,
    });
  }, [post.title]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{ html: post.content }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Post;
