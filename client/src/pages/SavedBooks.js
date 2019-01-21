import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card";
import SavedBookDetail from "../components/SavedBookDetail";
import API from "../utils/api";

class SavedBooks extends Component {
  state = {
    books: []
  };

  // grab the books using API
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState(
        {
          books: res.data
        },
        console.log(res.data)
      )
      )
      .catch(err => console.log(err));
  }

  // loads books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  // deletes a book
  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        {this.state.books.length ? (
          <Card heading="Saved Books">
            {this.state.books.map(book => (
              <SavedBookDetail
                key={book._id}
                src={book
                  ? book.src
                  : ""}
                title={book.title}
                authors={book.authors.join(", ")}
                date={book.date}
                description={book.description}
                link={book.link}
                handleDeleteBook={() => this.handleDeleteBook(book._id)}
              />
            ))}
          </Card>
        ) : (
            <Card heading="Saved Books"></Card>
          )}
      </Container>
    );
  }
}

export default SavedBooks;
