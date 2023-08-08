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
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log('handle form input');
  };
  const handlebuttonclick = () => {
    alert('handle button click');
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>typical form</h2>
        <input type="text" name="product" onChange={handleFormInput} />
        <button onClick={handlebuttonclick} type="submit">
          click me
        </button>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { author, title, img } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Booklist />);
