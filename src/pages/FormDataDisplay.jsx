import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // Recupere as informações do seu estado criado no Redux
    const {
      dataPersonal: {
        name,
        email,
        cpf,
        address,
        city,
        uf,
      },
      dataProfessional: {
        curriculum,
        job,
        description,
      },
    } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  dataPersonal: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.number.isRequired,
    uf: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  dataProfessional: PropTypes.shape({
    description: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    curriculum: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  dataPersonal: state.myReducer.statePersonal,
  dataProfessional: state.myReducer.stateProfessional,
});

export default connect(mapStateToProps, null)(FormDataDisplay);
