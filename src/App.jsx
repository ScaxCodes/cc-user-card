import { UserCard } from "./UserCard";
import "./user.css";
import userData from "./user.json";

function App() {
  return (
    <UserCard
      name={userData.name}
      phoneNumber={userData.phoneNumber}
      age={userData.age}
      address={userData.address}
    />
  );
}

export default App;
