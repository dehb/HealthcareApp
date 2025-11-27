import {
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
} from "react-native";
import React, { JSX, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IComponent } from "src/types";
import { flex } from "@styles/styleDefinition";
import { padding } from "@styles/spacing";


function Explore({ navigation }: IComponent): JSX.Element {

  return (
    <SafeAreaView
      style={[
        flex(1),
        padding(0, 0, -40, 0),
      ]}
    >
   
    </SafeAreaView>
  );
}
export default Explore;
