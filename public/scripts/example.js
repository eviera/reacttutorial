var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
       Hello World commentBox
      </div>
    );
  }
});

React.render(
  <CommentBox/>,
  document.getElementById('content')
);
