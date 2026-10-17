/* Exact approved Johnny UI close SVG from Pythonidaer/typography-learning dist/icons.js,
   GitHub blob 0a8d4892664146984880f7493d8c9f51bef2d648.
   Original saved geometry: Pythonidaer/design-lab johnny-icons.js. */
'use strict';
const CourierIcons=Object.freeze({close:'<svg class="dl-ui-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="currentColor" aria-hidden="true" focusable="false"><g transform="rotate(45 16 16)"><path d="M5,14.666666666666666L27,14.666666666666666L27,17.333333333333332L5,17.333333333333332Z"/><path d="M14.666666666666666,5L17.333333333333332,5L17.333333333333332,27L14.666666666666666,27Z"/></g></svg>'});
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=CourierIcons[el.dataset.icon]||''});
