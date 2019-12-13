import React from 'react'
import Hero from './hero/Hero'
import Books from './books/Books'
import Contact from '../contact/Contact'

const Home = (props) => {
  return (
    <div className="Home">
      <Hero books={props.books} labManuals={props.labManuals} />
      <Books books={props.books} labManuals={props.labManuals} projectWork={props.projectWork} />
      <Contact />
    </div>
  )
}

export default Home