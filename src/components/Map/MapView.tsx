import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Attraction } from '../../types';
import { Link } from 'react-router-dom';

interface MapViewProps {
  attractions: Attraction[];
  center?: [number, number];
  zoom?: number;
  height?: string;
}

const MapView: React.FC<MapViewProps> = ({ 
  attractions, 
  center = [20, 0], 
  zoom = 2,
  height = '600px'
}) => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    // This is needed because Leaflet's CSS needs to be loaded before rendering the map
    setMapReady(true);
  }, []);

  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  if (!mapReady) {
    return <div style={{ height }} className="bg-gray-100 flex items-center justify-center">Loading map...</div>;
  }

  return (
    <div style={{ height }} className="rounded-lg overflow-hidden shadow-md">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {attractions.map((attraction) => (
          <Marker 
            key={attraction.id}
            position={[attraction.location.lat, attraction.location.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-semibold text-lg">{attraction.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{attraction.location.city}, {attraction.location.country}</p>
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-24 object-cover rounded mb-2"
                />
                <Link 
                  to={`/attraction/${attraction.id}`}
                  className="bg-teal-600 text-white text-sm py-1 px-3 rounded hover:bg-teal-700 inline-block"
                >
                  View Details
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;