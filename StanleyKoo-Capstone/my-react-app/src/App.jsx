import { useState } from "react";
import StockForm from "./components/StockForm";

function App() {
  const [stocks, setStocks] = useState([]);

  const addStock = (newStock) => {
    setStocks([...stocks, newStock]);
  };

  return (
    <div className="container">
      <h1>Finance Dashboard</h1>
      <StockForm addStock={addStock} />
      <h2>Stock List</h2>
      <p>No stocks added yet.</p>
    </div>
  );
}

export default App;
