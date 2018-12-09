import React from 'react';
import Hero from './hero/Hero'
import Books from './books/Books'

const Home = (props) => {
  return (
    <div className="Home">
      <Hero slides={props.books} />
      <Books books={props.books} />
    </div>
  );
}

export default Home;