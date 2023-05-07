import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  checked: boolean;
  toggleCheckbox: () => void;
};

const Checkbox = ({ checked, toggleCheckbox }: Props) => {
  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <Icon
        name={checked ? "check-box" : "check-box-outline-blank"}
        size={24}
        color={checked ? "#15D683" : "#C4C2DC"}
      />
    </TouchableOpacity>
  );
};

export default Checkbox;
