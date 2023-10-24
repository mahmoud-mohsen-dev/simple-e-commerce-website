import './Color.css'

function Color() {
    return (
      <div className="mr">
        <h2 className="side-title color-title">Colors</h2>
        <label className="sidebar-label-container  h-all">
          <input type="radio" name="test3" />
          <span className="checkmark all"></span>All
        </label>
        <label className="sidebar-label-container h-black">
          <input type="radio" name="test3" />
          <span className="checkmark black"></span>Black
        </label>
        <label className="sidebar-label-container h-blue">
          <input type="radio" name="test3" />
          <span className="checkmark blue"></span>Blue
        </label>
        <label className="sidebar-label-container h-red">
          <input type="radio" name="test3" />
          <span className="checkmark red"></span>Red
        </label>
        <label className="sidebar-label-container h-green">
          <input type="radio" name="test3" />
          <span className="checkmark green"></span>Green
        </label>
        <label className="sidebar-label-container h-white">
          <input type="radio" name="test3" />
          <span className="checkmark white"></span>White
        </label>
      </div>
    );
}

export default Color;