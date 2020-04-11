<template>
  <div id="app" class='small-container'>
    <!-- <h1>Employees</h1> -->
    <nav-file/>
    <!-- <h1>Employees</h1>
    <employee-table v-bind:employees="employees"/>
      <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>
<script>
import EmployeeTable from '@/components/EmployeeTable'
import NavFile from '@/components/NavFile'
export default {
  name: 'App',
  components: {
    EmployeeTable,
    NavFile
  },
  data () {
    return {
      employees: [
        {
          id: 1,
          name: 'Monthon',
          email: 'monthon.int@gmail.com'
        },
        {
          id: 2,
          name: 'Mon',
          email: 'mon@gmail.com'
        },
        {
          id: 3,
          name: 'Monthon',
          email: 'thon@gmail.com'
        }
      ]
    }
  }
}
</script>

<style>
#app{
  /* font-family: 'Aventir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
.small-container{
}
</style>
