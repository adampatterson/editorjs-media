(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.image-gallery{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-gallery__container{background:black;margin-bottom:10px;padding:5px}.image-gallery__controls{display:flex;gap:10px;padding:8px 2px 3px}.image-gallery__items{display:grid;gap:10px;grid-template-columns:1fr 1fr 1fr;padding:10px;background-color:#222}.image-gallery__items:empty{display:none}.image-gallery--slider .image-gallery__items{display:flex;overflow-x:auto;scroll-snap-type:x mandatory}.image-gallery--slider .image-gallery__image{flex:0 0 100%;scroll-snap-align:center}.image-gallery--gallery .image-gallery__items{display:grid;gap:10px;grid-template-columns:repeat(auto-fill,minmax(100px,1fr))}.image-gallery__preloaders{display:flex;flex-grow:1;flex-wrap:nowrap;padding:5px;gap:8px;overflow:hidden}.image-gallery__preloader{min-width:30px;height:30px;border-radius:50%;background-size:cover;position:relative;background-color:var(--bg-color);background-position:center center}.image-gallery__preloader:after{content:"";position:absolute;z-index:3;width:30px;height:30px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-15px;margin-left:-15px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.sortable .image-gallery__image{cursor:move}.image-gallery__image{position:relative;overflow:hidden;aspect-ratio:16 / 9;-webkit-user-select:none;user-select:none;background-color:#000;border-radius:3px;padding:5px}.image-gallery__image.sortable-ghost{opacity:.75}.image-gallery__image--empty,.image-gallery__image--loading{display:none}.image-gallery__image-picture{border-radius:3px;max-width:100%;height:100%;display:block;margin:auto;object-fit:cover;pointer-events:none}.image-gallery__image-trash{position:absolute;top:3px;right:3px;cursor:pointer;color:#fff;font-size:18px;background-color:#00000040;line-height:1;padding:6px 8px;border-radius:3px;transition:background-color .1s}.image-gallery__image-trash:hover{background-color:#00000080}.image-gallery__image-edit{position:absolute;top:3px;right:40px;cursor:pointer;color:#fff;font-size:18px;background-color:#00000040;line-height:1;padding:6px 8px;border-radius:3px;transition:background-color .1s}.image-gallery__image-edit:hover{background-color:#00000080}.image-gallery__counter{display:flex;align-items:center;color:gray;font-size:14px;margin-right:6px}.image-gallery__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-gallery__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-gallery__caption{margin-bottom:10px}.image-gallery .cdx-button{height:40px;display:flex;align-items:center;justify-content:center;padding:12px;gap:5px;white-space:nowrap}.image-gallery__tune-wrapper{display:flex;gap:6px;margin:6px 0}.image-gallery__tune-wrapper:first-child{margin-top:0}.image-gallery__tune-wrapper:last-child{margin-bottom:0}.image-gallery__tune{flex-grow:1;padding:6px;color:var(--color-text-primary);display:flex;align-items:center;justify-content:center}.image-gallery__tune.active{background:var(--color-background-icon-active);color:var(--color-text-icon-active);border-color:var(--color-text-icon-active)}.image-gallery__tune svg{width:24px;height:24px}.image-gallery__heading{font-weight:600;font-size:1.2em;margin-bottom:10px}.image-gallery__modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:center;justify-content:center}.image-gallery__modal-content{background:white;padding:20px;border-radius:5px;width:400px;max-width:90%;display:flex;flex-direction:column;gap:10px}.image-gallery__modal-title{font-weight:600;font-size:1.2em;margin-bottom:10px}.image-gallery__modal-field{display:flex;flex-direction:column;gap:5px}.image-gallery__modal-field label{font-size:.9em;color:#707684}.image-gallery__modal-field input,.image-gallery__modal-field textarea{padding:8px;border:1px solid #e8e8eb;border-radius:3px;font-size:1em}.image-gallery__modal-footer{display:flex;justify-content:flex-end;gap:10px;margin-top:10px}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
const O = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" viewBox="0 -960 960 960" width="20"><path d="M360-384h384L618-552l-90 120-66-88-102 136Zm-48 144q-29.7 0-50.85-21.15Q240-282.3 240-312v-480q0-29.7 21.15-50.85Q282.3-864 312-864h480q29.7 0 50.85 21.15Q864-821.7 864-792v480q0 29.7-21.15 50.85Q821.7-240 792-240H312Zm0-72h480v-480H312v480ZM168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-552h72v552h552v72H168Zm144-696v480-480Z"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" viewBox="0 -960 960 960" width="24"><path d="M363.077-406.154h373.844L612.769-569.23l-95.078 121.539-62.769-77.693-91.845 119.23Zm-40.769 146.153q-30.308 0-51.307-21-21-21-21-51.308v-455.382q0-30.308 21-51.308 20.999-21 51.307-21h455.383q30.307 0 51.307 21 21 21 21 51.308v455.382q0 30.308-21 51.308t-51.307 21H322.308Zm0-59.999h455.383q4.615 0 8.462-3.846 3.846-3.847 3.846-8.463v-455.382q0-4.616-3.846-8.463-3.847-3.846-8.462-3.846H322.308q-4.616 0-8.462 3.846-3.847 3.847-3.847 8.463v455.382q0 4.616 3.847 8.463 3.846 3.846 8.462 3.846ZM182.309-120.003q-30.307 0-51.307-21-21-21-21-51.307v-515.381h59.999v515.381q0 4.616 3.846 8.462 3.847 3.847 8.462 3.847h515.382v59.998H182.309ZM309.999-800v480-480Z"/></svg>', P = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.1328 7.7234C18.423 7.7634 18.7115 7.80571 19 7.85109M18.1328 7.7234L17.2267 17.4023C17.1897 17.8371 16.973 18.2432 16.62 18.5394C16.267 18.8356 15.8037 19.0001 15.3227 19H8.67733C8.19632 19.0001 7.73299 18.8356 7.37998 18.5394C7.02698 18.2432 6.81032 17.8371 6.77333 17.4023L5.86715 7.7234M18.1328 7.7234C17.1536 7.58919 16.1693 7.48733 15.1818 7.41803M5.86715 7.7234C5.57697 7.76263 5.28848 7.80494 5 7.85032M5.86715 7.7234C6.84642 7.58919 7.83074 7.48733 8.81818 7.41803M15.1818 7.41803C13.0638 7.26963 10.9362 7.26963 8.81818 7.41803M15.1818 7.41803C15.1818 5.30368 13.7266 4.34834 12 4.34834C10.2734 4.34834 8.81818 5.43945 8.81818 7.41803"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.5 15.5L10 11"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 11L13.5 15.5"/></svg>', q = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
`;
class k {
  /**
   * @param {object} ui - image tool Ui module
   * @param {object} ui.api - Editor.js API
   * @param {ImageConfig} ui.config - user config
   * @param {Function} ui.onSelectFile - callback for clicks on Select file button
   * @param {boolean} ui.readOnly - read-only mode flag
   */
  constructor({ api: r, config: l, onSelectFile: d, onDeleteFile: o, onMoveFile: i, onUpdateFile: t, readOnly: u }) {
    this.api = r, this.config = l, this.onSelectFile = d, this.onDeleteFile = o, this.onMoveFile = i, this.onUpdateFile = t, this.readOnly = u, this.nodes = {
      wrapper: C("div", [this.CSS.baseClass, this.CSS.wrapper]),
      fileButton: this.createFileButton(),
      container: C("div", this.CSS.container),
      itemsContainer: C("div", this.CSS.itemsContainer),
      controls: C("div", this.CSS.controls),
      preloaderContainer: C("div", this.CSS.preloaderContainer),
      caption: C("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      }),
      heading: C("div", this.CSS.heading)
    }, this.nodes.caption.dataset.placeholder = this.api.i18n.t("Gallery caption"), this.nodes.wrapper.appendChild(this.nodes.heading), this.readOnly || (this.nodes.controls.appendChild(this.nodes.preloaderContainer), this.config.maxElementCount && (this.nodes.limitCounter = C("div", this.CSS.limitCounter), this.nodes.controls.appendChild(this.nodes.limitCounter)), this.nodes.controls.appendChild(this.nodes.fileButton)), this.nodes.container.appendChild(this.nodes.itemsContainer), this.readOnly || this.nodes.container.appendChild(this.nodes.controls), this.nodes.wrapper.appendChild(this.nodes.container), this.readOnly || this.nodes.wrapper.appendChild(this.nodes.caption), ["dragenter", "dragover", "dragleave", "drop"].forEach((g) => {
      this.nodes.itemsContainer.addEventListener(g, function(a) {
        a.preventDefault(), a.stopPropagation();
      }, !1);
    });
  }
  /**
   * CSS classes
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-gallery",
      container: "image-gallery__container",
      controls: "image-gallery__controls",
      limitCounter: "image-gallery__counter",
      itemsContainer: "image-gallery__items",
      imageContainer: "image-gallery__image",
      preloaderContainer: "image-gallery__preloaders",
      imagePreloader: "image-gallery__preloader",
      imageEl: "image-gallery__image-picture",
      trashButton: "image-gallery__image-trash",
      editButton: "image-gallery__image-edit",
      caption: "image-gallery__caption",
      heading: "image-gallery__heading",
      modal: "image-gallery__modal",
      modalContent: "image-gallery__modal-content",
      modalTitle: "image-gallery__modal-title",
      modalField: "image-gallery__modal-field",
      modalFooter: "image-gallery__modal-footer",
      buttonPrimary: "cdx-button--primary"
    };
  }
  /**
   * Ui statuses:
   * - empty
   * - uploading
   * - filled
   *
   * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}
   */
  static get status() {
    return {
      EMPTY: "empty",
      UPLOADING: "loading",
      FILLED: "filled"
    };
  }
  /**
   * Renders tool UI
   *
   * @param {ImageGalleryData} toolData - saved tool data
   * @returns {Element}
   */
  render(r) {
    return this.nodes.wrapper;
  }
  onRendered() {
    !this.readOnly && !this.sortable && (this.sortable = new this.config.sortableJs(this.nodes.itemsContainer, {
      handle: `.${this.CSS.imageContainer}`,
      filter: `.${this.CSS.trashButton}`,
      onStart: () => {
        this.nodes.itemsContainer.classList.add(`${this.CSS.itemsContainer}--drag`);
      },
      onEnd: (r) => {
        this.nodes.itemsContainer.classList.remove(`${this.CSS.itemsContainer}--drag`), r.oldIndex !== r.newIndex && this.onMoveFile(r.oldIndex, r.newIndex);
      }
    }), this.nodes.itemsContainer.classList.add("sortable"));
  }
  /**
   * Creates upload-file button
   *
   * @returns {Element}
   */
  createFileButton() {
    const r = C("div", [this.CSS.button]);
    return r.innerHTML = this.config.buttonContent || `${P} ${this.api.i18n.t("Select an Image")}`, r.addEventListener("click", () => {
      this.onSelectFile();
    }), r;
  }
  /**
   * Shows uploading button
   *
   * @returns {void}
   */
  showFileButton() {
    this.nodes.fileButton.style.display = "";
  }
  /**
   * Hide uploading button
   *
   * @returns {void}
   */
  hideFileButton() {
    this.nodes.fileButton.style.display = "none";
  }
  getPreloader(r) {
    let l = C("div", this.CSS.imagePreloader);
    this.nodes.preloaderContainer.append(l);
    const d = new FileReader();
    return d.readAsDataURL(r), d.onload = (o) => {
      l.style.backgroundImage = `url(${o.target.result})`;
    }, l;
  }
  removePreloader(r) {
    r.remove();
  }
  /**
   * Shows an image
   *
   * @param {ImageGalleryDataFile} file - image file object
   * @returns {void}
   */
  appendImage(r) {
    let l = r.url;
    const d = /\.mp4$/.test(l) ? "VIDEO" : "IMG", o = {
      src: l
    };
    let i = "load";
    d === "VIDEO" && (o.autoplay = !1, o.muted = !0, o.playsinline = !0, i = "loadeddata");
    let t = C("div", [this.CSS.imageContainer]), u = C(d, this.CSS.imageEl, o);
    u.addEventListener(i, () => {
      this.toggleStatus(t, k.status.FILLED);
    }), t.appendChild(u);
    const g = this.api.i18n.t("Delete");
    if (!this.readOnly) {
      let a = C("div", [this.CSS.trashButton], {
        innerHTML: D,
        title: g
      });
      this.api.tooltip.onHover(a, g, {
        placement: "top"
      }), a.addEventListener("click", () => {
        this.api.tooltip.hide();
        let f = Array.prototype.slice.call(this.nodes.itemsContainer.children).indexOf(t);
        f !== -1 && (this.nodes.itemsContainer.removeChild(t), this.onDeleteFile(f));
      }), t.appendChild(a);
      const h = this.api.i18n.t("Edit");
      let p = C("div", [this.CSS.editButton], {
        innerHTML: q,
        title: h
      });
      this.api.tooltip.onHover(p, h, {
        placement: "top"
      }), p.addEventListener("click", () => {
        let f = Array.prototype.slice.call(this.nodes.itemsContainer.children).indexOf(t);
        f !== -1 && this.showEditModal(r, f);
      }), t.appendChild(p);
    }
    this.nodes.itemsContainer.append(t);
  }
  /**
   * Shows caption input
   *
   * @param {string} text - caption text
   * @returns {void}
   */
  fillCaption(r) {
    this.nodes.caption && (this.nodes.caption.innerHTML = r);
  }
  /**
   * Changes UI status
   *
   * @param {Element} elem
   * @param {string} status - see {@link Ui.status} constants
   * @returns {void}
   */
  toggleStatus(r, l) {
    for (const d in k.status)
      Object.prototype.hasOwnProperty.call(k.status, d) && r.classList.toggle(`${this.CSS.imageContainer}--${k.status[d]}`, l === k.status[d]);
  }
  /**
   * @param {int} imageCount
   * @param {int|null} limitCounter
   * @returns {void}
   */
  updateLimitCounter(r, l) {
    l && this.nodes.limitCounter && (r === 0 ? this.nodes.limitCounter.style.display = "none" : (this.nodes.limitCounter.style.display = null, this.nodes.limitCounter.innerText = `${r} / ${l}`));
  }
  /**
   * Apply tune to the UI
   *
   * @param {string} tuneName
   * @returns {void}
   */
  applyTune(r) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--gallery`, r === "gallery"), this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--slider`, r === "slider");
    const l = r === "gallery" ? "Gallery caption" : "Slider caption";
    this.nodes.caption.dataset.placeholder = this.api.i18n.t(l);
    const d = r === "gallery" ? "Gallery" : "Slider";
    this.nodes.heading.innerText = this.api.i18n.t(d);
  }
  /**
   * Shows edit modal
   *
   * @param {ImageGalleryDataFile} file - file data
   * @param {number} index - file index
   */
  showEditModal(r, l) {
    const d = C("div", this.CSS.modal), o = C("div", this.CSS.modalContent), i = C("div", this.CSS.modalTitle, {
      innerText: this.api.i18n.t("Edit Image Metadata")
    }), t = (w, e, n = "input") => {
      const s = C("div", this.CSS.modalField), c = C("label", null, { innerText: this.api.i18n.t(w) }), y = C(n === "textarea" ? "textarea" : "input", null, {
        value: r[e] || "",
        placeholder: this.api.i18n.t(w)
      });
      return s.appendChild(c), s.appendChild(y), { field: s, input: y };
    }, u = t("Title", "title"), g = t("Alt Text", "alt"), a = t("Description", "description", "textarea"), h = t("Author", "author"), p = C("div", this.CSS.modalFooter), v = C("button", [this.CSS.button, this.CSS.buttonPrimary], {
      innerText: this.api.i18n.t("Save")
    }), f = C("button", [this.CSS.button], {
      innerText: this.api.i18n.t("Cancel")
    });
    v.addEventListener("click", () => {
      const w = {
        title: u.input.value,
        alt: g.input.value,
        description: a.input.value,
        author: h.input.value
      };
      this.onUpdateFile(l, w), Object.assign(r, w), d.remove();
    }), f.addEventListener("click", () => {
      d.remove();
    }), p.appendChild(f), p.appendChild(v), o.appendChild(i), o.appendChild(u.field), o.appendChild(g.field), o.appendChild(a.field), o.appendChild(h.field), o.appendChild(p), d.appendChild(o), document.body.appendChild(d);
  }
}
const C = function(r, l = null, d = {}) {
  const o = document.createElement(r);
  Array.isArray(l) ? o.classList.add(...l) : l && o.classList.add(l);
  for (const i in d)
    o[i] = d[i];
  return o;
};
class L {
  /**
   * @param {object} tune - image tool Tunes managers
   * @param {object} tune.api - Editor API
   * @param {object} tune.actions - list of user defined tunes
   * @param {Function} tune.onChange - tune toggling callback
   */
  constructor({ api: r, actions: l, onChange: d }) {
    this.api = r, this.actions = l, this.onChange = d, this.buttons = [];
  }
  /**
   * Available Image tunes
   *
   * @returns {{name: string, icon: string, title: string}[]}
   */
  static get tunes() {
    return console.log("TUNE"), [
      {
        name: "gallery",
        icon: O,
        title: "Gallery"
      },
      {
        name: "slider",
        icon: I,
        title: "Slider"
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
      wrapper: "image-gallery__tune-wrapper",
      buttonBase: this.api.styles.button,
      button: "image-gallery__tune",
      buttonActive: "active"
    };
  }
  /**
   * Makes buttons with tunes
   *
   * @param {ImageGalleryData} toolData - generate Elements of tunes
   * @returns {Element}
   */
  render(r) {
    const l = C("div", this.CSS.wrapper), d = this.actions ?? L.tunes;
    return this.buttons = [], d.forEach((o) => {
      const i = this.api.i18n.t(o.title), t = C("div", [this.CSS.buttonBase, this.CSS.button], {
        innerHTML: o.icon,
        title: i
      });
      t.addEventListener("click", () => {
        this.tuneClicked(o.name, o.action);
      }), t.dataset.tune = o.name, t.classList.toggle(this.CSS.buttonActive, r.style === o.name), this.buttons.push(t), this.api.tooltip.onHover(t, i, {
        placement: "top"
      }), l.appendChild(t);
    }), l;
  }
  /**
   * Clicks to one of the tunes
   *
   * @param {string} tuneName - clicked tune name
   * @param {Function} customFunction - function to execute on click
   */
  tuneClicked(r, l) {
    if (typeof l == "function" && !l(r))
      return !1;
    this.buttons.forEach((d) => {
      d.classList.toggle(this.CSS.buttonActive, d.dataset.tune === r);
    }), this.onChange(r);
  }
}
function R(S) {
  return S && S.__esModule && Object.prototype.hasOwnProperty.call(S, "default") ? S.default : S;
}
var j = { exports: {} };
(function(S, r) {
  (function(l, d) {
    S.exports = d();
  })(window, function() {
    return function(l) {
      var d = {};
      function o(i) {
        if (d[i])
          return d[i].exports;
        var t = d[i] = { i, l: !1, exports: {} };
        return l[i].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
      }
      return o.m = l, o.c = d, o.d = function(i, t, u) {
        o.o(i, t) || Object.defineProperty(i, t, { enumerable: !0, get: u });
      }, o.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, o.t = function(i, t) {
        if (1 & t && (i = o(i)), 8 & t || 4 & t && typeof i == "object" && i && i.__esModule)
          return i;
        var u = /* @__PURE__ */ Object.create(null);
        if (o.r(u), Object.defineProperty(u, "default", { enumerable: !0, value: i }), 2 & t && typeof i != "string")
          for (var g in i)
            o.d(u, g, (function(a) {
              return i[a];
            }).bind(null, g));
        return u;
      }, o.n = function(i) {
        var t = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return o.d(t, "a", t), t;
      }, o.o = function(i, t) {
        return Object.prototype.hasOwnProperty.call(i, t);
      }, o.p = "", o(o.s = 3);
    }([function(l, d) {
      var o;
      o = function() {
        return this;
      }();
      try {
        o = o || new Function("return this")();
      } catch {
        typeof window == "object" && (o = window);
      }
      l.exports = o;
    }, function(l, d, o) {
      (function(i) {
        var t = o(2), u = setTimeout;
        function g() {
        }
        function a(n) {
          if (!(this instanceof a))
            throw new TypeError("Promises must be constructed via new");
          if (typeof n != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], e(n, this);
        }
        function h(n, s) {
          for (; n._state === 3; )
            n = n._value;
          n._state !== 0 ? (n._handled = !0, a._immediateFn(function() {
            var c = n._state === 1 ? s.onFulfilled : s.onRejected;
            if (c !== null) {
              var y;
              try {
                y = c(n._value);
              } catch (b) {
                return void v(s.promise, b);
              }
              p(s.promise, y);
            } else
              (n._state === 1 ? p : v)(s.promise, n._value);
          })) : n._deferreds.push(s);
        }
        function p(n, s) {
          try {
            if (s === n)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (s && (typeof s == "object" || typeof s == "function")) {
              var c = s.then;
              if (s instanceof a)
                return n._state = 3, n._value = s, void f(n);
              if (typeof c == "function")
                return void e((y = c, b = s, function() {
                  y.apply(b, arguments);
                }), n);
            }
            n._state = 1, n._value = s, f(n);
          } catch (m) {
            v(n, m);
          }
          var y, b;
        }
        function v(n, s) {
          n._state = 2, n._value = s, f(n);
        }
        function f(n) {
          n._state === 2 && n._deferreds.length === 0 && a._immediateFn(function() {
            n._handled || a._unhandledRejectionFn(n._value);
          });
          for (var s = 0, c = n._deferreds.length; s < c; s++)
            h(n, n._deferreds[s]);
          n._deferreds = null;
        }
        function w(n, s, c) {
          this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof s == "function" ? s : null, this.promise = c;
        }
        function e(n, s) {
          var c = !1;
          try {
            n(function(y) {
              c || (c = !0, p(s, y));
            }, function(y) {
              c || (c = !0, v(s, y));
            });
          } catch (y) {
            if (c)
              return;
            c = !0, v(s, y);
          }
        }
        a.prototype.catch = function(n) {
          return this.then(null, n);
        }, a.prototype.then = function(n, s) {
          var c = new this.constructor(g);
          return h(this, new w(n, s, c)), c;
        }, a.prototype.finally = t.a, a.all = function(n) {
          return new a(function(s, c) {
            if (!n || n.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var y = Array.prototype.slice.call(n);
            if (y.length === 0)
              return s([]);
            var b = y.length;
            function m(E, x) {
              try {
                if (x && (typeof x == "object" || typeof x == "function")) {
                  var T = x.then;
                  if (typeof T == "function")
                    return void T.call(x, function(F) {
                      m(E, F);
                    }, c);
                }
                y[E] = x, --b == 0 && s(y);
              } catch (F) {
                c(F);
              }
            }
            for (var _ = 0; _ < y.length; _++)
              m(_, y[_]);
          });
        }, a.resolve = function(n) {
          return n && typeof n == "object" && n.constructor === a ? n : new a(function(s) {
            s(n);
          });
        }, a.reject = function(n) {
          return new a(function(s, c) {
            c(n);
          });
        }, a.race = function(n) {
          return new a(function(s, c) {
            for (var y = 0, b = n.length; y < b; y++)
              n[y].then(s, c);
          });
        }, a._immediateFn = typeof i == "function" && function(n) {
          i(n);
        } || function(n) {
          u(n, 0);
        }, a._unhandledRejectionFn = function(n) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", n);
        }, d.a = a;
      }).call(this, o(5).setImmediate);
    }, function(l, d, o) {
      d.a = function(i) {
        var t = this.constructor;
        return this.then(function(u) {
          return t.resolve(i()).then(function() {
            return u;
          });
        }, function(u) {
          return t.resolve(i()).then(function() {
            return t.reject(u);
          });
        });
      };
    }, function(l, d, o) {
      function i(e) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        })(e);
      }
      o(4);
      var t, u, g, a, h, p, v, f = o(8), w = (u = function(e) {
        return new Promise(function(n, s) {
          e = a(e), (e = h(e)).beforeSend && e.beforeSend();
          var c = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          c.open(e.method, e.url), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(e.headers).forEach(function(b) {
            var m = e.headers[b];
            c.setRequestHeader(b, m);
          });
          var y = e.ratio;
          c.upload.addEventListener("progress", function(b) {
            var m = Math.round(b.loaded / b.total * 100), _ = Math.ceil(m * y / 100);
            e.progress(Math.min(_, 100));
          }, !1), c.addEventListener("progress", function(b) {
            var m = Math.round(b.loaded / b.total * 100), _ = Math.ceil(m * (100 - y) / 100) + y;
            e.progress(Math.min(_, 100));
          }, !1), c.onreadystatechange = function() {
            if (c.readyState === 4) {
              var b = c.response;
              try {
                b = JSON.parse(b);
              } catch {
              }
              var m = f.parseHeaders(c.getAllResponseHeaders()), _ = { body: b, code: c.status, headers: m };
              v(c.status) ? n(_) : s(_);
            }
          }, c.send(e.data);
        });
      }, g = function(e) {
        return e.method = "POST", u(e);
      }, a = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (e.url && typeof e.url != "string")
          throw new Error("Url must be a string");
        if (e.url = e.url || "", e.method && typeof e.method != "string")
          throw new Error("`method` must be a string or null");
        if (e.method = e.method ? e.method.toUpperCase() : "GET", e.headers && i(e.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (e.headers = e.headers || {}, e.type && (typeof e.type != "string" || !Object.values(t).includes(e.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (e.progress && typeof e.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (e.progress = e.progress || function(n) {
        }, e.beforeSend = e.beforeSend || function(n) {
        }, e.ratio && typeof e.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (e.ratio < 0 || e.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (e.ratio = e.ratio || 90, e.accept && typeof e.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (e.accept = e.accept || "*/*", e.multiple && typeof e.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (e.multiple = e.multiple || !1, e.fieldName && typeof e.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return e.fieldName = e.fieldName || "files", e;
      }, h = function(e) {
        switch (e.method) {
          case "GET":
            var n = p(e.data, t.URLENCODED);
            delete e.data, e.url = /\?/.test(e.url) ? e.url + "&" + n : e.url + "?" + n;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var s = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || t.JSON;
            }(e);
            (f.isFormData(e.data) || f.isFormElement(e.data)) && (s = t.FORM), e.data = p(e.data, s), s !== w.contentType.FORM && (e.headers["content-type"] = s);
        }
        return e;
      }, p = function() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case t.URLENCODED:
            return f.urlEncode(e);
          case t.JSON:
            return f.jsonEncode(e);
          case t.FORM:
            return f.formEncode(e);
          default:
            return e;
        }
      }, v = function(e) {
        return e >= 200 && e < 300;
      }, { contentType: t = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: u, get: function(e) {
        return e.method = "GET", u(e);
      }, post: g, transport: function(e) {
        return e = a(e), f.selectFiles(e).then(function(n) {
          for (var s = new FormData(), c = 0; c < n.length; c++)
            s.append(e.fieldName, n[c], n[c].name);
          f.isObject(e.data) && Object.keys(e.data).forEach(function(b) {
            var m = e.data[b];
            s.append(b, m);
          });
          var y = e.beforeSend;
          return e.beforeSend = function() {
            return y(n);
          }, e.data = s, g(e);
        });
      }, selectFiles: function(e) {
        return delete (e = a(e)).beforeSend, f.selectFiles(e);
      } });
      l.exports = w;
    }, function(l, d, o) {
      o.r(d);
      var i = o(1);
      window.Promise = window.Promise || i.a;
    }, function(l, d, o) {
      (function(i) {
        var t = i !== void 0 && i || typeof self < "u" && self || window, u = Function.prototype.apply;
        function g(a, h) {
          this._id = a, this._clearFn = h;
        }
        d.setTimeout = function() {
          return new g(u.call(setTimeout, t, arguments), clearTimeout);
        }, d.setInterval = function() {
          return new g(u.call(setInterval, t, arguments), clearInterval);
        }, d.clearTimeout = d.clearInterval = function(a) {
          a && a.close();
        }, g.prototype.unref = g.prototype.ref = function() {
        }, g.prototype.close = function() {
          this._clearFn.call(t, this._id);
        }, d.enroll = function(a, h) {
          clearTimeout(a._idleTimeoutId), a._idleTimeout = h;
        }, d.unenroll = function(a) {
          clearTimeout(a._idleTimeoutId), a._idleTimeout = -1;
        }, d._unrefActive = d.active = function(a) {
          clearTimeout(a._idleTimeoutId);
          var h = a._idleTimeout;
          h >= 0 && (a._idleTimeoutId = setTimeout(function() {
            a._onTimeout && a._onTimeout();
          }, h));
        }, o(6), d.setImmediate = typeof self < "u" && self.setImmediate || i !== void 0 && i.setImmediate || this && this.setImmediate, d.clearImmediate = typeof self < "u" && self.clearImmediate || i !== void 0 && i.clearImmediate || this && this.clearImmediate;
      }).call(this, o(0));
    }, function(l, d, o) {
      (function(i, t) {
        (function(u, g) {
          if (!u.setImmediate) {
            var a, h, p, v, f, w = 1, e = {}, n = !1, s = u.document, c = Object.getPrototypeOf && Object.getPrototypeOf(u);
            c = c && c.setTimeout ? c : u, {}.toString.call(u.process) === "[object process]" ? a = function(m) {
              t.nextTick(function() {
                b(m);
              });
            } : function() {
              if (u.postMessage && !u.importScripts) {
                var m = !0, _ = u.onmessage;
                return u.onmessage = function() {
                  m = !1;
                }, u.postMessage("", "*"), u.onmessage = _, m;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", f = function(m) {
              m.source === u && typeof m.data == "string" && m.data.indexOf(v) === 0 && b(+m.data.slice(v.length));
            }, u.addEventListener ? u.addEventListener("message", f, !1) : u.attachEvent("onmessage", f), a = function(m) {
              u.postMessage(v + m, "*");
            }) : u.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(m) {
              b(m.data);
            }, a = function(m) {
              p.port2.postMessage(m);
            }) : s && "onreadystatechange" in s.createElement("script") ? (h = s.documentElement, a = function(m) {
              var _ = s.createElement("script");
              _.onreadystatechange = function() {
                b(m), _.onreadystatechange = null, h.removeChild(_), _ = null;
              }, h.appendChild(_);
            }) : a = function(m) {
              setTimeout(b, 0, m);
            }, c.setImmediate = function(m) {
              typeof m != "function" && (m = new Function("" + m));
              for (var _ = new Array(arguments.length - 1), E = 0; E < _.length; E++)
                _[E] = arguments[E + 1];
              var x = { callback: m, args: _ };
              return e[w] = x, a(w), w++;
            }, c.clearImmediate = y;
          }
          function y(m) {
            delete e[m];
          }
          function b(m) {
            if (n)
              setTimeout(b, 0, m);
            else {
              var _ = e[m];
              if (_) {
                n = !0;
                try {
                  (function(E) {
                    var x = E.callback, T = E.args;
                    switch (T.length) {
                      case 0:
                        x();
                        break;
                      case 1:
                        x(T[0]);
                        break;
                      case 2:
                        x(T[0], T[1]);
                        break;
                      case 3:
                        x(T[0], T[1], T[2]);
                        break;
                      default:
                        x.apply(g, T);
                    }
                  })(_);
                } finally {
                  y(m), n = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, o(0), o(7));
    }, function(l, d) {
      var o, i, t = l.exports = {};
      function u() {
        throw new Error("setTimeout has not been defined");
      }
      function g() {
        throw new Error("clearTimeout has not been defined");
      }
      function a(c) {
        if (o === setTimeout)
          return setTimeout(c, 0);
        if ((o === u || !o) && setTimeout)
          return o = setTimeout, setTimeout(c, 0);
        try {
          return o(c, 0);
        } catch {
          try {
            return o.call(null, c, 0);
          } catch {
            return o.call(this, c, 0);
          }
        }
      }
      (function() {
        try {
          o = typeof setTimeout == "function" ? setTimeout : u;
        } catch {
          o = u;
        }
        try {
          i = typeof clearTimeout == "function" ? clearTimeout : g;
        } catch {
          i = g;
        }
      })();
      var h, p = [], v = !1, f = -1;
      function w() {
        v && h && (v = !1, h.length ? p = h.concat(p) : f = -1, p.length && e());
      }
      function e() {
        if (!v) {
          var c = a(w);
          v = !0;
          for (var y = p.length; y; ) {
            for (h = p, p = []; ++f < y; )
              h && h[f].run();
            f = -1, y = p.length;
          }
          h = null, v = !1, function(b) {
            if (i === clearTimeout)
              return clearTimeout(b);
            if ((i === g || !i) && clearTimeout)
              return i = clearTimeout, clearTimeout(b);
            try {
              i(b);
            } catch {
              try {
                return i.call(null, b);
              } catch {
                return i.call(this, b);
              }
            }
          }(c);
        }
      }
      function n(c, y) {
        this.fun = c, this.array = y;
      }
      function s() {
      }
      t.nextTick = function(c) {
        var y = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var b = 1; b < arguments.length; b++)
            y[b - 1] = arguments[b];
        p.push(new n(c, y)), p.length !== 1 || v || a(e);
      }, n.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = s, t.addListener = s, t.once = s, t.off = s, t.removeListener = s, t.removeAllListeners = s, t.emit = s, t.prependListener = s, t.prependOnceListener = s, t.listeners = function(c) {
        return [];
      }, t.binding = function(c) {
        throw new Error("process.binding is not supported");
      }, t.cwd = function() {
        return "/";
      }, t.chdir = function(c) {
        throw new Error("process.chdir is not supported");
      }, t.umask = function() {
        return 0;
      };
    }, function(l, d, o) {
      function i(u, g) {
        for (var a = 0; a < g.length; a++) {
          var h = g[a];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(u, h.key, h);
        }
      }
      var t = o(9);
      l.exports = function() {
        function u() {
          (function(p, v) {
            if (!(p instanceof v))
              throw new TypeError("Cannot call a class as a function");
          })(this, u);
        }
        var g, a, h;
        return g = u, h = [{ key: "urlEncode", value: function(p) {
          return t(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p))
            return p;
          if (this.isFormElement(p))
            return new FormData(p);
          if (this.isObject(p)) {
            var v = new FormData();
            return Object.keys(p).forEach(function(f) {
              var w = p[f];
              v.append(f, w);
            }), v;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(v, f) {
            var w = document.createElement("INPUT");
            w.type = "file", p.multiple && w.setAttribute("multiple", "multiple"), p.accept && w.setAttribute("accept", p.accept), w.style.display = "none", document.body.appendChild(w), w.addEventListener("change", function(e) {
              var n = e.target.files;
              v(n), document.body.removeChild(w);
            }, !1), w.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var v = p.trim().split(/[\r\n]+/), f = {};
          return v.forEach(function(w) {
            var e = w.split(": "), n = e.shift(), s = e.join(": ");
            n && (f[n] = s);
          }), f;
        } }], (a = null) && i(g.prototype, a), h && i(g, h), u;
      }();
    }, function(l, d) {
      var o = function(t) {
        return encodeURIComponent(t).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, i = function(t, u, g, a) {
        return u = u || null, g = g || "&", a = a || null, t ? function(h) {
          for (var p = new Array(), v = 0; v < h.length; v++)
            h[v] && p.push(h[v]);
          return p;
        }(Object.keys(t).map(function(h) {
          var p, v, f = h;
          if (a && (f = a + "[" + f + "]"), typeof t[h] == "object" && t[h] !== null)
            p = i(t[h], null, g, f);
          else {
            u && (v = f, f = !isNaN(parseFloat(v)) && isFinite(v) ? u + Number(f) : f);
            var w = t[h];
            w = (w = (w = (w = w === !0 ? "1" : w) === !1 ? "0" : w) === 0 ? "0" : w) || "", p = o(f) + "=" + o(w);
          }
          return p;
        })).join(g).replace(/[!'()*]/g, "") : "";
      };
      l.exports = i;
    }]);
  });
})(j);
var H = j.exports;
const M = /* @__PURE__ */ R(H);
class B {
  /**
   * @param {object} params - uploader module params
   * @param {ImageConfig} params.config - image tool config
   */
  constructor({ config: r }) {
    this.config = r;
  }
  /**
   * Handle clicks on the upload file button
   */
  uploadSelectedFiles(r, { onPreview: l, onUpload: d, onError: o }) {
    M.selectFiles({
      accept: this.config.types,
      multiple: !0
    }).then((i) => {
      let t = 0;
      for (var u = 0; u < i.length && !(r !== null && t == r); u++) {
        t++;
        let g = i[u], a = l(g), h;
        if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
          const p = this.config.uploader.uploadByFile(g);
          A(p) || console.warn("Custom uploader method uploadByFile should return a Promise"), h = p;
        } else
          h = this.uploadByFile(g);
        h.then((p) => {
          d(p, a);
        }).catch((p) => {
          o(p, a);
        });
      }
    });
  }
  /**
   * Default file uploader
   * Fires ajax.post()
   *
   * @param {File} file - file pasted by drag-n-drop
   */
  uploadByFile(r) {
    const l = new FormData();
    return l.append(this.config.field, r), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([d, o]) => {
      l.append(d, o);
    }), M.post({
      url: this.config.endpoints.byFile,
      data: l,
      type: M.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((d) => d.body);
  }
}
function A(S) {
  return S && typeof S.then == "function";
}
/**
 * Image Gallery Tool for the Editor.js
 *
 * @author Igor Shuvalov «VolgaIgor»
 * @license MIT
 * @see {@link https://github.com/VolgaIgor/editorjs-gallery}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.js — main Tool's interface, public API and methods for working with data
 *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.js — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * gallery: {
 *   class: ImageGallery,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *     }
 *   },
 * },
 */
class U {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: O,
      title: "Media"
    };
  }
  /**
   * @param {object} tool - tool properties got from editor.js
   * @param {ImageGalleryData} tool.data - previously saved data
   * @param {ImageConfig} tool.config - user config for Tool
   * @param {object} tool.api - Editor.js API
   * @param {boolean} tool.readOnly - read-only mode flag
   */
  constructor({ data: r, config: l, api: d, readOnly: o }) {
    this.api = d, this.readOnly = o, this.config = {
      endpoints: l.endpoints || "",
      additionalRequestData: l.additionalRequestData || {},
      additionalRequestHeaders: l.additionalRequestHeaders || {},
      field: l.field || "image",
      types: l.types || "image/*",
      buttonContent: l.buttonContent || "",
      uploader: l.uploader || void 0,
      actions: l.actions || void 0,
      maxElementCount: l.maxElementCount || void 0,
      sortableJs: l.sortableJs
    }, this.uploader = new B({
      config: this.config
    }), this.ui = new k({
      api: d,
      config: this.config,
      onSelectFile: () => {
        let i = this.config.maxElementCount ? this.config.maxElementCount - this._data.files.length : null;
        this.uploader.uploadSelectedFiles(i, {
          onPreview: (t) => this.ui.getPreloader(t),
          onUpload: (t, u) => {
            this.onUpload(t, u);
          },
          onError: (t, u) => {
            this.uploadingFailed(t, u);
          }
        });
      },
      onDeleteFile: (i) => {
        this.deleteImage(i);
      },
      onMoveFile: (i, t) => {
        this.moveImage(i, t);
      },
      onUpdateFile: (i, t) => {
        this.updateImage(i, t);
      },
      readOnly: o
    }), this.tunes = new L({
      api: d,
      actions: this.config.actions,
      onChange: (i) => this.styleToggled(i)
    }), this._data = {}, this.data = r;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.ui.render(this.data);
  }
  rendered() {
    return this.checkMaxElemCount(), this.ui.onRendered();
  }
  /**
   * Validate data: check if Image exists
   *
   * @param {ImageGalleryData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(r) {
    return !(!r.files || !r.files.length);
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {ImageGalleryData}
   */
  save() {
    const r = this.ui.nodes.caption;
    return this._data.caption = r.innerHTML, this.data;
  }
  /**
   * Makes buttons with tunes
   *
   * @public
   *
   * @returns {Element}
   */
  renderSettings() {
    return this.tunes.render(this.data);
  }
  /**
   * Set new image file
   *
   * @private
   *
   * @param {ImageGalleryDataFile} file - uploaded file data
   */
  appendImage(r) {
    if (r && r.url) {
      if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount)
        return;
      this._data.files.push(r), this.ui.appendImage(r), this.checkMaxElemCount();
    }
  }
  /**
   * Move image file
   *
   * @private
   *
   * @param {integer} from - target image old index
   * @param {integer} to - target image new index
   */
  moveImage(r, l) {
    l >= this._data.files.length && (l = this._data.files.length - 1), this._data.files.splice(l, 0, this._data.files.splice(r, 1)[0]);
  }
  /**
   * Delete image file
   *
   * @private
   *
   * @param {integer} id - image index
   */
  deleteImage(r) {
    this._data.files[r] !== void 0 && (this._data.files.splice(r, 1), this.checkMaxElemCount());
  }
  /**
   * Update image file data
   *
   * @private
   *
   * @param {integer} id - image index
   * @param {object} newData - new data to merge with existing file data
   */
  updateImage(r, l) {
    this._data.files[r] !== void 0 && (this._data.files[r] = { ...this._data.files[r], ...l });
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   *
   * @private
   *
   * @param {ImageGalleryData} data - data in Image Tool format
   */
  set data(r) {
    this._data.files = [], r.files && r.files.forEach((d) => {
      this.appendImage(d);
    }), this._data.caption = r.caption || "", this.ui.fillCaption(this._data.caption);
    let l = r.style || "gallery";
    this.styleToggled(l);
  }
  /**
   * Return Tool data
   *
   * @private
   *
   * @returns {ImageGalleryData}
   */
  get data() {
    return this._data;
  }
  /**
   * File uploading callback
   *
   * @private
   *
   * @param {UploadResponseFormat} response - uploading server response
   * @returns {void}
   */
  onUpload(r, l) {
    this.ui.removePreloader(l), r.success && r.file ? this.appendImage(r.file) : this.uploadingFailed("incorrect response: " + JSON.stringify(r));
  }
  /**
   * Handle uploader errors
   *
   * @private
   * @param {string} errorText - uploading error text
   * @returns {void}
   */
  uploadingFailed(r, l) {
    this.ui.removePreloader(l), console.log("Image Tool: uploading failed because of", r), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    });
  }
  /**
   * Callback fired when Block Tune is activated
   *
   * @private
   *
   * @param {string} tuneName - tune that has been clicked
   * @returns {void}
   */
  styleToggled(r) {
    this._data.style = r, this.ui.applyTune(r);
  }
  checkMaxElemCount() {
    this.ui.updateLimitCounter(this._data.files.length, this.config.maxElementCount), this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount ? this.ui.hideFileButton() : this.ui.showFileButton();
  }
}
export {
  U as default
};
