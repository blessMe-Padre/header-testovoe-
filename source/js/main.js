/* eslint-disable */
import { postRequest } from './modules/postRequest';
import { initPopup } from './modules/initPopup';

window.addEventListener('DOMContentLoaded', () => {
  // Modules
  postRequest();
  initPopup();

  // ---------------------------------
  window.addEventListener('load', () => { });
});
