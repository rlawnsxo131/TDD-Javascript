import React, { Component } from 'react';
import Counter from '../components/Counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as counterActions from '../store/modules/counter';

class CounterContainer extends Component {
  onIncrease = () => {
    const { CounterActions } = this.props;
    CounterActions.increase();
    
  }
  onDecrease = () => {
    const { CounterActions } = this.props;
    CounterActions.decrease();
  }
  render() {
    const { number } = this.props;
    const { onIncrease, onDecrease } = this;
    return (
      <Counter
        value={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    );
  }
}

export default connect(
  (state) => ({
    number: state.counter.number
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(CounterContainer);