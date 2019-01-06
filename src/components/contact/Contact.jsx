import React from 'react';
import GoogleMapReact from 'google-map-react';

import './Contact.css'

const mapData = {
  center: {
    lat: 28.6606259,
    lng: 77.2974501
  },
  zoom: 11,
  delhi: {
    lat: 28.6518138,
    lng: 77.2294721
  },
  sahibabad: {
    lat: 28.678622,
    lng: 77.363745
  }
}

const renderMarkers = (map, maps) => {
  let marker1 = new maps.Marker(
    {
      position: mapData.delhi,
      map,
      title: 'Paras Prakashan Head office'
    }
  );
  let marker2 = new maps.Marker(
    {
      position: mapData.sahibabad,
      map,
      title: 'Paras Prakashan (Sahibabad)'
    }
  );
}

const Contact = (props) => {

  return (
    <div className="Contact mt-5" id="contact">
      <div className="container">
        <div className="card border-dark">
          <div className="card-header bg-dark text-white">
            Contact Information
          </div>
          <div className="card-body">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td>E-Mail</td>
                  <td>parasprakashan@yahoo.com</td>
                </tr>
                <tr>
                  <td>Call us at</td>
                  <td>+91 91360 77240</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>
                    <div>2631/5, Shri Ram Market, Nai Sarak, Delhi - 110006<br /></div>
                    <div>B-25, Shyampark Extension, Sahibabad - 201005 (Delhi-NCR)</div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="map-area mt-5">
              <h4 className="display-5">Map</h4>
              <div className="map mt-3">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyDZSRAOOelQpIyH39Kob7xsG8bWxwMa_SQ' }}
                  defaultCenter={mapData.center}
                  defaultZoom={mapData.zoom}
                  onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                >
                </GoogleMapReact>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;