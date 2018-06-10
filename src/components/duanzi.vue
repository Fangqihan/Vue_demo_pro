<template>
  <div id="app1">
    <table border="1px solid" width="300px">
      <tr>
        <th>name</th>
        <th>sex</th>
        <th>age</th>
      </tr>
      <tr v-for="stu in student_list">
        <td>{{stu.name}}</td>
        <td>{{stu.gender}}</td>
        <td>{{stu.age}}</td>
      </tr>
    </table>
    <form>
      <label for="id_username">name</label><input id='id_username' type="text" v-model="name"/><br>
      <label for="id_age">age</label><input id="id_age" type="text" v-model="age"/><br/>
      <span>男</span><input type="radio" name="gender" value="male" v-model="gender"/>
      <span>女</span><input type="radio" name="gender" value="female" v-model="gender"/>
      <input type="button" value="add" @click="add_student"/>
      <router-view/>
    </form>
  </div>
</template>

<script>
import axios from 'axios' // 导入axios模块
export default {
  name: 'duanzi',
  data () {
    return {
      student_list: [],
      name: '',
      age: '',
      gender: ''
    }
  },
  // 点开页面自动加载调用
  mounted: function () {
    this.show_list()
  },
  methods: {
    add_student: function () {
      console.log(this.name, this.age, this.gender)
      this.student_list.push({name: this.name, age: this.age, gender: this.gender})
    },
    show_list: function () {
      var url = './static/students.json'
      // 实际上URl是一个虚拟的地址
      var self = this
      axios.get(url)
        .then(function (value) {
          console.log(value.data.student_list)
          self.student_list = value.data.student_list
        })
        .catch(function (reason) {
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    margin-bottom: 200px;
  }
  table{
    margin-left: 400px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
</style>
