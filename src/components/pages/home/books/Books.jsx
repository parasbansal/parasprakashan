import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import './Books.css'

import Book from './book/Book'

const renderBooks = books => books.map((book, i) => {
  return <Book key={i} book={book} />
})

const Books = (props) => {
  const { books, labManuals, projectWork } = props
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
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="display-4">Books</h2>
        </ScrollAnimation>
        {renderBooks(books)}
        <br />
        <br />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="display-4">Project Work</h2>
          <h5>
            माध्यमिक शिक्षा परिषद उ.प्र. द्वारा लागू सतत एवं व्यापक मूल्यांकन प्रणाली के अंतर्गत 30 अंकों के प्रायोगिक एवं आन्तरिक मूल्यांकन हेतु निर्धारित पाठ्यक्रम एवं अंक विभाजन पर आधारित
          </h5>
        </ScrollAnimation>
        {renderBooks(projectWork)}
      </div>
    </div>
  )
}

export default Books