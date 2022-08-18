<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Register</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <form>
          <ion-list>
            <ion-item>
              <ion-label for="mobile">Mobile number</ion-label>
              <ion-input
                id="mobile"
                autocomplete="tel"
                color="medium"
                inputmode="tel"
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label for="postcode">Postcode</ion-label>
              <ion-input
                id="postcode"
                autocomplete="postal-code"
                color="medium"
                inputmode="text"
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-button router-link="/registered">Register</ion-button>
            </ion-item>
          </ion-list>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegisterPage',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
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
