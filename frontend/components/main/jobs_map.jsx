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
    // if (this.props.singleJob) {
    //   this.props.fetchJob(this.props.jobId);
    // } else {
      // this.registerListeners();
    let jobs = this.props.jobs || [];
    this.JobsMarkerManager.updateMarkers(jobs);
  }
  componentDidUpdate() {
    // if (this.props.singleJob) {
    //   const targetJobKey = Object.keys(this.props.jobs)[0];
    //   const targetJob = this.props.jobs[targetJobKey];
    //   this.MarkerManager.updateMarkers([targetJob]); //grabs only that one bench
    // } else {
      this.JobsMarkerManager.updateMarkers(this.props.jobs);
    // }
  }

  // registerListeners() {
  //   google.maps.event.addListener(this.map, 'idle', () => {
  //     const { north, south, east, west } = this.map.getBounds().toJSON();
  //     const bounds = {
  //       northEast: { lat:north, lng: east },
  //       southWest: { lat: south, lng: west } };
  //     this.props.updateFilter('bounds', bounds);
  //   });
  //   google.maps.event.addListener(this.map, 'click', (event) => {
  //     const coords = getCoordsObj(event.latLng);
  //     this.handleClick(coords);
  //   });
  // }

  handleMarkerClick(job) {
    this.setState({jobDetail: job, modalState: true});
  }

  closeModal() {
    this.setState({modalState: false});
  }

  render() {
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
            <a className ="x" onClick={this.closeModal}>x</a>
            <i className="material-icons">bubble_chart</i><h4>{this.state.jobDetail.category}</h4>
          </Modal>
      </div>
    );
  }
}

export default withRouter(JobsMap);
