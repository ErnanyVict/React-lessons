import List from "./List";

function App() {

  const fruits = [
    {id: 1, name: "maça", calories: 95},
    {id: 2, name: "laranja", calories: 45},
    {id: 3, name: "banana", calories: 105},
    {id: 4, name: "morango", calories: 50}

  ]

  const vegetables = [
    {id: 1, name: "batata", calories: 200},
    {id: 2, name: "cenoura", calories: 130},
    {id: 3, name: "brócolis", calories: 25},
    {id: 4, name: "milho", calories: 76}

  ]
  

  return(
    <>
      <List items={fruits} category="Frutas"/>
      <List items={vegetables} category="Vegetais"/>
    </>
  );
}

export default App