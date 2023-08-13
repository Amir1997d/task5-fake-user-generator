import { useState, useEffect } from 'react';
import './styles/style.css';
import UserInputForm from './components/UserInputForm';
import FakeUsersTable from './components/FakeUsersTable';
import generateFakeUsers from "./helpers/generateFakeUsers";


function App() {
  
  const [errorAmount, setErrorAmount] = useState(0);
  const [seed, setSeed] = useState(42);
  const [region, setRegion] = useState('Poland');
  const [visibleUsersCount, setVisibleUsersCount] = useState(20);
  const [fakeUsers, setFakeUsers] = useState([]);
  const totalUsersCount = 1000;


  useEffect(() => {
    const newFakeUsers = generateFakeUsers(visibleUsersCount, seed, region, errorAmount);
    setFakeUsers(newFakeUsers);
  }, [visibleUsersCount, seed, region, errorAmount]);

  // Function to load more users as the user scrolls down
  const loadMoreUsers = () => {
    if (visibleUsersCount < totalUsersCount) {
      setVisibleUsersCount(visibleUsersCount + 10);
    }
  };
  
  return (
    <div className="app">
      <h1>Fake User Generator</h1>
      <UserInputForm
        errorAmount={errorAmount}
        setErrorAmount={setErrorAmount}
        seed={seed}
        setSeed={setSeed}
        setRegion={setRegion}
        region={region}
        fakeUsers={fakeUsers}
      />
      <FakeUsersTable fakeUsers={fakeUsers} loadMoreUsers={loadMoreUsers}/>
    </div>
  );
}

export default App;