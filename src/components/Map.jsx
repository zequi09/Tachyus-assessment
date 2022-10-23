import React, { useMemo, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { InfoBox } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const options = { closeBoxURL: "", enableEventPropagation: true };

const Map = ({ data }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBeD1o-BMpvK_SpBfqHhdcEMttjSPRFiZM",
  });

  const [selectedLocation, setSelectedLocation] = useState({});

  const center = useMemo(() => ({ lat: data[0].lat, lng: data[0].long }), []);

  const handleMouseOver = (wellName) => {
    let currentLocation = data.find((item) => item.wellName === wellName);
    setSelectedLocation(currentLocation);
  };

  return (
    <>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {data &&
            data.map((item) => (
              <>
                <Marker
                  key={item.wellName}
                  position={{ lat: item.lat, lng: item.long }}
                  icon={
                    item.Type === "Producer"
                      ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                      : "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                  }
                  onMouseOver={() => handleMouseOver(item.wellName)}
                />
                <InfoBox
                  position={{
                    lat: selectedLocation.lat,
                    lng: selectedLocation.long,
                  }}
                  options={options}
                >
                  <div
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#ade8f4",
                      opacity: 0.7,
                      padding: 12,
                    }}
                  >
                    <div style={{ fontSize: "16px", fontColor: `#272727` }}>
                      {
                        <>
                          <small>
                            {`Well Name: ${selectedLocation.wellName}`}
                          </small>
                          <small> {`Type: ${selectedLocation.Type}`}</small>
                          <small> {`TD: ${selectedLocation.TD}`}</small>
                        </>
                      }
                    </div>
                  </div>
                </InfoBox>
              </>
            ))}
        </GoogleMap>
      )}
    </>
  );
};

export default Map;
