import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#eee',
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

const TaskListByPriority = () => {
  const tasks = [
    {title: 'High', data: ['Fix production bug', 'Prepare release notes']},
    {title: 'Medium', data: ['Update documentation', 'Code review']},
    {title: 'Low', data: ['Refactor old code', 'Organize files']},
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={tasks}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title} Priority</Text>
        )}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </View>
  );
};

export default TaskListByPriority;
