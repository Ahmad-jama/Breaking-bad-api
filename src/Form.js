import React from "react";

const Form = ({ setData }) => {
  const [value, setValue] = React.useState("");

  const getData = () => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${value}`)
      .then(respon => respon.json())
      .then(persons => setData(persons))
      .catch(err => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, [value]);
  console.log(value);
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <label id="name"> charechter name: </label>{" "}
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        placeholder="type charechter name"
      />{" "}
    </form>
  );
};

export default Form;
