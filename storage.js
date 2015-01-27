/*
 * Storage.js - v1.0 - 2015-01-26
 * Created by Andreas Nylin
 * andreas.nylin@gmail.com / @andreasnylin / andreasnylin.com
 */
(function(win){
	'use strict';

	win.Storage = function(name) {

		return new function() {

			this.name = name;
			this.data = JSON.parse(localStorage.getItem(name)) || {};

			this.get = function(itemName) {
				return this.data[itemName];
			};

			this.set = function(itemName, value) {
				this.data[itemName] = value;
				localStorage.setItem(this.name, JSON.stringify(this.data));
			};
		}

	}
})(window);