import { getContext, onDestroy, setContext } from "svelte";

export class AlertState {
    // eslint-disable-next-line no-undef
    alerts = $state([]);
    alertToTimeoutMap = new Map();

    constructor() {
        onDestroy(() => {
            for (const timeout of this.alertToTimeoutMap.values()) {
                clearTimeout(timeout)
            }
            this.alertToTimeoutMap.clear();
        })
    }

    success(message, durationMs = 3000) {
        const id = crypto.randomUUID()
        this.alerts.push({
            id,
            message,
            'type': 'success'
        });
        this.alertToTimeoutMap.set(
            id,
            setTimeout(() => {
                this.remove(id)
            }, durationMs)
        );
    }

    warning(message, durationMs = 3000) {
        const id = crypto.randomUUID()
        this.alerts.push({
            id,
            message,
            'type': 'warning'
        });
        this.alertToTimeoutMap.set(
            id,
            setTimeout(() => {
                this.remove(id)
            }, durationMs)
        );
    }

    error(message, durationMs = 3000) {
        const id = crypto.randomUUID()
        this.alerts.push({
            id,
            message,
            'type': 'error'
        });
        this.alertToTimeoutMap.set(
            id,
            setTimeout(() => {
                this.remove(id)
            }, durationMs)
        );
    }
    // add(type, message, durationMs = 3000) {
    //     const id = crypto.randomUUID()
    //     this.alerts.push({
    //         id,
    //         message,
    //         type
    //     });
    //     this.alertToTimeoutMap.set(
    //         id,
    //         setTimeout(() => {
    //             this.remove(id)
    //         }, durationMs)
    //     );
    // }

    remove(id){
        const timeout = this.alertToTimeoutMap.get(id)
        if (timeout) {
            clearTimeout(timeout)
            this.alertToTimeoutMap.delete(id)
        }
        this.alerts = this.alerts.filter((alert) => alert.id !== id);
    }

}

const ALERT_KEY = Symbol('ALERT');

export function setAlertState() {
	return setContext(ALERT_KEY, new AlertState());
}

export function getAlertState() {
	return getContext(ALERT_KEY);
}