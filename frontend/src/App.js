/*
Frontend React Coding Challenge:

Refactor the hardcoded data below, so that you are fetching the data from https://jsonplaceholder.typicode.com/photos?limit=50

Using responsive design best practices, build a listing page that is suitable on desktop and mobile devices; the image on the cards should use the thumbnail URL and the layout should collapse to a single column on mobile. 

Although CSS is not a huge focus for this exercise, please ensure to make use of the required CSS to create a basic responsive grid layout.

## Stretch Challenge:

Once you have your layout complete, a user should be able to click on a card thumbnail, and the image url should pop up on click.
*/

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
