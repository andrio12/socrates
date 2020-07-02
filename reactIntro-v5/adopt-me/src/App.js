const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "what-a-div" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Fish",
      breed: "Shark",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, { name: "Herkules", animal: "Dog", breed: "Lab" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
