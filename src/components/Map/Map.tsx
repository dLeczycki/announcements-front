
import { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../utils/fix-map-icon';
import {SimpleAnnouncementEntity} from 'types';

import { SearchContext } from '../../contexts/search.context';

import 'leaflet/dist/leaflet.css';
import './Map.css';
import { SingleAnnouncement } from './SingleAnnouncement';

export const Map = () => {
  const {search} = useContext(SearchContext);
  const [announcements, setAnnouncements] = useState<SimpleAnnouncementEntity[]>([]);

  useEffect(() => {

    (async () => {
      const res = await fetch(`http://localhost:3001/announcement/search/${search}`);
      const announcements = await res.json();
      setAnnouncements(announcements);
    })();

  }, [search]);
  
  return (
    <div className="Map">
        <MapContainer center={[51.9668421,20.1501398]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {
            announcements.map(announcement => (
              <Marker key={announcement.id} position={[announcement.lat,announcement.lon]}>
                <Popup>
                  <SingleAnnouncement id={announcement.id}/>
                </Popup>
              </Marker>
            ))
          }          
        </MapContainer>
    </div>
  )
}