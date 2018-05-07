import React, { Component } from "react";
import "./Goal.css";
import Slider from "material-ui/Slider";

class Goal extends Component {
  constructor(props) {
    super(props);
    this.state = { goalPerc: 0 };
    this.onSlide = this.onSlide.bind(this);
  }

  onSlide(e, value) {
    this.setState({ goalPerc: value });
    console.log(value);
  }
  render() {
    console.log(this.props);
    return (
      <div className="goaldiv">
        <div className="sheet">
          <p className="goal"> Main Goal: {this.props.goal}</p>
          <p className="step">Step 1: {this.props.step1}</p>
          <p className="step">Step 2: {this.props.step2}</p>
          <p className="step">Step 3: {this.props.step3}</p>
        </div>
        <div className="slider">
          Progress:
          <Slider
            min={0}
            max={100}
            step={100 / 3}
            sliderStyle={{ margin: "20px", padding: "0px", width: "85%" }}
            value={this.state.goalPerc}
            onChange={this.onSlide}
            // onChange={() =>
            //   props.editSlider(props.id, props.familyid, props.slider)
            // }
          />
        </div>
        <button
          onClick={e =>
            this.props.editSlider(
              this.props.id,
              this.props.familyid,
              this.state.goalPerc
            )
          }
        >
          Update
        </button>
      </div>
    );
  }
}

export default Goal;
