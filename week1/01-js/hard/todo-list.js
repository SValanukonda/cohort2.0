/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todolist=[];
  }
  add(todo){
    this.todolist.push(todo);
  }
  remove(index){
    if(index < this.todolist.length) {
      this.todolist.splice(index,1);
    }
  }
  update(index,newtodo){
    if(index < this.todolist.length) {
      this.todolist[index]=newtodo;
    }

  }
  getAll(){
    return(this.todolist);
  }
  get(indexoftodo){
    if(indexoftodo < this.todolist.length){
      return(this.todolist[indexoftodo]);
    }
    else{
      return null;
    }
  }
  clear(){
    this.todolist.splice(0,this.todolist.length);
  }
}

module.exports = Todo;
