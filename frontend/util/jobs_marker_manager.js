export default class JobsMarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(jobs) {
    const jobsObj = {};
    if (jobs.job_requests){
    jobs.job_requests.forEach(job => jobsObj[job.id] = job);

    jobs.job_requests
      .filter(job => !this.markers[job.id])
      .forEach(newJob => this.createMarkerFromBench(newJob, this.handleClick));

    Object.keys(this.markers)
      .filter(jobId => !jobsObj[jobId])
      .forEach((jobId) => this.removeMarker(this.markers[jobId]));
    }
  }

  createMarkerFromBench(job) {
    const position = new google.maps.LatLng(job.latitude, job.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      jobId: job.id
    });

    marker.addListener('click', () => this.handleClick(job));
    this.markers[marker.jobId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.jobId].setMap(null);
    delete this.markers[marker.jobId];
  }
}
