import React from 'react'
import './Books.css'

import Book from './book/Book'

const renderBooks = books => books.map((book, i) => {
  return <Book key={i} book={book} />
})

const Books = (props) => {
  return (
    <div className="books my-5">
      <div className="container">
        <h2 className="display-4">Lab Manuals</h2>
        <h3 className="display-5">According to C.B.S.E.</h3>
        {renderBooks(props.books)}
      </div>
    </div>
  );
}

export default Books;