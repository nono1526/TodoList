import Vue from 'vue'


new Vue({
  el: '#app',
  data: {
    message: '',
    todos: [{
      text: '吃飯',
      isCompleted: true,
      isFinish: false
    },
    {
      text: '吃飯',
      isCompleted: false
    }],
    filterChoosed: 'all'
  },
  computed:{
    list: function(){
      return this.filterList(this.filterChoosed);
    }
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
})
