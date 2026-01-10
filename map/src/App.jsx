import './App.css'

function App() {
  const fruits = ["Apple", "Banana", "Cherry", "Mango"];
  const arr1 = [10, 20, 30, 40, 50];


  // const [first, ...rest] = arr1;
  // const last = arr1[arr1.length - 1];
  const first = arr1[0];
  const last = arr1.slice(-1)(0);
  const middle = arr1.slice()

  return (
    <>
      <h2>Fruits List:</h2>
      {fruits.map((fruit, index) => (
        <p key={index}>
          {index + 1}. {fruit}
        </p>
      ))}

      <h2>Array Values:</h2>
      <p>First: {first}</p>
      <p>Rest: {rest.join(", ")}</p>
      <p>Last: {last}</p>
    </>
  );
}

export default App;
