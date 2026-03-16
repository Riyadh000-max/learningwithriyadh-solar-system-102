/**
 * SpeechManager - Web Speech API wrapper.
 * Listens to speech:play events and handles TTS.
 */
export class SpeechManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this._currentElement = null;

        eventBus.on('speech:play', ({ text, element }) => {
            this.speak(text, element);
        });
    }

    speak(text, element) {
        if (!window.speechSynthesis) return;

        try {
            window.speechSynthesis.cancel();

            // Clear previous playing state
            if (this._currentElement) {
                this._currentElement.classList.remove('playing');
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;

            utterance.onstart = () => {
                if (element) element.classList.add('playing');
                this._currentElement = element;
            };

            utterance.onend = () => {
                if (element) element.classList.remove('playing');
                this._currentElement = null;
            };

            utterance.onerror = () => {
                if (element) element.classList.remove('playing');
                this._currentElement = null;
            };

            window.speechSynthesis.speak(utterance);
        } catch (e) {
            // Speech synthesis unavailable
        }
    }
}
