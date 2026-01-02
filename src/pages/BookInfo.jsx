import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/ui/Rating'
import Price from '../components/ui/Price'
import book from '../components/ui/Book'



function BookInfo({ book }) {
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="books__selected--top">
                       <Link to="/books" className="book__link">
                       <FontAwesomeIcon icon="arrow-left" />
                       </Link>
                       <Link to="/books" className='book__link'>
                       <h2 className="book__selected--title--top">Books</h2>
                       </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">      
                                <img src="https://m.media-amazon.com/images/I/51V3121nmkL._AC_UF1000,1000_QL80_.jpg" className="book__selected--img" alt="" />                     
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">The Great Gatsby</h2>
                            <Rating rating={4.5} />
                            <div className="book__selected--price">
                                <Price originalPrice={50} salePrice={35} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default BookInfo