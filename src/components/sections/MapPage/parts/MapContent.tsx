import { Icon } from '@iconify/react';
import { Box, Container } from '@mantine/core';
import maplibregl from 'maplibre-gl';
import * as React from 'react';
import Map, {
  AttributionControl,
  FullscreenControl,
  Marker,
  NavigationControl,
  Popup,
  ScaleControl,
} from 'react-map-gl';

const MapContent = () => {
  const [showPopup, setShowPopup] = React.useState(true);
  const [viewport, setViewport] = React.useState({
    longitude: 2.294694,
    latitude: 48.858093,
    zoom: 1,
  });
  return (
    <Box bg="blue" w="100%" px="md" className="innerYPaddings">
      <Container size="xl" bg="yellow" className="paddings">
        <Map
          {...viewport}
          mapLib={maplibregl}
          style={{ width: '100%', height: '100vh' }}
          maxZoom={17}
          minZoom={1}
          mapStyle={{
            version: 8,
            sources: {
              'raster-tiles': {
                type: 'raster',
                tiles: [
                  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                ],
                tileSize: 150,
              },
            },
            layers: [
              {
                id: 'raster-tiles',
                type: 'raster',
                source: 'raster-tiles',
                minzoom: 1,
                maxzoom: 22,
              },
            ],
          }}
          onMove={(evt) => setViewport(evt.viewState)}
        >
          <Marker
            longitude={2.294694}
            latitude={48.858093}
            anchor="top"
            onClick={() => setShowPopup(true)}
          >
            <Icon
              icon="tabler:map-pin-filled"
              style={{ fontSize: '24px', color: 'red' }}
            />
          </Marker>
          {showPopup && (
            <Popup
              longitude={2.294694}
              latitude={48.858093}
              anchor="bottom"
              closeButton={true}
              closeOnClick={false}
              onClose={() => setShowPopup(false)}
            >
              Eiffel tower
            </Popup>
          )}
          <ScaleControl />
          <NavigationControl />
          <FullscreenControl />
          <AttributionControl customAttribution="Map design by me" />
        </Map>
      </Container>
    </Box>
  );
};

export default MapContent;
