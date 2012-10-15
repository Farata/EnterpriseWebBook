Enterprise Web Development: From Desktop to Mobile
===================

This ia a home of the new book (work in progress) «Enterprise Web Development. From Desktop to Mobile».
There are four co-authors of this book: Yakov Fain, Victor Rasputnis, Viktor Gamov, and Anatole Tartakovsky.
The book is released under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported [license](http://creativecommons.org/licenses/by-nc-sa/3.0/) meaning
you can both get a copy of the book for free or help to further improve it.
This book will be printed and available for purchase via [O'Reilly Media](http://oreilly.com/). Readers will have an option of purchasing this
book in a number of digital formats.

## Table Of Contents
* ### [Introduction](EnterpriseWebBook/blob/master/0_Introduction/Introduction.mdown)

* ### Part 1. Desktop
	* [Ch1. HTML5 and its New APIs](EnterpriseWebBook/blob/master/1_Desktop/01_html/ch1_html.mdown)
	* [Ch2. Advanced Intro to JavaScript](EnterpriseWebBook/blob/master/1_Desktop/02_JavaScript/ch2_advancedjs.mdown)
	* [Ch3. Mocking Up the “Save a Child” Web Site](EnterpriseWebBook/blob/master/1_Desktop/03_Mockup/ch3_mokup.mdown)
	* [Ch4. Using Ajax and JSON](#ch4)
	* [Ch5. Test-Driven Development with JavaScript](EnterpriseWebBook/blob/master/1_Desktop/05_Testing_JavaScript/Chapter_5_Test-Driven_Development_with_JavaScript.mdown)
	* [Ch6. «Save a Child» with JQuery framework](#ch6)
	* [Ch7. «Save a Child» with Ext JS framework](#ch7)
	* [Ch8. Replacing HTTP with WebSockets](EnterpriseWebBook/blob/master/1_Desktop/08_Websockets/Chapter_8_Replacing_HTTP_With_WebSockets.mdown)
	* [Ch9. Securing Web Applications](#ch9)
	* [Ch10. Large Scale JavaScript Projects](#ch10)

* ### Part 2. Mobile
	* [Ch11. Responsive Design: One Site Fits All](EnterpriseWebBook/blob/master/2_Mobile/11_responsive.mdown)
	* [Ch12. «Save a Child» With JQuery Mobile](#ch12)
	* [Ch13. «Save a Child» with Sencha Touch](#13)
	* [Ch14. Hybrid Applications: HTML + Native API](#14)

#<a name="ch4">Using Ajax and JSON</a>
After explaining the JSON data format we’ll deploy Save a Child under the remote Tomcat server on one of our servers. We’ll also provide the instructions on installing Tomcat on the local machine for those readers who want to do it.
Then goes the explanation of the AJAX way of retrieving data from the remote server without the need to refresh the entire page.
In the final version of the Web site the data feed will be organized by a Java program deployed under a Java EE server – we’ll use Oracle’s GlassFish 4.0 for being the leader in implementing all the latest Java EE specifications.

#<a name="ch6">«Save a Child» with JQuery framework</a>
In this chapter we’ll start introducing JQuery framework to Save a Child code developed in chapters 2-5. While this chapter won’t have a formal tutorial on the JQuery framework, we’ll briefly explain its basics and each component that’ll be used in Save a Child.
By the end of this chapter the reader has a working version of Save a Child site built using HTML, JavaScript, CSS, JSon, Ajax, and JQuery framework.

#<a name="ch7">«Save a Child» with Ext JS framework»</a>
In this chapter we’ll use some of the code from ch 2-5, but this time we’ll use the Sencha’s Ext JS framework.
The reader will learn the principles of building Web sites with Ext JS.
We’ll demo the use of our own open source generator Clear Data Builder that can generate the EXT JS code based on Java classes.
By the end of this chapter the reader will have working version of the Save a Child Web site. We’ll also compare the pros and cons of its Ext JS and JQuery’s versions.

#<a name="ch9">Securing Web Applications</a>
This chapter will add authentication and authorization features for the users Save a child. They will be able to login to this Web site and perform different actions according to their role.

#<a name="ch10"></a>
The Save a Chile site is a rather small Web project. But in the enterprise world, lots of applications have a lot larger code base. In this chapter we’ll give an example of how to build modularized Web applications that can load the code on as needed basis. We’ll also give an example of how to organize the data exchange between different modules in a loosely coupled fashion.

#<a name="ch12">«Save a Child» With JQuery Mobile</a>
This chapter will demonstrate how to build the mobile version of Save a Child using JQuery Mobile framework.

#<a name="ch13">«Save a Child» with Sencha Touch</a>
This chapter will demonstrate how to build the mobile version of Save a Child using the Sencha Touch framework.

#<a name="ch14">Hybrid Applications: HTML + Native API</a>
This chapter explains how to add the bridge HTML and native mobile API with the Phone GAP framework. It’ll add the GPS service to the mobile version of “Save a Child”.

