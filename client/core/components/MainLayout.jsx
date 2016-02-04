MainLayout = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.header}

        <div className="container">
          {this.props.content}
        </div>

        {this.props.footer}
      </div>
    );
  }
});
