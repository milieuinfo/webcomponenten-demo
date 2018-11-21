import { LitElement, html } from "./node_modules/vodomg-litelement/@polymer/lit-element/lit-element.js";
import "./node_modules/vo-header/vo-header.js";
import "./node_modules/vo-footer/vo-footer.js";
import "./node_modules/vo-font/vo-font.js";

/**
 * `vo-template`
 * De standaard template voor websites en applicaties van de Vlaamse overheid
 *
 * ### Styling
 * 
 * De volgende properties en mixins zijn beschikbaar voor stijl:
 * 
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--vo-template-content-style` | de content mixin | `{}`
 * `--vo-template-content-inner-style` | de content element mixin | `{}`
 * `--vo-template-footer-style` | de footer mixin | `{}`
 *
 * @customElement
 * @polymer
 * @demo demo/vo-template.html
 */
class VoTemplate extends LitElement {
	render() {
		return html`
			<style>
				:host {
					padding: 0;
					margin: 0;
					height: 100vh;
					font-family: Flanders Art;
					display: -ms-flexbox;
			        display: -webkit-flex;
			        display: flex;
					-ms-flex-direction: column;
			        -webkit-flex-direction: column;
			        flex-direction: column;
				}
				
				@media print {
					:host(.print-content-only) > vo-header {
						display: none;
					}
					:host(.print-content-only) > vo-footer {
						display: none;
					}
				}
	
				#content {
					flex-shrink: 0;
					flex-grow: 1;
					height: max-content;
				}
		
				#content > div {
					max-width: 1040px;
					margin: auto;
					min-height: 100%;
					background: white;
					box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2) !important;
				}
				
				vo-footer {
					@apply --vo-template-footer-style;
				}
			</style>
			
			<vo-font></vo-font>
			<vo-header></vo-header>
	
		    <div id="content">
				<div>
					<slot></slot>
				</div>
			</div>
		
			<vo-footer>
				<slot name="footer"></slot>
			</vo-footer>
		`;
	}
}

customElements.define('vo-template', VoTemplate);
