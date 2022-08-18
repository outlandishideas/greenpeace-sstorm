<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>[Messages]</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container" @click="goToForecast()">
        <img src="/assets/sms.png">
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SMSReceivedPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  methods: {
    goToForecast() {
      this.$router.push({ path: 'forecast' });
    },
  }
});
</script>

<style scoped>
#container {
  cursor: pointer; /* The whole container is a link here. */
  height: 100%;
  vertical-align: middle;
  display: flex;

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
  
  flex-grow: 1;  
  margin: 40% 0;
}

#container a {
  text-decoration: none;
}
</style>
