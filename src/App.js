import Header from "./components/Header";
import "./App.css";
import ItemsList from "./components/ItemsList";
import Topics from "./components/Topics";
import TotalPrice from "./components/TotalPrice";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Topics></Topics>
      <ItemsList></ItemsList>
      <TotalPrice></TotalPrice>
    </div>
  );
}

export default App;
