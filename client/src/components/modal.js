import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import Maps from './googlemaps';

const ModalComponent = props => {
  return (
    <Modal
      isOpen={props.showModal}
    >
      <Maps />
    </Modal>
  )
}

const mapStateToProps = state => {
  return {
    showModal: state.modalReducer.openModal
  }
}

export default connect(() => mapStateToProps, {})(ModalComponent);
