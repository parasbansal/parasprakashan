import React from 'react';
import Hero from './hero/Hero'
import Books from './books/Books'
import Contact from '../contact/Contact'

const Home = (props) => {
  return (
    <div className="Home">
      <Hero slides={props.books} />
      <Books books={props.books} />
      <Contact />
    </div>
  );
}

export default Home;