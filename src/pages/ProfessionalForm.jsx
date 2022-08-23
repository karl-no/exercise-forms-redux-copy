import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import professionalAction from '../Redux/store/actions/ProfessionalAction';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  dispatchData = () => {
    const { curriculum, job, description } = this.state;
    const { changeProfessional, history } = this.props;
    changeProfessional({ curriculum, job, description });
    history.push('/formdisplay');
  };

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          label="enviar"
          onClick={ this.dispatchData }
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  professional: state.myReducer.stateProfessional,
});

const mapDispatchToProps = (dispatch) => ({
  changeProfessional: (state) => {
    dispatch(professionalAction(state));
  },
});

ProfessionalForm.propTypes = {
  changeProfessional: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalForm);
