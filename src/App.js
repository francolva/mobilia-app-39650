import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting= { "Tu espacio, a tu alcance" } />
    </div>
  );
}

export default App;
