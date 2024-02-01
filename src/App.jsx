import Person from "./components/Person";

const App = () => {

  return (
    <div>
      <h2>React PropTypes</h2>
      <Person 
        props={{
          name: "John Doe",
          profession: "Software Engineer",
          age: 30
        }}
      />
    </div>
  )
}

export default App;