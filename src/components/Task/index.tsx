import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./style";
import Checkbox from "../CheckBox.tsx";

type Props = {
  taskLabel: string;
  onRemove: () => void;
  onCheck: () => void;
  checked: boolean;
};

const Task = ({ taskLabel, checked, onRemove, onCheck }: Props) => {
  return (
    <View
      style={[
        styles.container,
        checked ? styles.containerChecked : styles.containerUnchecked,
      ]}
    >
      <View style={styles.checkContainer}>
        <Checkbox checked={checked} toggleCheckbox={onCheck} />
        <Text
          style={[
            checked ? styles.taskLabelChecked : styles.taskLabelUnchecked,
            styles.taskLabel,
          ]}
        >
          {taskLabel}
        </Text>
      </View>

      <TouchableOpacity onPress={onRemove}>
        <Icon name="delete" size={24} color={checked ? "#97D7BC" : "#C4C2DC"} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
