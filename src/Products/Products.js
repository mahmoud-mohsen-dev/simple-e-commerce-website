import "./Products.css";
import Product from "../Product/Product";
import data from "../db/data";

function dataExport(arr) {
  const arrOfProducts = arr.map((ele) => {
    const result = ele;

    const {
      img,
      title,
      star,
      reviews,
      prevPrice,
      newPrice,
      company,
      color,
      category,
    } = result;

    return (
      <Product
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        company={company}
        color={color}
        category={category}
      />
    );
  });

  return arrOfProducts;
}


function Products() {
  return (
    <section className="products-container">
      {dataExport(data)}
    </section>
  );
}

export default Products;
