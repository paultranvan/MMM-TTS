/* global Module Log */

/* Magic Mirror
 * Module: MMM-TTS
 *
 * By fewieden https://github.com/fewieden/MMM-TTS
 *
 * MIT Licensed.
 */

Module.register("MMM-NanoTTS", {
    tts: "",

    defaults: {
        text: "MMM-NanoTTS",
        lang: "en-US",
        speed: 1,
        pitch: 1,
        debug: false
    },

    start() {
        Log.info(`Starting module: ${this.name}`);
        this.tts = this.config.text;
        this.sendSocketNotification("CONFIG", this.config);
    },

    notificationReceived(notification, payload) {
        if (notification === "MMM-NanoTTS") {
            const text = payload.text;
            this.sendSocketNotification("TTS", text);
            this.tts = payload;
            this.updateDom();
        }
    },

    socketNotificationReceived(notification) {
        if (notification === "HIDE") {
            this.tts = this.config.text;
            this.updateDom();
        }
    },

    getDom() {
        const wrapper = document.createElement("div");
        if (this.config.debug === true) {
            wrapper.classList.add("thin", "small", "bright");
            wrapper.innerHTML = this.tts;
        }
        return wrapper;
    }
});
