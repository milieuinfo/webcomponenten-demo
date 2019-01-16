import { LitElement, html } from "../../node_modules/vodomg-litelement/@polymer/lit-element/lit-element.js";

/**
 * `vo-font`
 * De standaard font voor websites en applicaties van de Vlaamse overheid
 *
 * @customElement
 * @polymer
 * @demo demo/vo-font.html
 */
class VoFont extends LitElement {
	constructor() {
		super();
		this._setVlaanderenFontStyle();
	}

	/**
	 * Rendert het element.
	 * 
	 * @return {TemplateResult}
	 */
	render() {
		return html`
			<style>
				:host {
					font-family: Flanders Art;
				}
			</style>

			<slot></slot>
		`;
	}

	_setVlaanderenFontStyle() {
		const script = document.createElement('script');
        script.setAttribute('src', 'https://cdn.milieuinfo.be/vlaanderen-font/LATEST/vlaanderen-font.js');
		document.head.appendChild(script);
	}
}

customElements.define('vo-font', VoFont);
