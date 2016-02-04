Book = React.createClass({
  propTypes: {
    book: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <div className="book" key={this.props.book._id}>
        <div className="book__cover">
          <img src={this.props.book.cover}/>
          <div className="book__cover-overlap" style={{ borderBottomColor: this.props.book.category.color }}></div>
        </div>
        <h3 className="book__title text-center">
          {this.props.book.title}
        </h3>
        <p className="book__author text-center">
          {this.props.book.author.name}
        </p>
        <BookInformations book={this.props.book}/>
      </div>
    );
  }
});
