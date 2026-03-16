/**
 * Toast - Toast notifications with queue management.
 * Bug #6 fix: removes existing toast before showing new one.
 */
export class ToastManager {
    constructor(eventBus) {
        this._currentToast = null;
        this._timeout = null;

        eventBus.on('toast:show', ({ en, ar }) => {
            this.show(en, ar);
        });
    }

    show(en, ar) {
        // Remove existing toast immediately (Bug #6 fix)
        if (this._currentToast) {
            clearTimeout(this._timeout);
            this._currentToast.remove();
            this._currentToast = null;
        }

        const toast = document.createElement('div');
        toast.className = 'learning-toast';
        toast.innerHTML = `
            <div>${en}</div>
            <div class="toast-ar">${ar}</div>
        `;
        document.body.appendChild(toast);
        this._currentToast = toast;

        // Trigger show animation
        setTimeout(() => toast.classList.add('show'), 50);

        // Auto-remove after 4s
        this._timeout = setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (this._currentToast === toast) {
                    toast.remove();
                    this._currentToast = null;
                }
            }, 400);
        }, 4000);
    }
}
