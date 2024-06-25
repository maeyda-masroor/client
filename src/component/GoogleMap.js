import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 24.945767901224855 ,
      lng: 67.04929199423611
    },
    zoom: 23
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={24.945767901224855}
          lng={ 67.04929199423611}
          text="Noor Education And Health care Foundation"
        />
      </GoogleMapReact>
    </div>
  );
}