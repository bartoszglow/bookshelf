BookInformations = React.createClass({
  propTypes: {
    book: React.PropTypes.object.isRequired
  },
  renderKeywords(chapter) {
    return chapter.keywords.map((keyword, idx) => {
      return (
        <li key={idx}>
          {keyword}
        </li>
      );
    });
  },
  renderChapters() {
    return this.props.book.chapters.map((chapter, idx) => {
      return (
        <li key={idx}>
          {chapter.title}
          <ul>
            {this.renderKeywords(chapter)}
          </ul>
        </li>
      );
    });
  },
  render() {
    return (
      <div className="book__informations panel panel-default">
        <div className="panel-heading" style={{ backgroundColor: this.props.book.category.color }}>
          <h4 className="book__informations-title">{this.props.book.title}</h4>
          <p className="book__informations-author">{this.props.book.author.name}</p>
        </div>
        <div className="book__informations-chapeters panel-body">
          <p>Chapters</p>
          <ol>
            {this.renderChapters()}
          </ol>
        </div>
      </div>
    );
  }
});
