import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { dayMonthYearFormatter } from "../../utils/dayMonthYearFormatter";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import Chip from "../../components/Chip";
import Task from "../../components/Task";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Task = {
  checked: boolean;
  taskName: string;
};

const Home = () => {
  const [currentDate, setCurrentDate] = useState(
    dayMonthYearFormatter.format(new Date())
  );
  const [selectedButton, setSelectedButton] = useState(1);
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(tasks);

  useEffect(() => {
    loadTasks();

    const interval = setInterval(() => {
      setCurrentDate(dayMonthYearFormatter.format(new Date()));
    }, 60000); // atualiza data a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateTasks = async () => {
      if (selectedButton === 1) {
        setFilteredTasks(tasks);
      } else if (selectedButton === 2) {
        setFilteredTasks(tasks.filter((task) => !task.checked));
      } else if (selectedButton === 3) {
        setFilteredTasks(tasks.filter((task) => task.checked));
      }
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    };
    updateTasks();
  }, [selectedButton, tasks]);

  async function loadTasks() {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks !== null) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      Alert.alert("Error loading tasks:", error);
    }
  }

  function handleTaskAdd(taskName: string) {
    const taskExists = tasks.find((task) => task.taskName === taskName);

    if (taskExists) {
      return Alert.alert(
        "Tarefa já cadastrada",
        "Já existe uma tarefa com esse nome"
      );
    }

    setTasks((prevState) => [
      ...prevState,
      { taskName: taskName, checked: false },
    ]);

    setTaskName("");
  }

  function handleTaskRemove(name: string) {
    setTasks((prevState) => prevState.filter((task) => task.taskName != name));
  }

  function handleCheck(index: number) {
    const newState = [...tasks];
    newState[index].checked = !newState[index].checked;
    setTasks(newState);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />

      <Text style={styles.tasksLabel}>
        Você tem <Text style={styles.tasksCount}>{tasks.length} tarefas</Text>{" "}
        hoje!
      </Text>
      <Text style={styles.dateText}>{capitalizeFirstLetter(currentDate)}</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Adicione uma tarefa"
          style={styles.input}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleTaskAdd(taskName)}
        >
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerChips}>
        <View style={styles.chips}>
          <Chip
            selected={selectedButton === 1}
            label="Todas"
            onPress={() => setSelectedButton(1)}
            style={{ marginRight: 8 }}
          />
          <Chip
            selected={selectedButton === 2}
            label="Pendentes"
            onPress={() => setSelectedButton(2)}
            style={{ marginRight: 8 }}
          />
          <Chip
            selected={selectedButton === 3}
            label="Concluídas"
            onPress={() => setSelectedButton(3)}
          />
        </View>
      </View>

      <FlatList
        data={filteredTasks}
        renderItem={({ item, index }) => (
          <Task
            checked={item.checked}
            onRemove={() => handleTaskRemove(item.taskName)}
            onCheck={() => handleCheck(index)}
            taskLabel={item.taskName}
          />
        )}
        style={{ width: "100%" }}
        keyExtractor={(item) => item.taskName}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>Nenhuma tarefa foi encontrada.</Text>
        )}
      />
    </View>
  );
};

export default Home;
