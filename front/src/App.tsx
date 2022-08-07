import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import teamsService from 'services/stubs/teams.stub.service';


function App() {
  const [teamNames, setTeamNames] = useState(['a']);

  useEffect(() => {
    teamsService.getTeams()
    .then(rows => {
      setTeamNames(rows.map((it: any) => it.name));
    }).catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with { teamNames }
        </a>
      </header>
    </div>
  );
}

export default App;
