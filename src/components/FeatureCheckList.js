import React from 'react';

class FeatureCheckList extends React.Component {
  submitFeatures(event) {
    event.preventDefault();
    console.log(this);
    const feats = {
      isAC : this.isAC.checked,
      isMusicVideos : this.isMusicVideos.checked,
      isMovies : this.isMovies.checked,
      isCurtains : this.isCurtains.checked,
    }
    this.props.addFeatures(feats);
  }

  render() {
    return (
      <div>
        {/*Maybe have just 2 ratings for hot/cold and loud/quiet.Problem with subjectivity*/}
        <h3>What was on your bus?</h3>
          <form onSubmit={(e) => this.submitFeatures(e)}>
            <input ref={(input) => this.isAC = input}
                  type="checkbox"
                  id="AC"
            /> <label for="AC">AC</label>
            <input ref={(input) => this.isMusicVideos = input}
                  type="checkbox"
                  id="MV"
            /> <label for="MV">MusicVideos</label>
            <input ref={(input) => this.isMovies = input}
                  type="checkbox"
                  id="Mov"

            /> <label for="Mov">Movies</label>
            <input ref={(input) => this.isCurtains = input}
                  type="checkbox"
                  id="Cr"
            /> <label for="Cr">Curtains</label>
            <button type= "submit">Submit features</button>
          </form>
      </div>
    );
  }
}

export default FeatureCheckList;
