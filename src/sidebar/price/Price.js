import './Price.css'


function filterThePrice(arr, valueMin, setterFunc, valueMax) {
  const result = arr.filter((ele) => {
    return (
      valueMin === "All" ||
      (Number(ele.newPrice) > 150 && valueMin >= 150)||
      (Number(ele.newPrice) >= valueMin && Number(ele.newPrice) <= valueMax)
    ); 
  });
  setterFunc(result);
  return result;
}


function Price({ theFunc, initialData }) {
  return (
    <div className="ml">
      <h2 className="side-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onClick={() => {
            filterThePrice(initialData, "All", theFunc);
          }}
        />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onClick={() => {
            filterThePrice(initialData, 0, theFunc, 50);
          }}
        />
        <span className="checkmark"></span>$0 - $50
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onClick={() => {
            filterThePrice(initialData, 50, theFunc, 100);
          }}
        />
        <span className="checkmark"></span>$50 - $100
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onClick={() => {
            filterThePrice(initialData, 100, theFunc,150);
          }}
        />
        <span className="checkmark"></span>$100 - $150
      </label>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test2"
          onClick={() => {
            filterThePrice(initialData, 151, theFunc);
          }}
        />
        <span className="checkmark"></span>Over $150
      </label>
    </div>
  );
}

export default Price;