import React, { Children } from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'James clear',
    title: ' Atomic Habits',
    img: 'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },

  {
    author: ' Morgan Housel ',
    title: 'The Psychology of Money',
    img: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg',
    id: 2,
  },
];

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { author, title, img } = props;
  const displayTitle = () => {
    console.log(title);
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Booklist />);
