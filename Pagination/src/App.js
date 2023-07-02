import { useEffect, useState } from 'react'
import Pagination from './component/Pagination'
import './index.css'

export default function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        setProducts(data.products)
        setLoading(false)
      })
  }, [])

  return (
    <div className='App'>
      <h1>Pagination</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div style={{ margin: '20px 0', display: 'flex', flexWrap: 'wrap' }}>
          {products &&
            products.slice(page * 10 - 10, page * 10).map((item) => {
              return (
                <div
                  style={{
                    padding: '10px',
                    margin: '20px',
                    border: '1px solid red',
                    height: '150px',
                  }}
                >
                  <img
                    src={item.thumbnail}
                    style={{ height: '100%' }}
                    alt='product image'
                  />
                  <p>{item.title}</p>
                </div>
              )
            })}
        </div>
      )}

      <div>
        {page > 1 && (
          <button onClick={() => setPage((prev) => prev - 1)}>Previous</button>
        )}

        {[...Array(products.length / 10)].map((x, num) => {
          return (
            <span
              onClick={() => {
                console.log(page)
                setPage(num + 1)
              }}
              className={page === num + 1 && 'active'}
              style={{
                padding: '10px',
                margin: '2px',
                cursor: 'pointer',
              }}
            >
              {num + 1}
            </span>
          )
        })}

        {page < products.length / 10 && (
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        )}
      </div>
    </div>
  )
}
