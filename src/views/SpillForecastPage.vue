<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Forecast</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Forecast</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-list>
          <ion-item>
            <p>Your postcode: <strong>N1 1AA</strong>.</p>
          </ion-item>
          <ion-item>
            <p>Sewage spill likely <strong>this Saturday</strong>.</p>
            <capacitor-google-map id="map"></capacitor-google-map>
          </ion-item>
          <ion-item>
            <ion-button router-link="/pressure/Thames Water">Pressure Thame Water to do something</ion-button>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

import { GoogleMap } from '@capacitor/google-maps';
  
export default defineComponent({
  name: 'SpillForecastPage',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
  },
  methods: {
    createMap: async () => {
      const mapRef = document.getElementById('map');

      await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef as HTMLElement, // reference to the capacitor-google-map element
        apiKey: process.env.VUE_APP_GOOGLE_MAPS_API_KEY, // Your Google Maps API Key
        config: {
          center: {
            // The initial position to be rendered by the map
            lat: 33.6,
            lng: -117.9,
          },
          zoom: 8, // The initial zoom level to be rendered by the map
        },
      });
    },
  },
  mounted() {
    this.createMap();
  },
});
</script>

<style scoped>
capacitor-google-map {
  display: inline-block;
  width: 275px;
  height: 400px;
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
