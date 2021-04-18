/* Magic Mirror
 * Module: MMM-TTS
 *
 * By fewieden https://github.com/fewieden/MMM-TTS
 *
 * MIT Licensed.
 */

/* eslint-env node */

const NodeHelper = require("node_helper");
const { exec } = require("child_process");

module.exports = NodeHelper.create({
    start() {
        console.log(`Starting node helper for: ${this.name}`);
    },

    socketNotificationReceived(notification, payload) {
        if (notification === "CONFIG") {
            this.config = payload;
        } else if (notification === "TTS") {
            const modulePath = `modules/${this.name}/`;
            const cmd =
                `${modulePath}/nanotts.sh ` +
                `"${payload}" ` +
                `${this.config.lang} ` +
                `${this.config.speed} ` +
                `${this.config.pitch} `;
            exec(cmd, (err, stdout, stderr) => {
                if (err) {
                    console.error(err);
                }
                this.sendSocketNotification("HIDE", {});
            });
        }
    }
});
