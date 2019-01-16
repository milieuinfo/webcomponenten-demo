import { LitElement, html } from "../../node_modules/vodomg-litelement/@polymer/lit-element/lit-element.js";
import '../../node_modules/vo-merklogo/vo-merklogo.js';

/**
 * `vo-footer`
 * De standaard footer voor websites en applicaties van de Vlaamse overheid
 *
 * ### Styling
 * 
 * De volgende properties en mixins zijn beschikbaar voor stijl:
 * 
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--vo-footer-background` | de footer achtergrondkleur | `none`
 * `--vo-footer-color` | de tekst kleur | `rgb(184, 184, 184)`
 * `--vo-footer-a-color` | de link tekst kleur | `rgb(184, 184, 184)`
 * `--vo-footer-a-hover-color` | de link zweef tekst kleur | `white`
 *
 * @customElement
 * @polymer
 * @demo demo/vo-footer.html
 */
class VoFooter extends LitElement {
	/**
	 * Rendert het element.
	 * 
	 * @return {TemplateResult}
	 */
	render() {
		return html`
			<style>
				:host {
					background: rgb(51, 51, 51);
					color: var(--vo-footer-color, rgb(184, 184, 184));
					font-size: 14px;
				}
		
				#wrapper {
					background: var(--vo-footer-background, none);
					max-width: 1040px;
					width: 100%;
					margin: auto;
				}
		
				vo-merklogo {
					margin-right: 5px;
				}
		
				a,
				a:active,
				a:link,
				a:visited {
					color: var(--vo-footer-a-color, rgb(184, 184, 184));
					text-decoration: none;
				}
		
				a:hover {
					color: var(--vo-footer-a-hover-color, white);
				}
		
				.spacer {
					-ms-flex: 10;
	        		-webkit-flex: 10;
	        		flex: 10;
				}
		
				#wrapper {
					display: -ms-flexbox;
			        display: -webkit-flex;
			        display: flex;
					-ms-flex-direction: column;
			        -webkit-flex-direction: column;
			        flex-direction: column;
					align-items: stretch;
				}
		
				#top-row {
					display: -ms-flexbox;
			        display: -webkit-flex;
			        display: flex;
					-ms-flex-direction: row;
			        -webkit-flex-direction: row;
			        flex-direction: row;
					margin: 20px 0;
				}
		
				#bottom-row {
					display: -ms-flexbox;
			        display: -webkit-flex;
			        display: flex;
					-ms-flex-direction: row;
			        -webkit-flex-direction: row;
			        flex-direction: row;
					-ms-flex-align: center;
			        -webkit-align-items: center;
			        align-items: center;
			        -ms-flex-pack: justify;
			        -webkit-justify-content: space-between;
			        justify-content: space-between;
					border-top: solid 1px #444;
					padding: 3px 10px;
					min-height: 36px;
				}
		
				#credits {
					display: -ms-flexbox;
			        display: -webkit-flex;
			        display: flex;
					-ms-flex-direction: column;
			        -webkit-flex-direction: column;
			        flex-direction: column;
					-ms-flex-align: start;
			        -webkit-align-items: flex-start;
			        align-items: flex-start;
				}
		
				#vo-footer-content {
					margin-left: auto;
				}
		
				#credits-vo {
					font-size: 140%;
				}
		
				#credits-departement {
					font-weight: 100;
				}
		
				#credits-departement a {
					text-decoration: underline;
				}
			</style>
			
	 		<div id='wrapper'>	
	 			<div id='top-row'>
	 				<vo-merklogo></vo-merklogo>
					<div id='credits'>
						<span id='credits-vo'>Dit is een offici&euml;le website van de Vlaamse overheid</span>
						<span id='credits-departement'>uitgegeven door
						<a id='departement' target='_blank' href='//www.omgevingvlaanderen.be'>het departement Omgeving</a></span>
					</div>
	 				<div id="vo-footer-content">
	 					<slot></slot>
	 				</div>
	 			</div>
	 			<div id='bottom-row'>
	 				<a id='disclaimer' href='//www.vlaanderen.be/nl/disclaimer' target="_blank">Disclaimer</a>
	 			<div class="spacer"></div>
	 		</div>
		`;
	}
}

customElements.define('vo-footer', VoFooter);
