import {LitElement, html} from "../../node_modules/vodomg-litelement/@polymer/lit-element/lit-element.js";
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
        return html`
			<vo-buildversie versie=${this._versie ? this._versie : ''} tijdstip=${this._tijdstip ? this._tijdstip : ''}></vo-buildversie>
		`;
    }

    updated(changedProperties) {
        if (changedProperties.has('url')) {
            this._computeBuildinfo();
        }
    }

    /**
     * Zet de build `_versie` en build `_tijdstip` attributen op undefined.
     */
    _clearInfo() {
        this._setInfo(undefined, undefined);
    }

    /**
     * Zet de build `_versie` en build `_tijdstip` attributen.
     */
    _setInfo(versie, tijdstip) {
        this._versie = versie;
        this._tijdstip = tijdstip;
    }

    /**
     * Haalt de build informatie op.
     */
    static async _fetchInfo(url) {
        if (url) {
            var response = await fetch(url);
            if (response && response.json) {
                var json = await response.json();
                return {
                    versie: json.build.version,
                    tijdstip: json.build.time
                };
            }
        }
    }

    /**
     * Haalt de build informatie op en zet de build `_versie` en build `_tijdstip` attributen.
     */
    async _computeBuildinfo() {
        const info = await VoBuildinfo._fetchInfo(this.url);

        if (info) {
            this._setInfo(info.versie, info.tijdstip);
        } else {
            this._clearInfo();
        }
    }
}

customElements.define('vo-buildinfo', VoBuildinfo);
