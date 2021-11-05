import logo from "./logo.svg";
import "./App.css";

import Persons from "./Persons";
import { PersonForm } from "./PersonForm";
import { useNotifyErr, usePerson } from "./persons/custom-hooks";
import { Notify } from "./Notify";
import { PhoneForm } from "./PhoneForm";

function App() {
  const { data, error, loading } = usePerson();

  if (error) return <span style="color: red">{error}</span>;

  const { errorMessage, notifyError } = useNotifyErr();

  return (
    <div className="App">
      <Notify errorMessage={errorMessage} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading ? (
          <p>Loading... </p>
        ) : (
          <>
            <Persons persons={data?.allPersons} />
          </>
        )}
        <PersonForm notifyError={notifyError} />
        <hr />
        <PhoneForm notifyError={notifyError} />
      </header>
    </div>
  );
}

export default App;
