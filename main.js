import { VApp } from "vuetify/lib";
console.log(VApp);

import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="v-application theme--light">I should have a blue background as my CSS overridden</v-application>
`
