import { usePostsQuery } from "@/api/posts/use-posts";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { usePosts } from "@/hooks/posts";

function PostsTab() {
  const insets = useSafeAreaInsets();
  const { posts, isLoading } = usePosts();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={[{ paddingTop: insets.top }, styles.container]}>
      {posts.map((post) => (
        <View style={styles.item} key={post.id}>
          <Text style={styles.title}>{post?.title}</Text>
          <Link href={`/(posts)/${post?.id}`}>
            <Text style={styles.viewPostText}>View Post</Text>
          </Link>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    alignItems: "center",
    backgroundColor: "lightblue",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: "800",
  },
  viewPostText: {
    color: "blue",
    fontSize: 10,
    textDecorationLine: "underline",
    textDecorationColor: "blue",
  },
});

export default PostsTab;
