import { LitElement, html } from "@polymer/lit-element/lit-element";

/**
 * `vo-buildversie`
 * Visualiseert de build versie en het tijdstip van de applicatie.
 *
 * @customElement
 * @polymer
 * @demo demo/vo-buildversie.html
 */
class VoBuildversie extends LitElement {
  static get properties() {
    return {
      versie: String,
      tijdstip: String
    };
  }

  render() {
    return html`
			<div id="versie">
				<label>Versie: </label>
				<span>${versie}</span>
			</div>
			
			<div id="tijdstip">
				<label>Tijdstip: </label>
				<span>${tijdstip}</span>
			</div>
		`;
  }
}

customElements.define('vo-buildversie', VoBuildversie);