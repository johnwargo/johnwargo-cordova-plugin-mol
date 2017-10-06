# Apache Cordova Meaning Of Life Plugin

This project contains a simple JavaScript-only plugin for Apache Cordova. I created this plugin to use as one of the examples in chapter 16 of my [Apache Cordova 4 Programming](http://cordova4programming.com/) book. The plugin calculates the "Answer to The Ultimate Question of Life, the Universe, and Everything" (From Douglas Adams' The Hitchhiker's Guide to the Galaxy). Basically, when a Cordova app invokes one of the methods, the plugin returns the number 42. You'll have to be a fan of the book to understand why. :-)

## Installation

To add the plugin to one of your Cordova projects, open a terminal window, navigate to the Cordova project folder, and execute the following command:

	cordova plugin add johnwargo-cordova-plugin-mol

## Usage

The plugin exposes two methods:

+	`calculateMOL` - Asynchronous, returns its result through execution of a callback function
+	`calculateMOLSync` - Synchronous, returns its result immediately

To use the Async version, execute the `calculateMOL` method, and, in the call's parameters, pass in a function you want executed with the result: 

	function doMOLAsync() {  
	  var res = mol.calculateMOL(molCallback);
	}
	
	function molCallback(res) {  
	  var msg = "Result: " + res;
	  console.log(msg);
	  navigator.notification.alert(msg, null, "MOL", "Continue");
	  console.log("Leaving molCallback");
	}

To use the synchronous version, simply call the `calculateMOLSync` method and process the result returned by the method: 
 
	function doMOLSync() {
	  var res = mol.calculateMOLSync();
	  var msg = "Result: " + res;
	  console.log(msg);
	  navigator.notification.alert(msg, null, "MOL", "Continue");
	}

Is this a useful plugin? No. I simply wrote it to show that it's possible to create a Cordova plugin that doesn't have any native platform code in it.


***

If you find this code useful, and feel like thanking me for providing it, please consider making a purchase from [my Amazon Wish List](https://amzn.com/w/1WI6AAUKPT5P9). You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com). 