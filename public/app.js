(function () {
'use strict';

if(typeof global === "undefined" && typeof window !== "undefined") {
	window.global = window;
}

console.log("Hello World");

}());
