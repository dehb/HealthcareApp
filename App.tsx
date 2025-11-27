import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavProvider from "src/navigation";
import { RootSiblingParent } from "react-native-root-siblings";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <StatusBar style="auto" />
        <NavProvider />
      </RootSiblingParent>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
