import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function ProfileTab() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }}>
      <Text>Profile</Text>
    </View>
  );
}

export default ProfileTab;
