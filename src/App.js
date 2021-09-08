import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import { DataProvider } from './Context/DataContext';
import './Components/CSS/main.css'
import SnowboardList from './Components/Snowboard/SnowboardList';
import Snowboard from './Components/Snowboard/Snowboard';
import AddSnowboard from './Components/Snowboard/AddSnowboard';
import EditSnowboard from './Components/Snowboard/EditSnowboard';
import Header from './Components/Views/Header'



const App = () => {


  return(

    <DataProvider>
      <Header/>
      <Router>
          <Switch>
            <Route exact path="/">
              <SnowboardList/>
            </Route>
            <Route path='/snowboard'>
              <Snowboard/>
            </Route>
            <Route path='/add'>
              <AddSnowboard/>
            </Route>
            <Route path='/edit'>
              <EditSnowboard/>
            </Route>
          </Switch>
      </Router>
  </DataProvider>
  
  )


}


export default App;