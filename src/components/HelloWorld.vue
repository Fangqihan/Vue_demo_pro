<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" value="submit" v-on:click="handle_click"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '加油！'
    }
  },
  methods: {
    handle_click: function () {
      alert(this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
