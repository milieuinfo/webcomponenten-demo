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
		const style = "" +
			"@font-face {" +
				"font-family: 'Flanders Art';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 300;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Light.eot');" +
				"src: local('☺'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Light.eot?#iefix') format('embedded-opentype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Light.woff') format('woff'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Light.ttf') format('truetype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Light.svg#222d09d62eecf7d55dbbce60a3976b34') format('svg');" +
			"}" +
			"" +
			"@font-face {" +
				"font-family: 'Flanders Art';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 400;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Regular.eot');" +
				"src: local('☺'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Regular.eot?#iefix') format('embedded-opentype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Regular.woff') format('woff'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Regular.ttf') format('truetype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Regular.svg#a781d42e8795b6c33f49152946c2a117') format('svg');" +
			"}" +
			"" +
			"@font-face {" +
				"font-family: 'Flanders Art';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 500;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Medium.eot');" +
				"src: local('☺'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Medium.eot?#iefix') format('embedded-opentype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Medium.woff') format('woff'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Medium.ttf') format('truetype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Medium.svg#a00e3e9aae2b74f48ebe54da93879a7b') format('svg');" +
			"}" +
			"" +
			"@font-face {" +
				"font-family: 'Flanders Art';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 700;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Bold.eot');" +
				"src: local('☺'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Bold.eot?#iefix') format('embedded-opentype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Bold.woff') format('woff'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Bold.ttf') format('truetype'), url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSans-Bold.svg#ccf2aa22c7445e01b2080bbe048caaae') format('svg');" +
			"}" +
			"" +
			"@font-face {" +
				"font-family: 'Flanders Art Serif';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 300;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSerif-Light.otf');" +
			"}" +
			"" +
			"@font-face {" +
				"font-family: 'Flanders Art Serif';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 400;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSerif-Regular.otf');" +
			"}" +
			"" +
			"" +
			"@font-face {" +
				"font-family: 'Flanders Art Serif';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 500;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSerif-Medium.otf');" +
			"}" +
			"" +
			"@font-face {" +
				"font-family: 'Flanders Art Serif';" +
				"font-display: swap;" +
				"font-style: normal;" +
				"font-weight: 700;" +
				"src: url('https://cdn.milieuinfo.be/vo-font/LATEST/fonts/flandersart/FlandersArtSerif-Bold.otf');" +
			"}" +
			"" +
			".vo-font, .vo-font-sans {" +
				"font-family: Flanders Art, Calibri, sans-serif;" +
			"}" +
			"" +
			".vo-font-serif {" +
				"font-family: Flanders Art Serif, Georgia, serif;" +
			"}"
		;
	
		const styleElement = document.createElement('style');
		styleElement.innerText = style;
		document.head.appendChild(styleElement);
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
}

customElements.define('vo-font', VoFont);
