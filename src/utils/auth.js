
class Auth {
    constructor() {
        this.isAuth = !!window.localStorage.getItem('auth_token');
        this.handlers = [];
    }

    authenticate(cb) {
        window.localStorage.setItem('auth_token', 1);
        this.isAuth = true;
        setTimeout(() => {
            cb && cb();
            this.fire();
        }, 100);
    }

    signOut(cb) {
        window.localStorage.removeItem('auth_token');
        this.isAuth = false;
        setTimeout(() => {
            cb && cb();
            this.fire();
        }, 100);
    }

    subscribe(handler) {
        this.handlers.push(handler);
    }

    unsubscribe(handler) {
        this.handlers = this.handlers.filter((item) => item !== handler ? item : false);
    }

    fire() {
        this.handlers.forEach((handler) => {
            handler(this.isAuth);
        });
    }

}

export default new Auth();
