/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://robohash.org/set_set4/bgset_bg1/1234wd5?size=150x150',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://robohash.org/set_set4/bgset_bg1/771796?size=150x150',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://robohash.org/set_set4/bgset_bg1/24f355?size=150x150',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://robohash.org/set_set4/bgset_bg1/d32776?size=150x150',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://robohash.org/set_set4/bgset_bg1/1ee8a4?size=150x150',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://robohash.org/set_set4/bgset_bg1/66b7d2?size=150x150',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://robohash.org/set_set4/bgset_bg1/56cb2?size=150x150',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://robohash.org/set_set4/bgset_bg1/8985dc?size=150x150',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://robohash.org/set_set4/bgset_bg1/392537?size=150x150',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://robohash.org/set_set4/bgset_bg1/289467?size=150x150'
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      const teamArray = [...team, fighter];
      setTeam(teamArray);
      setMoney(money - fighter.price);
      setTotalStrength(calculateTotalStrength(teamArray));
      setTotalAgility(calculateTotalAgility(teamArray));
      console.log(teamArray);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (fighterIdx) => {
    const fighterToRemove = team[fighterIdx]

    // 
    const updatedTeam = team.filter((_, idx) => idx !== fighterIdx)
  }

  const calculateTotalStrength = (team) => {
    return team.reduce((accumulator, currentFighter) => accumulator + currentFighter.strength, 0);
  };

  const calculateTotalAgility = (team) => {
    return team.reduce((accumulator, currentFighter) => accumulator + currentFighter.agility, 0)
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: ${money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <h2>{fighter.name}</h2>
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
