import React, { Component } from "react";
import Slider from "./Slider";
import { Redirect } from "react-router";

export default class SliderForm extends Component {
  state = {
    fireRedirect: false
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  };

  render() {
    const { onChangeHandler, cellphone, groceries, entertainment } = this.props;
    const { fireRedirect } = this.state;

    return (
      <div className="tracker">
        <header>
          <h1>Spending Tracker</h1>
          <p>Select your monthly expenses</p>
        </header>
        <form onSubmit={this.onFormSubmit}>
          <Slider
            max={200}
            min={20}
            onChangeHandler={onChangeHandler}
            sliderVal={cellphone}
            name="cellphone"
          >
            Cellphone bill
          </Slider>
          <Slider
            max={500}
            min={10}
            onChangeHandler={onChangeHandler}
            sliderVal={groceries}
            name="groceries"
          >
            Groceries
          </Slider>

          <Slider
            max={400}
            min={30}
            onChangeHandler={onChangeHandler}
            sliderVal={entertainment}
            name="entertainment"
          >
            Entertainment
          </Slider>
          <input type="submit" className="btn" />
        </form>

        {fireRedirect && <Redirect to={"/thank-you"} />}
      </div>
    );
  }
}
