import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const renderTableRow = row => {
  return (
    <tr key={row.index}>
      <th scope="row">{row.index}</th>
      <th>{row.title}</th>
      <th>{row.class}</th>
      <th>{row.price}</th>
    </tr>
  )
}

const renderTable = book => {
  const table = book.tableData.map((row, i) => {
    row.index = i + 1
    return renderTableRow(row)
  })
  return (
    <ScrollAnimation animateIn="slideInUp" animateOnce={true} delay={550}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Class</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody className="book-table-body">
          {table}
        </tbody>
      </table>
    </ScrollAnimation>
  )
}

const Book = (props) => {
  const book = props.book
  return (
    <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
      <div className="Book mt-4">
        <div className="row border shadow bg-cyan">
          <div className="col-md-4">
            <ScrollAnimation animateIn="zoomIn" animateOnce={true} delay={300}>
              <img className="d-block img-fluid" src={"./assets/images/stacked/" + book.image + ".png"} alt={book.title} />
            </ScrollAnimation>
          </div>
          <div className="col-md-8 bg-white py-3 text-center">
            <div className="py-2">
              <ScrollAnimation animateIn="zoomInUp" animateOnce={true} delay={300}>
                <h3 className="display-5">{book.title}</h3>
              </ScrollAnimation>
            </div>
            <div className="mt-2">
              {renderTable(book)}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default Book