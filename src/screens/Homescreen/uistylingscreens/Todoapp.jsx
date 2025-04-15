import React, { useState } from 'react';
import styled from 'styled-components/native';
// import Icon from 'react-native-vector-icons/Feather';
import { FlatList, KeyboardAvoidingView, Platform,Text } from 'react-native';
import Config from 'react-native-config';



console.log("Environment:", Config.APP_ENV);
console.log("API URL:", Config.API_URL)
const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    const newTask = { id: Date.now().toString(), text: input, done: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleTask = id => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  return (
    
    <KeyboardAvoidingView
      style={{ flex: 1 }}
    >
      <Container>
        <Title>My Tasks</Title>

        <InputWrapper>
          <Input
            placeholder="Add new task..."
            value={input}
            onChangeText={setInput}
            onSubmitEditing={addTask}
          />
          <AddButton onPress={addTask}>
            {/* <Icon name="plus-circle" size={24} color="#3b82f6" /> */}
          </AddButton>
        </InputWrapper>

        {tasks.length === 0 ? (
          <Empty>No tasks yet. Start by adding one!</Empty>
        ) : (
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TaskCard done={item.done} onPress={() => toggleTask(item.id)}>
                <TaskText done={item.done}>{item.text}</TaskText>
                {/* {item.done && <Icon name="check-circle" size={20} color="#10b981" />} */}
              </TaskCard>
            )}
          />
        )}
      </Container>
    </KeyboardAvoidingView>
  );
};
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f9fafb;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 20px;
`;

const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  elevation: 2;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
`;

const AddButton = styled.TouchableOpacity`
  padding: 6px;
`;

const TaskCard = styled.TouchableOpacity`
  padding: 16px;
  background-color: ${props => (props.done ? '#d1fae5' : '#fff')};
  border-radius: 10px;
  margin-bottom: 12px;
  flex-direction: row;
  align-items: center;
  elevation: 2;
`;

const TaskText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #111827;
  text-decoration: ${props => (props.done ? 'line-through' : 'none')};
`;

const Empty = styled.Text`
  text-align: center;
  color: #9ca3af;
  margin-top: 40px;
  font-size: 16px;
`;


export default TodoApp;
