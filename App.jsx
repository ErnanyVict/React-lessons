import Student from "./Student";

function App() {
  return(
    <>
      <Student name="Vorcaro" age={39} isStudent={true}/>
      <Student name="Lula" age={70} isStudent={false}/>
      <Student name="Erika" age={29} isStudent={false}/>
      <Student />
    </>
  );
}

export default App