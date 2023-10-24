import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import Product from "../Product/Product";
import data from "../db/data";

export function Products() {
  const result = data[20];
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

  // const t = dataExport();
  return (
    <section className="products-container">
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

      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>

      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>

      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>

      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>

      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>

      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>

      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>
      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>
      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>
      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>
      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>
      <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="bag"
          className="product-img"
        ></img>
        <section className="product-details">
          <h3 className="product-title">bag</h3>
          <section className="product-reviews">
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon" />
            <AiFillStar className="product-icon black" />
            <span className="review-rate">(123 reviews)</span>
          </section>
          <section className="product-price">
            <del>$140,000</del>
            <div className="price">200</div>
            <BsFillBagFill className="bag-icon" />
          </section>
        </section>
      </section>
    </section>
  );
}
