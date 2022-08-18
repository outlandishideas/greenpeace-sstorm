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
        <h3>About {{ $route.params.company }}</h3>
        <img src="/assets/Sarah.png">
        <ul>
          <li>CEO: Sarah Bentley</li>
          <li>Salary: £750,000 p/a</li>
          <li>Bonus: 120% of salary</li>
        </ul>

        <p>The company's sewage treatment plants don't have enough capacity, so they overflow into rivers and the ocean.</p>

        <p>This negligence comes down to greed and profiteering on behalf of their shareholders.</p>

        <p>Help us expose them and protect our rivers and seas.</p>

        <p>
          <ion-button expand href="https://twitter.com" target="_blank">Share now</ion-button>
        </p>
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
