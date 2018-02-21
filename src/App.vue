<template>
    <div id="app">
      <h1>代辦清單</h1>
      <div class="item">
        <input type="text" v-model="message" v-on:keydown.enter="addList" placeholder="有什麼事呀？">
      </div>
      <a class="choose-finish" href="#" @click="changeFilter('finish')">完成</a>
      <a class="choose-unfinish"href="#" @click="changeFilter('remaining')">未完成</a>
      <a class="choose-all" href="#" @click="changeFilter('all')">全部</a>
      <div class="nothing" v-if="list.length == 0">沒有了～</div>
      <ul>
        <li v-for="todo in list">
            <input :id="todo.id" type="checkbox" @click="changeState(todo)" :checked="todo.isCompleted">            
            <label v-bind:class="{finish: todo.isCompleted}" :for="todo.id">{{ todo.text }}</label>
          <a href="#" class="deleted" v-on:click="deleteRow(todo)"> 刪除</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: '',
    todos: [{
      id: 0,
      text: '吃飯',
      isCompleted: true,
      isFinish: false
    },
    {
      id: 1,
      text: '睡覺',
      isCompleted: false
    }],
    filterChoosed: 'all'
    }
  },
  computed:{
    list: function(){
      return this.filterList(this.filterChoosed);
    }
  },
  
  methods: {
    addList: function(event){
      let newRow = {
                    id: this.todos.length,
                    text: event.target.value,
                    isCompleted: false
                    };
      this.message="";
      return this.todos.push(newRow);
    },
    changeState: function(todo){
      todo.isCompleted = !todo.isCompleted;
    },
    deleteRow: function(todo){
      let index = this.todos.indexOf(todo);
      this.todos = [
        ...this.todos.slice(0,index),
        ...this.todos.slice(index+1)
      ];
    },
    filterList: function(fn){
      switch (fn) {
        case 'finish':
          return this.todos.filter((todo)=>{
            return todo.isCompleted
          });
          break;
        case 'remaining':
          return this.todos.filter((todo)=>{

            return !todo.isCompleted
          });
        
        case 'all':
          return this.todos;
        default:
          break;
      }

    },
    changeFilter: function(mode){
      return this.filterChoosed = mode;
    }
  }
}
</script>

<style lang="scss">
@mixin border-radius($angle){
	border-radius:$angle;
	-webkit-border-radius:$angle;
	-moz-border-radius:$angle;
}
@mixin button-maker($color){
  border: 1px solid $color;
  color: $color;
  &:hover{
    background-color: $color;
    color: white;
  }
}
  $color: #42b983;


  html {
    box-sizing: border-box;
    background:url('https://abc.2008php.com/2011_Website_appreciate/2011-03-29/20110329232154.jpg') center no-repeat;
    background-size:cover;
    min-height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Futura,"Trebuchet MS",Arial,sans-serif
  }
  *, *:before, *:after {box-sizing: inherit; }


#app {
  padding: 15px;
  @include border-radius(10px);
  background-color: white;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-shadow: 5px 5px 10px 2px #000;
  h1{
    color: $color;
  }

  input[type='text']{
    @include border-radius(5px);
    border: 0;
    height: 50px;
    font-size: 24px;
    box-shadow: inset 1px 1px 5px #e3e3e3;
    padding: 5px;
    margin-bottom:30px;
  }
  .item{
    flex: 1;
  }
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  li {
    flex:1;
    margin-top:10px;
    display: flex;
  }
  label {
    flex:1;
    cursor: pointer;
  }
  .nothing{
    margin-top: 10px;
    font-size:24px;
    color: #e3e3e3;
  }
  a {
    text-decoration: none;
    border: 1px solid $color;
    color: $color;
    padding: 3px;
    font : {
      size: 14px;
    }
    @include border-radius(5px);
    &:hover{
      background-color: $color;
      color: white;
    }
    &.choose-finish{
      @include button-maker(rgb(97, 172, 97));
    }
    &.choose-unfinish{
      @include button-maker(red);
    }
    &.deleted{
      @include button-maker(red);
    }
    
  }
  input[type='checkbox']{
    display:none;
  }
  input + label:before {
      content: '⬜️';
      margin-right: 10px;
      
  }
  input:checked + label:before{
    content: '😙';
    text-decoration: none!important;
  }
}


h1, h2 {
  font-weight: normal;
}



li {
  display: inline-block;
  margin: 0 10px;
}

   .finish{
    color:#e3e3e3;
  }
</style>
