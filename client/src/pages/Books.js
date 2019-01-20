import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card";
import BookDetail from "../components/BookDetail";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  // storing the data in database
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  // deletes book from database
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  // saves book to database
  handleSaveBook = bookData => {
    API.saveBook(bookData)
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Card heading="Google Books Search">
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        </Card>
        {this.state.books.length ? (
          <Card heading="Results">
            {this.state.books.map(book => (
              <BookDetail
                key={book.id}
                src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "N/A"}
                description={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}

                handleSaveBook={() => this.handleSaveBook({
                  title: book.volumeInfo.title,
                  src: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
                  authors: book.volumeInfo.authors,
                  description: book.volumeInfo.description,
                  link: book.volumeInfo.infoLink
                })}
              />
            ))}
          </Card>
        ) : (
            <Card heading="Search Results"></Card>
          )}
      </Container>
    );
  }
}

export default Books;
