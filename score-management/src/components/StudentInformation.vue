<script setup>
  import { computed } from 'vue';
  const props = defineProps({
    student: Object
  });

  const emit = defineEmits(['delete-score']);
  
  const percentage = computed(() => {
    return ((props.student.grade/47)*100).toFixed(0);
  });

  const level = computed(() => {
    if(percentage >= 95){
        return 'Level 4++';
    }else if(percentage < 95 && percentage >= 87){
        return 'Level 4+';
    }
    else if(percentage < 87 && percentage >= 80){
        return 'Level 4';
    }
    else if(percentage < 80 && percentage >= 70){
        return 'Level 3';
    }
    else if(percentage < 70 && percentage >= 60){
        return 'Level 2';
    }else{
        return 'Level 1';
    }
  });
  
  const deleteStudent = () => {
    emit('delete-score', props.student.id);
  };
</script>
  
<template>
    <tr>
        <td>{{ student.name }}</td>
        <td>{{ student.grade }}</td>
        <td>{{ percentage }}</td>
        <td v-if = "percentage >= 95 ">Level 4++</td>
        <td v-else-if = "percentage < 95 && percentage >= 87">Level 4+</td>
        <td v-else-if = "percentage < 87 && percentage >= 80">Level 4</td>
        <td v-else-if = "percentage < 80 && percentage >= 70">Level 3</td>
        <td v-else-if = "percentage < 70 && percentage >= 60">Level 2</td>
        <td v-else>Level 1</td>
        <td>
            <button @click="deleteStudent">Delete</button>
        </td>
    </tr>
</template>
  
<style scoped>
  .student-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .delete {
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