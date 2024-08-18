export const resultHit = (hit, { html, sendEvent }) => html`<div>
  <div class="result-hit__image-container">
    <img class="result-hit__image" src="${hit.image}" />
  </div>
  <div class="result-hit__details">
    <h3 class="result-hit__name">${hit.name}</h3>
    <p class="result-hit__price">$${hit.price}</p>
  </div>
  <div>
    <button
      id="view-item"
      class="result-hit__view"
      onclick="${() => sendEvent('click', hit, 'my-click-event')}"
    >
      View
    </button>
    <button
      id="add-to-cart"
      class="result-hit__cart"
      onclick="${() => sendEvent('conversion', hit, 'my-conversion-event')}"
    >
      Add To Cart
    </button>
  </div>
</div>`;
