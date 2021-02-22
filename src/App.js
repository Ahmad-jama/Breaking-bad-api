import React from "react";
import "./style.css";

export default function App() {
  const [persons, setPerson] = React.useState([]);
  const getData = () => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then(respon => respon.json())
      .then(persons => setPerson(persons))
      .catch(err => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="text">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRAbwOT_pdWN0nz435l5bjPD1ASLIBUcT24w&usqp=CAU"
          alt="logo"
        />
        <h1> search Breaking Bad chrechtors </h1>
      </div>
      <div className="container">
        {persons.map(person => {
          const { name, nickname, img, char_id, birthday } = person;

          return (
            <div key={char_id} className="person">
              <div className="info">
                <h3> name: {name} </h3>
                <p> nickname: {nickname} </p>
                <p> birthday: {birthday} </p>
              </div>
              <img src={img} alt={name} />
            </div>
          );
        })}
      </div>
    </>
  );
}
