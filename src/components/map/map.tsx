import {useRef, useEffect, useState} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/use-map';
import {City} from '../../types/city';
import {Point, Offer} from '../../types/offer';
import{URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../constants';

type MapProps = {
  city: City;
  offers: Offer[];
  mapClassName: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, mapClassName} = props;

   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );

  const points = offers.map(({id, coordinates}) => ({id, coordinates}));


  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.coordinates.latitude,
          lng: point.coordinates.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return <section className={`${mapClassName} map`} ref={mapRef}></section>;
}

export default Map;
