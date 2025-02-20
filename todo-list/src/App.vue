<script setup>
  import TodoItem from './components/TodoItem.vue';
  import { reactive, ref } from 'vue'

  const tasks = reactive([]);

  const newTodoTitle = ref('');
  const newTodoDescription = ref('');

  const addTask = () =>{
    const newTask = ({
      id: Date.now(),
      title: newTodoTitle.value,
      description: newTodoDescription.value,
      completed: false,
      createdAt: new Date()
    })

    tasks.push(newTask);

    newTodoTitle.value = '';
    newTodoDescription.value = ''; 
  }

  const handleTaskCompleted = (taskId) => {
    tasks = tasks.filter(task => task.id !== taskId);
  }
</script>

<template>
  <div class = "container">
    <h1>TODO List</h1>
    <div>
      <input v-model="todoTitle" placeholder="Title">
      <input v-model="todoDescription" placeholder="Details">
      <button @click="addTask">Add Task</button>
    </div>
    <ul v-if="tasks.length > 0">
      <
    </ul>
  </div>
</template>