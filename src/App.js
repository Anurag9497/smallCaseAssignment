import React,{useState} from 'react';
import './App.css';
import Parent from './components/Parent';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [modalDisplay, setModalDisplay] = useState({display: "none"});
  const [showDisplay, setShowDisplay] = useState({display: "block"});

  const handleDisplay = () => {
    setShowDisplay({display: "none"});
  };

  document.addEventListener("keydown", event => {
    if(event.key==="Escape")
      handleDisplay();
  })

  return (
    <Router basename="/page" hashType="noslash">
      <Switch>
        <Route exact path="/">
          <Parent modalDisplay={modalDisplay}/>
        </Route>
        <Route exact path="/modal1">
          <Parent modalDisplay={showDisplay} handleDisplay={handleDisplay}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
