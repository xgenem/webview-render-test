import { usePosts } from "@/hooks/posts";
import { getHTMLContent } from "@/lib/htmlWrapper";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

function Post() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const { post, isLoading } = usePosts(id as string);

  const htmlContent = useMemo(
    () => getHTMLContent(post.content),
    [post.content]
  );

  useEffect(() => {
    navigation.setOptions({
      title: post.title,
    });
  }, [post.title]);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        style={{ flex: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Post;
