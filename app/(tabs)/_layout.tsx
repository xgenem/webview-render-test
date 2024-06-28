import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="(posts)"
        options={{
          title: "Posts",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="semantic-web"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-man" color={color} size={28} />
          ),
        }}
      />
    </Tabs>
  );
}

export default TabLayout;
