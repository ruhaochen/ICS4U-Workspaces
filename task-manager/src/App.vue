<template>
    <div class="container">
      <h1>Task Manager</h1>
      <!-- Task Input -->
      <div class="task-input">
        <input v-model="newTaskTitle" placeholder="Enter a new task" />
        <textarea v-model="newTaskDescription" placeholder="Enter task description"></textarea>
        <button @click="addTask">Add Task</button>
      </div>
      <!-- Task List -->
      <ul v-if="tasks.length > 0">
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @task-completed="handleTaskCompleted"
        />
      </ul>
      <!-- No Tasks Message -->
      <p v-else>No tasks left! 🎉</p>
    </div>
</template>

<script setup>
  import { reactive } from 'vue';
  import { ref } from 'vue';
  import TaskItem from './components/TaskItem.vue';
  // Reactive task list
  let tasks = ref([]);
  
  // Reactive inputs
  const newTaskTitle = ref('');
  const newTaskDescription = ref('');
  // Add a new task
  const addTask = () => {
    if (!newTaskTitle.value.trim()) return;
    tasks.value.push({
      id: Date.now(),
      title: newTaskTitle.value,
      description: newTaskDescription.value,
      completed: false,
      createdAt: new Date()
    });
    // Clear input fields
    newTaskTitle.value = '';
    newTaskDescription.value = '';
  };
  // Handle task completion
  const handleTaskCompleted = (taskId) => {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  };
</script>

<style scoped>
  .container {
    max-width: 500px;
    margin: auto;
    text-align: center;
  }
  .task-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  input, textarea {
    padding: 8px;
    width: 100%;
  }
  button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>
  