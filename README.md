# MMM-NanoTTS [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/fewieden/MMM-TTS/master/LICENSE) [![Build Status](https://travis-ci.org/fewieden/MMM-TTS.svg?branch=master)](https://travis-ci.org/fewieden/MMM-TTS) [![Code Climate](https://codeclimate.com/github/fewieden/MMM-TTS/badges/gpa.svg?style=flat)](https://codeclimate.com/github/fewieden/MMM-TTS) [![Known Vulnerabilities](https://snyk.io/test/github/fewieden/mmm-tts/badge.svg)](https://snyk.io/test/github/fewieden/mmm-tts)

Text-To-Speech Module for MagicMirror<sup>2</sup> using [nanoTTS](https://github.com/gmn/nanotts). Forked from [MMM-TTS](https://github.com/fewieden/MMM-TTS).

## Installation

1. Clone this repo into `~/MagicMirror/modules` directory.
2. Configure your `~/MagicMirror/config/config.js`:

    ```
    {
        module: 'MMM-NanoTTS',
        position: 'top_right',
        config: {
            ...
        }
    }
    ```

3. Run command `npm install` in `~/MagicMirror/modules/MMM-NanoTTS` directory.
4. Install [`nanoTTS`](https://github.com/gmn/nanotts)

## Config Options

| **Option** | **Default** | **Description** |
| --- | --- | --- |
| `lang` | `en-US` | The TTS language. |
| `speed` | `1.0` | The TTS speed. |
| `pitch` | `1.0` | The TTS pitch. |
| `debug` | `false` | Display text to speech. |
| `text` | `'MMM-TTS'` | Text to display in debug mode, while there's no text to speech. |


## For Developers

To use MMM-NanoTTS in your module you have to send a socket notification like this `this.sendNotification('MMM-NanoTTS', 'This is a text to read. Hello World!');`.
