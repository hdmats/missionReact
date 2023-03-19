import React from 'react';
import logo from './MarchMadness.png';
import './App.css';
import data from './CollegeBasketballTeams.json';
function Header() {
  const logo = require('./MarchMadness.png');
  return (
    <div>
      <header>
        <img src={logo} className="titleImg" />
      </header>
      <p className="desc">List of every college team in March Madness</p>
    </div>
  );
}
class Team extends React.Component<any, any> {
  render() {
    const team = this.props;

    return (
      <div className="card">
        <h2>{team.school}</h2>
        <h3>Mascot: {team.name}</h3>
        <h3>
          Location: {team.city}, {team.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="cards">
      {data.teams.map((team) => (
        <Team {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
