import React from "react";
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import {Button} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';


/**
 * Merupakan laman form login
 */

const TransferForm = props => {
    const [smShow, setSmShow] = React.useState(false);
  
    return (
      <React.Fragment>
        <form onSubmit={props.onTrf}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="input-sender_acc">
                Sender Acc No.
              </span>
            </div>
            <input
              type="text"
              name = "sender_acc"
              className="form-control"
              disabled="true"
              value={props.senderNo}
              aria-label="Default"
              aria-describedby="input-sender_acc"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="input-receiver_name">
                Receiver Acc No.
              </span>
            </div>
            <input
              type="text"
              name = "receiver_acc"
              className="form-control"
              placeholder="Receiver Account/Virtual Number.."
              aria-label="Default"
              aria-describedby="input-receiver_name"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="input-trf_amount">
                Amount
              </span>
            </div>
            <input
              type="text"
              name = "trf_amount"
              className="form-control"
              placeholder=""
              aria-label="Default"
              aria-describedby="input-trf_amount"
            />
          </div>
          <div className="button-container">
            <button 
              className="trf-btn btn btn-outline-secondary btn-lg"
              type="submit"
              onClick={() => setSmShow(true)}
            >
              Confirm
            </button>
          </div>
        </form>

        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Transfer Status
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.trfst}</Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }


export default TransferForm;
