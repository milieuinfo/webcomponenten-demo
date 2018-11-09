import { LitElement, html } from "../../node_modules/vodomg-litelement/@polymer/lit-element/lit-element.js";
import './vo-buildversie.js';

/**
 * `vo-buildinfo`
 * Visualiseert de build informatie van de applicatie.
 *
 * @customElement
 * @polymer
 */
class VoBuildinfo extends LitElement {
	static get properties() {
		return {
			/**
			 * URL waar de build informatie staat | `{'admin/info'}`.
			 */
			url: String,
			/**
			 * Build versie.
			 */
			_versie: String,
			/**
			 * Build tijdstip.
			 */
			_tijdstip: String
		};
	}
	
	constructor() {
		super();
		this.url = this.url || '/admin/info';
	}
	
	/**
	 * Rendert het element.
	 * 
	 * @return {TemplateResult}
	 */
	render() {
		this._computeBuildinfo();
		
		return html`
			<vo-buildversie versie=${this._versie ? this._versie : ''} tijdstip=${this._tijdstip ? this._tijdstip : ''}></vo-buildversie>
		`;
	}
	
	/**
	 * Haalt de build informatie op en zet de build `_versie` en build `_tijdstip` attributen.
	 */
	async _computeBuildinfo() {
		var response = await fetch(this.url);
		var json = await response.json();
		if (json && json.build) {
			console.log(json);
			this._versie = json.build.version;
			this._tijdstip = json.build.time;
		}
	}
}

customElements.define('vo-buildinfo', VoBuildinfo);
