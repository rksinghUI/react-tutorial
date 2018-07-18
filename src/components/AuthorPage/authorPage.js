import React, { Component } from 'react';
import * as authorActions from '../../actions/authorActions';
import authorstore from '../../store/authorStore'

class AuthorComponent extends Component {
  constructor() {
    super();
    this.getAuthors = this.getAuthors.bind(this);
    this.state = {
      authors: authorstore.getAllAuthors(),
    }
  }

  componentWillMount() {
    authorstore.on('change', this.getAuthors);
  }

  getAuthors() {
    this.setState({
      authors: authorstore.getAllAuthors()
    })
  }

  createAuthor() {
    authorActions.createAuthor(this.refs.aname.value);
  }

  render() {
    const authors = this.state.authors;
    var li = authors.map((author) => <li>{author.authorName}</li>);
    return (
      <div className="home">
        <h1>Author Component - Flux Intergation</h1>
        <p className="home-intro">
          To get started, edit and save to reload.
        </p>
        <table border='1' cellSpacing={4} cellPadding={10}>
          <tr>
            <td> Enter Author Name: <input type='text' ref='aname' /></td>
          </tr>
          <tr>
            <td colSpan='2'>
              <button onClick={this.createAuthor.bind(this)}>Create Author</button>
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <h3>Authors List</h3>
              <ul>
                {li}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default AuthorComponent;
