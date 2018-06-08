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
        <p>Common comments include:</p>
        <ul>
          <li>
            Dropping Maps.Me pins for hard to find places. Ex: "http://ge0.me/wa0p4j8jik/Old_Standi"
                for the old standi in Makambako.
          </li>
          <li>
            The duration of the bus breakdown.
          </li>
          <li>
            Whether the bus was extraordinarily hot/cold or loud/quiet.
          </li>
          <li>
            A phone number to call the bus company.
          </li>
        </ul>
          <form id="usrComment" onChange={(e) => this.submitComment(e)}>
            <textarea form="usrComment"
                      ref={(input) => this.comment = input}
            />
          </form>
      </div>
    );
  }
}

export default Comments;
