import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../../components/Books/Books';


const Home = () => {
  return (
    <div>
      <article>
        <title>LIBRARY | Home</title>
        <meta name="author" content="Josh" />
        <link rel="author" href="https://twitter.com/joshcstory/" />
        <meta name="keywords" content="" />
      </article>
      <Banner />
      <Books />
    </div>
  );
};

export default Home;