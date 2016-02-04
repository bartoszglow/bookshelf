BookshelfFilters = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    let books = Books.find({}).fetch(),
      categories = [];

    books.map((book) => {
      let uniq = true;
      for(let i = 0; i < categories.length; i++) {
        if(categories[i].name === book.category.name) {
          uniq = false;
        }
      }
      if(uniq) {
        categories.push(book.category);
      }
    });

    return {
      categories: categories
    }
  },

  orderChange(event) {
    event.preventDefault();

    Session.set("orderBy", event.target.hash.substr(1));
  },

  categoryChange(event) {
    Session.set("category", event.target.hash.substr(1));
  },

  renderFilters() {
    return this.data.categories.map((category, idx) => {
      return (
        <a key={idx} className="bookshelf__filters-category btn btn-default" href={'#' + category.name} onClick={this.categoryChange} style={{ "background": category.color }}>{category.name}</a>
      );
    });
  },

  render() {
    return (
      <section className="row">
        <div className="bookshelf__filters col-sm-6">
          <a className="btn btn-default" href="#" onClick={this.categoryChange}>All</a>
          {this.renderFilters()}
        </div>
        <div className="bookshelf__order col-sm-6">
          <span>Order by:</span>
          <a className="btn btn-default" href="#title" onClick={this.orderChange}>Title</a>
          <a className="btn btn-default" href="#author.name" onClick={this.orderChange}>Author</a>
          <a className="btn btn-default" href="#category.name" onClick={this.orderChange}>Category</a>
        </div>
      </section>
    );
  }
});
