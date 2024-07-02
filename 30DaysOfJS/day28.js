class EventEmitter {
  callbacks = [];

  subscribe(eventName, callback) {
    this.callbacks[eventName] ||= [];
    this.callbacks[eventName].push(callback);
    return {
      unsubscribe: () => {
        this.callbacks[eventName] = this.callbacks[eventName].filter(
          (cb) => cb !== callback
        );
        if (this.callbacks[eventName].length === 0) {
          delete this.callbacks[eventName];
        }
      },
    };
  }

  emit(eventName, args = []) {
    if (this.callbacks[eventName]) {
      return this.callbacks[eventName].map((callback) => callback(...args));
    }
    return [];
  }
}
