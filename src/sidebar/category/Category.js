import './Category.css'

function filterTheData (arr, name, setterFunc) {
    const result = arr.filter((ele) => {
      return ele.category === name || name === "All";
    });
    setterFunc(result);
    return result;
}



function Category({ theFunc, initialData }) {
  return (
    <div>
      <h2 className="side-title">Category</h2>
      <div className="labels-container">
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            onClick={() => filterTheData(initialData, "All", theFunc)}
          />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            onClick={() => filterTheData(initialData, "sneakers", theFunc)}
          />
          <span className="checkmark"></span>Sneakers
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            onClick={() => filterTheData(initialData, "flats", theFunc)}
          />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            onClick={() => filterTheData(initialData, "sandals", theFunc)}
          />
          <span className="checkmark"></span>Sandals
        </label>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            onClick={() => filterTheData(initialData, "heels", theFunc)}
          />
          <span className="checkmark"></span>Heels
        </label>
      </div>
    </div>
  );
}

export default Category;