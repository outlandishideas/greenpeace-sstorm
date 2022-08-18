<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>You've registered</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">You've registered</ion-title>
        </ion-toolbar>
      </ion-header>

      <h3>Phew</h3>
      <ion-text wrap>
        <p>There are no sewage spills happening near you in the next 7 days. Spills tend to happen less in dry weather.</p>
        <p>But your nearest sewage works, Slingsby Pumping Station, has spilled 243 times in the past year.</p>
        <p>We'll send an alert to your mobile number before the next spill.</p>
      </ion-text>
    
      <div id="container" @click="goToSimulatedSms()">
        <!-- <p>We'll let you know about adverse weather events likely to cause spills.</p> -->
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegisteredConfirmationPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  methods: {
    goToSimulatedSms() {
      this.$router.push({ path: 'simulate-sms' });
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
