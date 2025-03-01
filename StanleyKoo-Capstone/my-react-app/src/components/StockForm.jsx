import { useState } from "react";

function StockForm({ addStock }) {
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symbol || !quantity || !price) return;
    
    const newStock = {
      symbol: symbol.toUpperCase(),
      quantity: Number(quantity),
      price: Number(price),
      total: Number(quantity) * Number(price),
    };

    addStock(newStock);

    // Reset form
    setSymbol("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Stock Symbol" 
        value={symbol} 
        onChange={(e) => setSymbol(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Quantity" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Purchase Price" 
        step="0.01" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        required 
      />
      <button type="submit">Add Stock</button>
    </form>
  );
}

export default StockForm;
