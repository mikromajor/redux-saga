import React from "react";

export class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentWillMount() {
    //
    this.interval = setInterval(() => {
      this.setState((prevState, props) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  render() {
    return <div> life cycle: {this.state.counter}</div>;
  }
  componentDidMount() {
    //first time render success
    console.log("componentDidMount,  send ASINC");
  }

  componentWillUnmount() {
    //end of life
    clearInterval(this.interval);
    console.log("componentWillUnmount, clearInterval");
  }

  //main loop methods:

  shouldComponentUpdate(nextProps, nextState) {
    //every time when props or state changed
    console.log(
      "shouldComponentUpdate",
      nextProps,
      nextState
    );
    return Math.random() > 0.7; //here we decide, is this update so major to re-render, or no
  }

  componentWillUpdate(nextProps, nextState) {
    //before every render (except first)
    console.log(
      "componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate(prevProps, prevState) {
    //after render
    console.log("componentDidUpdate", prevProps, prevState);
  }

  componentWillReceiveProps(nextProps) {
    //when we receive new props
    console.log("componentWillReceiveProps", nextProps);
  }
}
