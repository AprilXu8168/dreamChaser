// App.js
import { React, Component } from 'react';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      tasks:[]
    }
  }

  API_URL = "http://localhost:5295/";

  componentDidMount(){
    this.refreshTasks();
  }

  async refreshTasks(){
    fetch(this.API_URL+"api/todoItems/").then(response => response.json())
    .then(data => {
      this.setState({tasks:data});
    })
  }

  async addClick(){
    var newTask=document.getElementById("newTask");
    if (newTask.value == '') {
      throw new Error('Task not valid! ');
    }
    const data = new FormData();
    data.append("newTasks", newTask);
    const item = {
      isComplete: false,
      name: newTask.value.trim()
    };

    console.log("json received is", JSON.stringify(item))

    fetch (this.API_URL+"api/todoitems/",{
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(res => res.json())
    .then(() => {
      newTask.value='';
      this.refreshTasks();
    })

  }

  render() {
    const{tasks} = this.state;

    return (
      <div className='App'>
        <h2>Todo App</h2>
        <input id="newTask" />
        <button onClick={()=>this.addClick()}>Add to List</button>
        {tasks.map(item=>
          <p>
          <b>{item.name}</b>
          </p>
        )}
      </div>
    )
  }



}

export default App;