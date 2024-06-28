import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function HomeTab() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Home</Text>
    </View>
  );
}

export default HomeTab;
