// src/components/Localizacao.js
import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "../styles/mapa.css";


const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};


const Localizacao = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserLocation()
      .then((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
      })
      .catch((err) => {
        setError("Não foi possível obter a localização.");
        console.error(err);
      });
  }, []);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="map">
      <h2>Localização</h2>
      {error && <p>{error}</p>}
      {location ? (
        <LoadScript googleMapsApiKey="AIzaSyBqAtsEieJoy77YNO7J6BHGDON4JLZHCqo">
          <GoogleMap
            mapContainerStyle={{width: '100%', height: '100%'}}
            center={{
                lat: -22.918441756282082,  
                lng: -42.932050255279265,
            }}
            zoom={15}
          >
            <Marker position={{
                lat: -22.918441756282082, 
                lng: -42.932050255279265,
            }}
            options={{
                label: {
                    text: "INAC",
                    className: "map-marker",
                }
            }
            } />
          </GoogleMap>
        </LoadScript>
      ) : (
        <p>Carregando mapa...</p>
      )}
    </div>
  );
};

export default Localizacao;
