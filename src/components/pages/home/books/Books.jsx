import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './Books.css'

import Book from './book/Book'

const renderBooks = books => books.map((book, i) => {
  return <Book key={i} book={book} />
})

const Books = (props) => {
  const { books, labManuals, projectWork } = props;
  return (
    <div className="books my-5">
      <div className="container">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="display-4">Lab Manuals</h2>
          <h3 className="display-5">According to C.B.S.E.</h3>
        </ScrollAnimation>
        {renderBooks(labManuals)}
        <br />
        <br />
        <h2 className="display-4">Books</h2>
        {renderBooks(books)}
        <br />
        <br />
        <h2 className="display-4">Project Work</h2>
        {renderBooks(projectWork)}
      </div>
    </div>
  );
}

export default Books;