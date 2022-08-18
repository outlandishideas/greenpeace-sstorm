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
        <ion-text>
          <p><strong>This Wednesday</strong>, Thames Water is forecast to spill 12 million litres of sewage into the <strong>River Avon</strong>.</p>
          <p>The company's sewage treatment plants don't have enough capacity, so they overflow into rivers and the ocean.</p>
          <p>This negligence comes down to greed and profiteering on behalf of their shareholders.</p>
          <p>Help us expose them and protect our rivers and seas.</p>
        </ion-text>

        <capacitor-google-map id="map"></capacitor-google-map>
          
        <ion-button expand router-link="/pressure/Thames Water">Pressure Thame Water to do something</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

import { GoogleMap } from '@capacitor/google-maps';
  
export default defineComponent({
  name: 'SpillForecastPage',
  components: {
    IonButton,
    IonContent,
    IonHeader,
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
  margin: 1rem auto;
  display: inline-block;
  width: 275px;
  height: 400px;
}

#container {
  text-align: center;
  display: flex;
  flex-direction: column;
  
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
