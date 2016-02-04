FlowRouter.route("/", {
  name: "Boohshelf",
  action: function(params) {
    render(<Bookshelf />);
  }
});

function render(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  });
}
