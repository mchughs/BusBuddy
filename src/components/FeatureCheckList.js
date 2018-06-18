import React from 'react';

class FeatureCheckList extends React.Component {
  submitFeatures(event) {
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
      <div >
        <h3>What were the bus features ?</h3>
          <form className="feature-checklist" onChange={(e) => this.submitFeatures(e)}>
            <input ref={(input) => this.isAC = input}
                  className="largerCheckbox"
                  type="checkbox"
                  id="AC"
            /> <label htmlFor="AC">AC</label>

            <input ref={(input) => this.isMusicVideos = input}
                  className="largerCheckbox"
                  type="checkbox"
                  id="MV"
            /> <label htmlFor="MV">MusicVideos</label>

            <input ref={(input) => this.isMovies = input}
                  className="largerCheckbox"
                  type="checkbox"
                  id="Mov"
            /> <label htmlFor="Mov">Movies</label>

            <input ref={(input) => this.isCurtains = input}
                  className="largerCheckbox"
                  type="checkbox"
                  id="Cr"
            /> <label htmlFor="Cr">Curtains</label>

            <input ref={(input) => this.isUSB = input}
                  className="largerCheckbox"
                  type="checkbox"
                  id="USB"
            /> <label htmlFor="USB">USB Charging</label>

            <input ref={(input) => this.brokedown = input}
                  className="largerCheckbox"
                  type="checkbox"
                  id="brokedown"
            /> <label htmlFor="brokedown">Bus Brokedown</label>
          </form>
      </div>
    );
  }
}

export default FeatureCheckList;
