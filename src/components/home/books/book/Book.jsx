import React from 'react'

const renderTableRow = row => {
  return (
    <tr key={row.index}>
      <th scope="row">{row.index}</th>
      <td>{row.title}</td>
      <td>{row.part}</td>
      <td>{row.price}</td>
    </tr>
  )
}

const renderTable = book => {
  const table = book.tableData.map((row, i) => {
    row.index = i + 1
    return renderTableRow(row)
  })
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Part</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {table}
      </tbody>
    </table>
  )
}

const Book = (props) => {
  const book = props.book
  return (
    <div className="Book mt-4">
      <div className="row border shadow bg-cyan">
        <div className="col-md-4">
          <img className="d-block img-fluid" src={"./assets/images/stacked/" + book.image + ".png"} alt={book.title} />
        </div>
        <div className="col-md-8 bg-white py-3 text-center">
          <div className="py-2">
            <h3 className="display-5">{book.title} {book.subTitle}</h3>
          </div>
          <div className="mt-2">
            {renderTable(book)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;