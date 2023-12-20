import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const MapComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
              <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
              <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
            </head>
            <body>
              <div id="map" style="height: 100vh;"></div>
              <script>
                var map = L.map('map').setView([28.7917, -9.0926], 5);
                // Utilisation de la couche d'ESRI ArcGIS comme fond de carte
                var arcGISLayer = L.tileLayer('https:
                //server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                  maxZoom: 19,
                }).addTo(map);
                var googleMaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
                 attribution: 'Map data ©2022 Google, GeoBasis-DE/BKG (©2009)',
                subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
                });
                var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
                 });

                  var baseMaps = {
                 "OSM": OSM,
                 "Google Maps": googleMaps,
                 "Arc GIS": arcGIS
                 };

                 L.control.layers(baseMaps).addTo(map);
                var wmsLayer = L.tileLayer.wms('http://localhost:8085/geoserver/EHTP/wms?service=WMS', {
                  'layers': 'communes', // Remplacez par le nom de votre couche GeoServer
                  'format': 'image/png',
                  'transparent': true,
                }).addTo(map);
              </script>
            </body>
            </html>
          `,
        }}
        javaScriptEnabled={true}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
