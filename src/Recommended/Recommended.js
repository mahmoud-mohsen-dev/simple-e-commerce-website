import './Recommended.css'

function filterContent (arr, name, setterFunc) {
    const result = arr.filter(ele => {
        return ele.company === name || name === 'All'
    })
    setterFunc(result)
    return result
}


function Recommended({theFunc, initialData}) {
    return (
      <section className="recommended-container">
        <h2>Recommended</h2>
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => filterContent(initialData, "All", theFunc)}
          >
            All Products
          </button>
          <button
            className="btn"
            onClick={() => filterContent(initialData, "Nike", theFunc)}
          >
            Nike
          </button>
          <button
            className="btn"
            onClick={() => filterContent(initialData, "Adidas", theFunc)}
          >
            Adidas
          </button>
          <button
            className="btn"
            onClick={() => filterContent(initialData, "Puma", theFunc)}
          >
            Puma
          </button>
          <button
            className="btn"
            onClick={() => filterContent(initialData, "Vans", theFunc)}
          >
            Vans
          </button>
        </div>
      </section>
    );
}

export default Recommended;