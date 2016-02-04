Bookshelf = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    let books,
      bookshelfs = [],
      category = Session.get('category') || window.location.hash.substr(1),
      orderBy = Session.get('orderBy') || 'category.name',
      order = {sort: {}};

    order.sort[orderBy] = 1;

    books = Books.find(category ? {'category.name' : category} : {}, order).fetch();

    for(let i = 0, j = books.length, chunk = 5; i < j; i += chunk) {
      bookshelfs.push(books.slice(i, i + chunk));
    }

    return {
      bookshelfs: bookshelfs
    }
  },

  renderBooks(books) {
    return books.map((book) => {
      return (
        <Book key={book._id} book={book}/>
      );
    });
  },

  renderForm(bookshelf) {
    // Display form only for last bookshelf
    if(this.data.bookshelfs.indexOf(bookshelf) + 1 === this.data.bookshelfs.length) {
      // return (
      //   <BookshelfForm />
      // );
    }
  },

  renderBookshelfs() {
    return this.data.bookshelfs.map((bookshelf, idx) => {
      return (
        <div key={idx} className="panel panel-default">
          <div className="panel-heading">
            <BookshelfCategories books={bookshelf}/>
          </div>
          <div className="panel-body">
            <div className="row">
              {this.renderBooks(bookshelf)}
              {this.renderForm(bookshelf)}
            </div>
          </div>
        </div>
      );
    });
  },

  render() {
    return (
      <div className="bookshelf">
        <BookshelfFilters />
        {this.renderBookshelfs()}
      </div>
    );
  }
});
