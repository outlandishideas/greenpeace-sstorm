<!-- Presents data about responsible targets and a way to contact them. -->
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Pressure {{ $route.params.company }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Pressure {{ $route.params.company }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <ul>
          <li>CEO: Bob bobson</li>
          <li>Dividends: £200,000</li>
          <li>Executive pay: £1,100,000</li>
        </ul>

        <p>Lorem ipum some info on responsibility?</p>

        <p><a href="https://twitter.com" target="_blank">Share with MP</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PressurePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>
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
