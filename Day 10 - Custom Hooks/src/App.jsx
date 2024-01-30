import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();

    if(data && data.products){
      setProducts(data.products);
    }
  }
  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);
  

  const selectPageHandler = (sPage) => {
    if(sPage >= 1 && sPage<=products.length/10 && sPage !== page){
      setPage(sPage);
    }
  }

  return (
    <>
      <h3>Pagination</h3>
      <div>
        {
          products.length > 0 && (
            <div className='wrapper'>
              {
                products.slice(page * 10 - 10, page*10).map((prod) => {
                  return (
                    <span key={prod.id}>
                      <img src={prod.thumbnail} alt={prod.title} className='images'/>
                      <p>{prod.title}</p>
                    </span>

                  )
                })
              }
            </div>
          )
        }
      </div>
      <div>
        {
          products.length > 0 && (
          <div className="pagination">
            <span className='left' onClick={() => selectPageHandler(page-1)}>&larr;</span>

            {
              [...Array(products.length / 10)].map((_, i) => {
                return <span onClick={() => {selectPageHandler(i+1)}} className={page === i+1 ? "page-box page-active": "page-box" } key={i}>{i + 1}</span>
              })
            }
            
            <span className='right' onClick={() => selectPageHandler(page+1)}>&rarr;</span>
          </div>
          )}
      </div>
    </>
  )
}

export default App
