import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NamesForm from '../components/NameForm';
import NameList from '../components/NameList';
import * as namesActions from '../store/modules/names';

class NamesContainer extends Component {
  onChange = (e) => {
    const { NamesActions } = this.props;
    NamesActions.changeInput(e.target.value); 
  }
  onSubmit = (e) => {
    const { NamesActions, input } = this.props;
    NamesActions.insert(input);
    NamesActions.changeInput('');
    e.preventDefault();
  }
  
  render() {
    const { onChange, onSubmit } = this;
    const { names, input } = this.props;
    return (
      <Fragment>
        <NamesForm value={input} onChange={onChange} onSubmit={onSubmit} />
        <NameList names={names} />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    names: state.names.names,
    input: state.names.input
  }),
  (dispatch) => ({
    NamesActions: bindActionCreators(namesActions, dispatch)
  })
)(NamesContainer);
