import sliderIcon from './svg/slider.svg?raw';
import galleryIcon from './svg/toolbox.svg?raw';
import {make} from './ui';

/**
 * Working with Block Tunes
 */
export default class Tunes {
    /**
     * @param {object} tune - image tool Tunes managers
     * @param {object} tune.api - Editor API
     * @param {object} tune.actions - list of user defined tunes
     * @param {Function} tune.onChange - tune toggling callback
     */
    constructor({api, actions, onChange}) {
        this.api = api;
        this.actions = actions;
        this.onChange = onChange;
        this.buttons = [];
    }

    /**
     * Available Image tunes
     *
     * @returns {{name: string, icon: string, title: string}[]}
     */
    static get tunes() {
        console.log('TUNE');
        return [
            {
                name: 'gallery',
                icon: galleryIcon,
                title: 'Gallery',
            },
            {
                name: 'slider',
                icon: sliderIcon,
                title: 'Slider',
            }
        ];
    }

    /**
     * Styles
     *
     * @returns {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}
     */
    get CSS() {
        return {
            wrapper: 'image-gallery__tune-wrapper',
            buttonBase: this.api.styles.button,
            button: 'image-gallery__tune',
            buttonActive: 'active',
        };
    }

    /**
     * Makes buttons with tunes
     *
     * @param {ImageGalleryData} toolData - generate Elements of tunes
     * @returns {Element}
     */
    render(toolData) {
        const wrapper = make('div', this.CSS.wrapper);

        const tunes = this.actions ?? Tunes.tunes;

        this.buttons = [];

        tunes.forEach(tune => {
            const title = this.api.i18n.t(tune.title);
            const el = make('div', [this.CSS.buttonBase, this.CSS.button], {
                innerHTML: tune.icon,
                title,
            });

            el.addEventListener('click', () => {
                this.tuneClicked(tune.name, tune.action);
            });

            el.dataset.tune = tune.name;
            el.classList.toggle(this.CSS.buttonActive, toolData.style === tune.name);

            this.buttons.push(el);

            this.api.tooltip.onHover(el, title, {
                placement: 'top',
            });

            wrapper.appendChild(el);
        });

        return wrapper;
    }

    /**
     * Clicks to one of the tunes
     *
     * @param {string} tuneName - clicked tune name
     * @param {Function} customFunction - function to execute on click
     */
    tuneClicked(tuneName, customFunction) {
        if (typeof customFunction === 'function') {
            if (!customFunction(tuneName)) {
                return false;
            }
        }

        this.buttons.forEach(button => {
            button.classList.toggle(this.CSS.buttonActive, button.dataset.tune === tuneName);
        });

        this.onChange(tuneName);
    }
}
