import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([]); 
  const productsDb = "https://api.saaremaa.ecoop.ee/supermarket/products?language=et&page=1&orderby=popularity";

  useEffect(() => {
    fetch(productsDb)
      .then(res => res.json())
      .then(json => {
        setProducts(json.data);
      })
  }, []);

  return (
    <div>
      <div>Tooteid on {products.length} tükki</div>

        
          {products.map(element =>
            <div className='section' key={element.id}>
              <img src={element.image}></img>
              <div className='name'>{element.name}</div>
              <div className='producer'>Tootja/päritolumaa: {element.producer}</div>
              <div className='price'>Hind: {element.price}</div>
    
            </div>
        

      )}
    </div>
  );
}

export default App;
