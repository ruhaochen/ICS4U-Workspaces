<template>
    <li class="task" :class="{ completed: task.completed }">
      <div>
        <p>{{ task.title }}</p>
        <p>{{ task.description }}</p>
        <p>Created: {{ formattedDate }}</p>
      </div>
      <button @click="completeTask">✔ Done</button>
    </li>
</template>
  
<script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    task: Object
  });
  
  const emit = defineEmits(['task-completed']);
  
  // Format task creation date
  const formattedDate = computed(() => {
    return new Date(props.task.createdAt).toLocaleString();
  });
  
  // Emit event when task is completed
  const completeTask = () => {
    emit('task-completed', props.task.id);
  };
</script>
  
<style scoped>
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
</style>