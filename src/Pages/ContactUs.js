import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Container from '@material-ui/core/Container';
import './style.css';

const AnyReactComponent = ({ text }) => (<div style={{
  color: 'white',
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}
</div>
);
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.30,
      lng: -0.51
    },
    zoom: 11
  };

  render() {
    return (
      <Container maxWidth="md" >

        <div className="notmainContainer">
          <div className="addressAi4">
            <h3>Email</h3>

            <a href="mailto:info@ai4process.com">info@ai4process.com</a>
            <br></br>
            <br></br>
            <h3>Address</h3>

            <h5>68 Lombard St, London, EC3V 9LJ, UK</h5>
            <br></br>
          </div>
          <div className="googleMaps" >
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={51.3045648}
                lng={-0.5139848}
                text="AI4 Process Ltd"
              />
            </GoogleMapReact>
          </div>
        </div>
      </Container>
    );
  }
}

export default SimpleMap;