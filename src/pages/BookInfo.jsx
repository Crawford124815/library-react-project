import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import Book from "../components/ui/Book";



const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);


  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    // return cart.find(book => book.id === +id) BREAKS BOOK PAGE
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} className="book__selected--img" alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <h3 className="book__summary--title">Summary</h3>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  dicta excepturi illo cumque amet modi veniam impedit ratione
                  assumenda! Harum rerum necessitatibus quos facilis dolore
                  saepe omnis ex inventore reprehenderit!
                </p>
                <p className="book__summary--para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  dicta excepturi illo cumque amet modi veniam impedit ratione
                  assumenda! Harum rerum necessitatibus quos facilis dolore
                  saepe omnis ex inventore reprehenderit!
                </p>
                {bookExistsOnCart() ? (
                  <button className="btn">Checkout</button>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="books__selected--title--top">Recommended books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
