import React from 'react';
import ReactDOM from 'react-dom';
import {Link, withRouter } from 'react-router-dom';
import JobsMarkerManager from '../../util/jobs_marker_manager';
import Modal from 'react-modal';

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13
};

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

class JobsMap extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modelState: false,
      jobDetail: {}
    };
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.JobsMarkerManager = new JobsMarkerManager(this.map, this.handleMarkerClick.bind(this));
    let jobs = this.props.jobs || [];
    this.JobsMarkerManager.updateMarkers(jobs);
  }
  componentDidUpdate() {
    this.JobsMarkerManager.updateMarkers(this.props.jobs);
  }

  handleMarkerClick(job) {
    this.setState({jobDetail: job, modalState: true});
  }

  closeModal() {
    this.setState({modalState: false});
  }

  render() {
    let hours;
    const customStyles = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'transparent',
    },
    content : {
      position                   : 'absolute',
      top                        : '45%',
      left                       : '35%',
      right                      : 'auto',
      bottom                     : 'auto',
      border                     : '1px solid #651601',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '10px',
      outline                    : 'none',
      padding                    : '30px',
      textalign                 :'center',
      display                     :'flex',
    }
  };
  if((this.state.jobDetail.duration / 60) > 1) {
    hours = `${this.state.jobDetail.duration / 60}hours`;
  } else if (this.state.jobDetail.duration === null) {
    hours = "N/A";
  } else {
    hours = `${this.state.jobDetail.duration}mins`;
  }
    return (
      <div>
        <h1>Map</h1>
        <div className="map" ref="map">Map</div>
          <Modal
            className="message-modal"
            isOpen={this.state.modalState}
            contentLabel="Modal"
            onRequestClose={this.closeModal}
            animationType={"fade"}
            style={customStyles}
            >
            <i className="material-icons">work</i><h4>{this.state.jobDetail.category}</h4>
            <i className="material-icons">timer</i><h4>{hours}</h4>
            <i className="material-icons">description</i><h4>{this.state.jobDetail.description}</h4>
            <a className ="x" onClick={this.closeModal}>x</a>
          </Modal>
      </div>
    );
  }
}

export default withRouter(JobsMap);
