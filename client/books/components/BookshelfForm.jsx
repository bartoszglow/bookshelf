BookshelfForm = React.createClass({

  mixins: [ReactMeteorData],

  getInitialState : function() {
    return {
      open : false
    };
  },

  getMeteorData() {
    return [];
  },

  toggleOpenState(event) {
    event.preventDefault();

    this.setState({
      open: !this.state.open
    });
  },

  renderForm() {
    return (
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" className="form-control" placeholder="Title"></input>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Author</label>
          <input type="text" className="form-control" placeholder="Author"></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="reset" className="btn btn-warning" onClick={this.toggleOpenState}>Reset</button>
      </form>
    );
  },

  renderButton() {
    return (
      <a href="#" className="bookshelf__form-switch" onClick={this.toggleOpenState}>
        <i className="fa fa-3x fa-plus"></i>
      </a>
    );
  },

  render() {
    return (
      <div className="bookshelf__form">
        {this.state.open ? this.renderForm() : this.renderButton()}
      </div>
    );
  }
});
