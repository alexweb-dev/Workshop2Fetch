import { useState } from "react";

function PetCard({ id, name, weight, photo, sleepAmount, curious }) {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      <p>{name}</p>
      {display ? (
        <>
          <p>{id}</p>
          <p><img src={photo.thumb} alt={name} /></p>
          <p>{sleepAmount}</p>
          <p>{weight}</p>
          <p>{curious}</p>
        </>
      ) : null}
      <button onClick={toggleDisplay}>
        {display ? "-" : "+"}
      </button>
    </>
  );
}

export default PetCard;
