import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlight from './ui/highlight'

function Highlights() {
  return (
    <section id="hightlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why choose <span className='purple'>Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
                    title="Easy and Quick"
                    para="Get access to the book you purchased online instantly."
                     />
                    <Highlight icon={<FontAwesomeIcon icon="book-open" />} 
                    title="10,000+ Books"
                    para="Library has books in all your favorite catagories."
                     />
                    <Highlight icon={<FontAwesomeIcon icon="tags" />} 
                    title="Affordable Prices"
                    para="Get your hands on bestsellers at unbeatable prices."
                     />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights