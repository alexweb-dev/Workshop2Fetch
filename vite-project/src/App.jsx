import { useEffect, useState } from 'react';
import './App.css';
import PetCard from './components/PetCard';

function App() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    fetch('http://wild.creativebrain.fr/pets')
      .then(res => res.json())
      .then(data => {
        setPets(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, []);

  return (
    <>
      <h1>Coucou</h1>
      {pets ? (
        pets.map((pet, index) => (
          <div key={index}>
            <PetCard
              name={pet.name}
              weight={pet.weight}
              photo={pet.photo}
              sleepAmount={pet.sleepAmount}
              curious={pet.curious}
            />
          </div>
        ))
      ) : (
        "Chargement ..."
      )}
    </>
  );
}

export default App;
