import React from 'react';

class FeatureCheckList extends React.Component {
  submitFeatures(event) {
    console.log(this);
    const feats = {
      isAC : this.isAC.checked,
      isMusicVideos : this.isMusicVideos.checked,
      isMovies : this.isMovies.checked,
      isCurtains : this.isCurtains.checked,
      isUSB : this.isUSB.checked,
      brokedown: this.brokedown.checked,
    }
    this.props.addFeatures(feats);
  }

  render() {
    return (
      <div>
        <h3>What was on your bus?</h3>
          <form onChange={(e) => this.submitFeatures(e)}>
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
          <input ref={(input) => this.isUSB = input}
                  type="checkbox"
                  id="USB"
            /> <label for="USB">USB Charging</label>
          <input ref={(input) => this.brokedown = input}
                  type="checkbox"
                  id="brokedown"
            /> <label for="brokedown">Bus Brokedown</label>
          </form>
      </div>
    );
  }
}

export default FeatureCheckList;
