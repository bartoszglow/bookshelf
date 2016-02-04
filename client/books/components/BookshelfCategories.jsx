BookshelfCategories = React.createClass({
  propTypes: {
    books: React.PropTypes.array.isRequired
  },

  findCategories() {
    let categories = [];

    this.props.books.map((book) => {
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

    return categories;
  },

  renderCategories() {
    return this.findCategories().map((category, idx) => {
      return (
        <a href="#" key={idx} className="btn btn-sm active disabled" style={{ background: category.color }}>
          {category.name}
        </a>
      );
    });
  },

  render: function() {
    return (
      <div className="bookshelf__categories">
        {this.renderCategories()}
      </div>
    );
  }
});
