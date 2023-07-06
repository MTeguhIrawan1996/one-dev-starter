import { Box, Container } from '@mantine/core';
import type { GeoJSONSource } from 'mapbox-gl';
import maplibregl from 'maplibre-gl';
import * as React from 'react';
import type { MapRef } from 'react-map-gl';
import Map, {
  Layer,
  NavigationControl,
  ScaleControl,
  Source,
} from 'react-map-gl';

import {
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from './layers';

const MapContent = () => {
  // const [viewport, setViewport] = React.useState({
  //   longitude: 2.294694,
  //   latitude: 48.858093,
  //   zoom: 1,
  // });

  const mapRef = React.useRef<MapRef>(null);

  const onClick = (event) => {
    const feature = event.features[0];
    if (!feature) {
      return;
    }
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current?.getSource(
      'earthquakes'
    ) as GeoJSONSource;

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      mapRef.current?.easeTo({
        center: feature?.geometry.coordinates,
        zoom: zoom as number,
        duration: 500,
      });
    });
  };

  return (
    <Box bg="blue" w="100%" px="md" className="innerYPaddings" h="100vh">
      <Container size="xl" bg="yellow" className="paddings" h="100%">
        <Map
          initialViewState={{
            latitude: 40.67,
            longitude: -103.59,
            zoom: 2,
          }}
          style={{ width: '100%', height: '100%' }}
          maxZoom={17}
          minZoom={1}
          cursor="auto"
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
          mapLib={maplibregl}
          interactiveLayerIds={[clusterLayer.id as string]}
          onClick={onClick}
          ref={mapRef}
        >
          <ScaleControl />
          <NavigationControl
            position="bottom-left"
            showCompass={false}
            style={{ borderRadius: '8px' }}
          />
          <Source
            id="earthquakes"
            type="geojson"
            data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
            cluster={true}
            clusterMaxZoom={14}
            clusterRadius={50}
          >
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
          </Source>
          <Box h={120} w={120} bg="red" pos="absolute"></Box>
        </Map>
      </Container>
    </Box>
  );
};

export default MapContent;
