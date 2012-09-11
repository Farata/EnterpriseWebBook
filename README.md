Enterprise Web Development: From Desktop to Mobile
===================

This ia a home of the new book (work in progress) «Enterprise Web Development. From Desktop to Mobile».
There are four co-authors of this book: Yakov Fain, Victor Rasputnis, Viktor Gamov, and Anatole Tartakovsky.
The book is released under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported [license](http://creativecommons.org/licenses/by-nc-sa/3.0/) meaning
you can both get a copy of the book for free or help to further improve it.
This book will be printed and available for purchase via [O'Reilly Media](http://oreilly.com/). Readers will have an option of purchasing this
book in a number of digital formats.

## Table Of Contents
* ### [Introduction](0_Introduction/Introduction.mdown)

* ### Part 1. Desktop
	* [Ch1. HTML5 and its New APIs](#ch1)
	* [Ch2. Mocking Up the “Save a Child” Web Site](#ch2)
	* [Ch3. Advanced Intro to JavaScript](#ch3)
	* [Ch4. Using Ajax and JSON](#ch4)
	* [Ch5. Test-Driven Development with JavaScript](#ch5)
	* [Ch6. «Save a Child» with JQuery framework](#ch6)
	* [Ch7. «Save a Child» with Ext JS framework](#ch7)
	* [Ch8. Replacing HTTP with WebSockets](#ch8)
	* [Ch9. Securing Web Applications](#ch9)
	* [Ch10. Large Scale JavaScript Projects](#ch10)

* ### Part 2. Mobile
	* [Ch11. Responsive Design: One Site Fits All](#ch11)
	* [Ch12. «Save a Child» With JQuery Mobile](#ch12)
	* [Ch13. «Save a Child» with Sencha Touch](#13)
	* [Ch14. Hybrid Applications: HTML + Native API](#14)

#<a name="ch1">HTML5 and its New APIs</a>
Provide a brief overview of all APIs that are included in HTML5 spec (Web Storage, WebSQL, Web Sockets, Web Workers). List the browsers supporting HTML5. Is it safe to start an HTML5 project since not all Web browsers fully support HTML5?

#<a name="ch2">Mocking Up the «Save a Child» Web Site</a>
Create a  mock up of the sample Web site Save a Child that supports donations to ill children. The Web site has to support videos, images and be integrated with some payments system. The mockup should include three versions of the UI: desktop, tablet, smart phone.
By the end of this chapter the HTML version of Save a Child is ready with hardcoded data.

#<a name="ch3">Advanced Intro to JavaScript</a>
This chapter should cover the JavaScript language overview based on the «Advanced Intro to JavaScript» presentation : Objects, Functions, Closures, JS in the Web Browser. All examples should be re-written as building blocks for the «Save a Child» site. Coverage of the tools (IDE, Web inspectors and debuggers go here too).
By the end of this chapter we’ll have a new version of Save a Child, which includes some scripts in JavaScript. All the data are stored in a plain text format in local files.

#<a name="ch4">Using Ajax and JSON</a>
After explaining the JSON data format we’ll deploy Save a Child under the remote Tomcat server on one of our servers. We’ll also provide the instructions on installing Tomcat on the local machine for those readers who want to do it.
Then goes the explanation of the AJAX way of retrieving data from the remote server without the need to refresh the entire page.
In the final version of the Web site the data feed will be organized by a Java program deployed under a Java EE server – we’ll use Oracle’s GlassFish 4.0 for being the leader in implementing all the latest Java EE specifications.

#<a name="ch5">Test-Driven Development with JavaScript</a>
The chapter starts with a brief overview of available test frameworks. Then, it explains how to set up a new Save a Child  project in the IDE using selected test framework.

#<a name="ch6">«Save a Child» with JQuery framework</a>
In this chapter we’ll start introducing JQuery framework to Save a Child code developed in chapters 2-5. While this chapter won’t have a formal tutorial on the JQuery framework, we’ll briefly explain its basics and each component that’ll be used in Save a Child.
By the end of this chapter the reader has a working version of Save a Child site built using HTML, JavaScript, CSS, JSon, Ajax, and JQuery framework.

#<a name="ch7">«Save a Child» with Ext JS framework»</a>
In this chapter we’ll use some of the code from ch 2-5, but this time we’ll use the Sencha’s Ext JS framework.
The reader will learn the principles of building Web sites with Ext JS.
We’ll demo the use of our own open source generator Clear Data Builder that can generate the EXT JS code based on Java classes.
By the end of this chapter the reader will have working version of the Save a Child Web site. We’ll also compare the pros and cons of its Ext JS and JQuery’s versions.
#<a name="ch8">Replacing HTTP with WebSockets</a>
This chapter will introduce the WebSocket API, which is a part of HTML5 spec. We’ll pick one of the data flow in Save a Child site and replace HTTP communication with WebSockets protocol.
Using the monitoring tool we’ll show the performance bandwidth usage benefits that WebSockets protocol brings to the Web.
This chapter will be based on [this WebSockets presentation](http://www.youtube.com/watch?v=vP6MfPnE1c0).

#<a name="ch9">Securing Web Applications</a>
This chapter will add authentication and authorization features for the users Save a child. They will be able to login to this Web site and perform different actions according to their role.

#<a name="ch10"></a>
The Save a Chile site is a rather small Web project. But in the enterprise world, lots of applications have a lot larger code base. In this chapter we’ll give an example of how to build modularized Web applications that can load the code on as needed basis. We’ll also give an example of how to organize the data exchange between different modules in a loosely coupled fashion.

#<a name="ch11">Responsive Design: One Site Fits All</a>
The chapter starts with a brief overview of different approaches to making the Web site to the mobile space. One of the approaches is having only one Web site for all devices. This approach is is called Responsive Design, and we’ll modify the design of the Save a Child site to introduce different layouts for the desktop, tablet, and smartphone devices.
By the end of this chapter the site Save a Child will automatically change its layout based on the user’s device without the losing any functionality.

#<a name="ch12">«Save a Child» With JQuery Mobile</a>
This chapter will demonstrate how to build the mobile version of Save a Child using JQuery Mobile framework.

#<a name="ch13">«Save a Child» with Sencha Touch</a>
This chapter will demonstrate how to build the mobile version of Save a Child using the Sencha Touch framework.

#<a name="ch14">Hybrid Applications: HTML + Native API</a>
This chapter explains how to add the bridge HTML and native mobile API with the Phone GAP framework. It’ll add the GPS service to the mobile version of “Save a Child”.
