import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SliderForm from "./components/SliderForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cellphone: 0,
      groceries: 0,
      entertainment: 0
    };
  }

  updateExpenses = ({ name, value }) => {
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  render() {
    const { groceries, entertainment, cellphone } = this.state;
    const totalExpense = groceries + entertainment + cellphone;
    console.log(totalExpense);
    

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <SliderForm
                {...props}
                onChangeHandler={this.updateExpenses}
                {...this.state}
              />
            )}
          />
          <Route
            exact
            path="/thank-you"
            render={props => <Welcome {...props} totalExpense={totalExpense} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
