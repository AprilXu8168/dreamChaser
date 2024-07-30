// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
// import CreateTask from './components/CreateTask';
// import EditTask from './components/EditTask';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TaskList} />
          {/* <Route path="/create" component={CreateTask} />
          <Route path="/edit/:id" component={EditTask} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;