import React from 'react';

class Comments extends React.Component {
  submitComment(event) {
    event.preventDefault();
    const comment = this.comment.value;
    this.props.addComment(comment);
  }

  render() {

    return (
      <div>
        <h3>Additional Comments</h3>
        {/*Include maps.me pins here if the location isn't obvious*/}
          <form id="usrComment" onSubmit={(e) => this.submitComment(e)}>
            <textarea form="usrComment"
                      ref={(input) => this.comment = input}
            />
            <input type="submit"
                   placeholder="Add any Comments"
            />
          </form>
      </div>
    );
  }
}

export default Comments;
