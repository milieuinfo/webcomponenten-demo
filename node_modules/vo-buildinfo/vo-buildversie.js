import { LitElement, html } from "../../node_modules/vodomg-litelement/@polymer/lit-element/lit-element.js";

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
			/**
			 * Versie van de applicatie.
			 */
			versie: String,
			/**
			 * Tijdstip waarom de applicatie versie gemaakt werd.
			 */
			tijdstip: String
		};
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
					text-align: right;
				}
			
				label {
					font-weight: bold;
				}
			</style>
		
			${this._versieTemplate}
			${this._tijdstipTemplate}
		`;
	}
	
	/**
	 * Genereert en geeft de versie template.
	 * 
	 * @return {TemplateResult}
	 */
	get _versieTemplate() {
		if (this.versie) {
			return html`
				<div id="versie_container">
					<label id="versie_label">Versie: </label>
					<span id="versie">${this.versie}</span>
				</div>
			`;
		}
	}
	
	/**
	 * Genereert en geeft de tijdstip template.
	 * 
	 * @return {TemplateResult}
	 */
	get _tijdstipTemplate() {
		if (this.tijdstip) {
			return html`
				<div id="tijdstip_container">
					<label id="tijdstip_label">Tijdstip: </label>
					<span id="tijdstip">${this.tijdstip}</span>
				</div>
			`;
		}
	}
}

customElements.define('vo-buildversie', VoBuildversie);
