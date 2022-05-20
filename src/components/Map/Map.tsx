
import { useContext, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../utils/fix-map-icon';

import { SearchContext } from 'src/contexts/search.context';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
  const {search} = useContext(SearchContext);

  useEffect(() => {
    console.log('Make request for search');
  }, [search]);
  
  return (
    <div className="Map">
        <MapContainer center={[51.9668421,20.1501398]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={[51.9668421,20.1501398]}>
            <Popup>
              <h2>Skierniewice Railway Station</h2>
              <p>Place never to forget.. </p>
            </Popup>
          </Marker>
        </MapContainer>
    </div>
  )
}