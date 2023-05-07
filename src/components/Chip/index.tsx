import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { styles } from "./style";

type Props = {
  selected: boolean;
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

const Chip = ({ label, selected, onPress, style }: Props) => {
  const backgroundColor = selected ? "#4D1BFD" : "transparent";
  const color = selected ? "#FFFFFF" : "#4D1BFD";

  return (
    <TouchableOpacity
      style={[style, styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Chip;
