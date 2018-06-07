import React from 'react';

class BusBreakdown extends React.Component {
    render() {

      return (
        <div>
          <h3>Did your bus break down?</h3>
          {/*Will need to open up additional questions if Yes
              Needs to save state somehow*/}
            <form>
              <div className="radio">
                <label>
                  <input type="radio" value="option1" />
                  Yes
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" />
                  No
                </label>
              </div>
            </form>
        </div>
      );
    }
  }

export default BusBreakdown;
