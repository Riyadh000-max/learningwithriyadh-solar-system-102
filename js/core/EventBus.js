/**
 * EventBus - Central pub/sub event system.
 * All modules communicate through this instead of calling each other directly.
 */
export class EventBus {
    constructor() {
        this._listeners = new Map();
    }

    on(event, callback) {
        if (!this._listeners.has(event)) {
            this._listeners.set(event, []);
        }
        this._listeners.get(event).push(callback);
        return () => this.off(event, callback);
    }

    off(event, callback) {
        const callbacks = this._listeners.get(event);
        if (callbacks) {
            const index = callbacks.indexOf(callback);
            if (index > -1) callbacks.splice(index, 1);
        }
    }

    emit(event, data) {
        const callbacks = this._listeners.get(event);
        if (callbacks) {
            callbacks.forEach(cb => cb(data));
        }
    }
}

export const eventBus = new EventBus();
