import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    message: '',
    todos: [{
      text: '吃飯',
      isCompleted: false,
      debug: ''
    },
    {
      text: '吃飯',
      isCompleted: false
    }],
  },
  methods: {
    addList: function(event){
      let newRow = {
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
    }
  }
})
