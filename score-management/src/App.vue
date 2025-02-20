<script setup>
import { ref } from 'vue';
import StudentInformation from './components/StudentInformation.vue';
// Reactive task list
let students = ref([]);
const studentName = ref('');
const studentScore = ref('');
const nameOfStudent = ref('');
let specialStudents = ref([]);
let filter = ref(false);

const addStudent = () => {
  students.value.push({
    id: Date.now(),
    name: studentName.value,
    grade: studentScore.value,
  });
  studentName.value = '';
  studentScore.value = '';
};

const findStudent = (name) => {
  filter.value = true;
  console.log(filter.value)
  specialStudents = ref(students.value.filter(student => student.name == name));
  specialStudents.value.forEach(student => console.log(student))
  console.log(specialStudents.value)
  if(specialStudents.value.length == 0){
    filter = false;
  }
}

const deleteTestScore = (studentId) => {
  filter.value = false;
  students.value = students.value.filter(student => student.id !== studentId);
};

const sortArray = () => {
  students.value.sort((a,b) => b.grade - a.grade);
}

const alphabeticalOrder = () => {
  students.value.sort((a,b) => (a.name.localeCompare(b.name)));
}
</script>

<template>
  <div class="container">
    <h1>Scores</h1>
    <div class="student-input">
      <input v-model="studentName" placeholder="Name" />
      <input v-model="studentScore" placeholder="Score (/47)">
      <button @click="addStudent">Add Student</button>
    </div>
    <table v-if="students.length > 0">
      <thead>
        <tr>
          <th @click="alphabeticalOrder">Name</th>
          <th>Score</th>
          <th @click="sortArray">Percent</th>
          <th>Level</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <StudentInformation
          v-if="filter === false"
          v-for="student in students"
          :key="student.id"
          :student="student"
          @delete-score="deleteTestScore"
        />
        <StudentInformation
          v-if="filter === true"
          v-for="student in specialStudents"
          :key="student.id"
          :student="student"
          @delete-score="deleteTestScore"
        />
      </tbody>
    </table>
    <p v-else>No scores yet!</p>
    <p>Search for student:</p>
    <input v-model="nameOfStudent" placeholder="Name" />
    <button @click="findStudent(nameOfStudent)">Search</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
.student-input {
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
