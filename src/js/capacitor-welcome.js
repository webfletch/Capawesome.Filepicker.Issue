import { SplashScreen } from '@capacitor/splash-screen';
import { FilePicker } from '@capawesome/capacitor-file-picker';

window.customElements.define(
  'capacitor-welcome',
  class extends HTMLElement {
    constructor() {
      super();

      SplashScreen.hide();

      const root = this.attachShadow({ mode: 'open' });

      root.innerHTML = `

    <div>
      <main>
      <h1>TEST File Picker</h1>
        <p>
          <button class="button" id="select-images">Select images</button>
        </p>
        <p>
          <div id="images" style="max-width: 100%">
        </p>
      </main>
    </div>
    `;
    }

    connectedCallback() {
      const self = this;

      self.shadowRoot.querySelector('#select-images').addEventListener('click', async function (e) {
        try {
          const results = await FilePicker.pickImages();

          alert(`Selected ${results.files.length} images`);

        } catch (e) {
          console.warn('User cancelled', e);
        }
      });
    }
  }
);

