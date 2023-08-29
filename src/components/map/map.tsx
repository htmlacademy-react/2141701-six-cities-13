import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/use-map';
import {Offer} from '../../types/offer';
import{URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../constants';
import { City } from '../../types/city';

type MapProps = {
  mapClassName: string;
  currentOffers: Offer[];
  selectedPoint: Offer | undefined;
  currentCity: City;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [35, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [35, 39],
  iconAnchor: [13.5, 39]
});

function Map(props: MapProps): JSX.Element {
  const {mapClassName, currentOffers, selectedPoint, currentCity} = props;

  const points = currentOffers.map(({id, location}) => ({id, location}));

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
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
