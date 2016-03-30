function EventManager( prototype ) {
	prototype.initEventManager	= function() {
		this.eventCallbacks	= {};
	}
	prototype.on	= function(eventName, callback) {
		this.eventCallbacks[eventName] = this.eventCallbacks[eventName] || [];
		this.eventCallbacks[eventName].push(callback);
	}
	prototype.emit	= function(eventName, data) {
		var self = this;
		if(this.eventCallbacks[eventName]) {
			this.eventCallbacks[eventName].forEach(function(callback) {
				callback(data, self);
			});
		}
	}
	prototype.disposeEventManager = function() {
		var eventName;
		for(eventName in this.eventCallbacks) {
			this.eventCallbacks[eventName].splice(0, this.eventCallbacks[eventName].length);
		}
		this.eventCallbacks = {};
	}
}

module.exports = EventManager;
