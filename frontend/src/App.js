import './App.css';


function App() {
  const product = {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150',
  }

  return (
    <div className="App">
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default App;
