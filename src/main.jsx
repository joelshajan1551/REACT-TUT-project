import React, { Children } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const books = [
  {
    author: "James clear",
    title: " Atomic Habits",
    img: "https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL600_SR600,400_.jpg",
  },

  {
    author: " Morgan Housel ",
    title: "The Psychology of Money",
    img: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg",
  },
];

const names = ["john", "peter", "suso"];

const Booklist = () => {
  return <section className="booklist">{books}</section>;
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

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Booklist />);