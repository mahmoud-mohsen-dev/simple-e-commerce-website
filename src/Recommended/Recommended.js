import './Recommended.css'

function Recommended() {
    return (
        <section className="recommended-container">
            <h2>Recommended</h2>
            <div className="btn-container">
                <button className="btn">All Products</button>
                <button className="btn">Nike</button>
                <button className="btn">Adidas</button>
                <button className="btn">Puma</button>
                <button className="btn">Vans</button>
            </div>
        </section>
    );
}

export default Recommended;