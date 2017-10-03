Front End Frameworks
====================

There are several prominent frontend UI frameworks that are popular today.  Of the three that I tested, all 3 are fairly mature, with several major releases in the last 3+ years.

## Angular

One of the older "modern" UI frameworks, Angular was hailed as a groundbreaking achievement from it's first release in 2010.

### Features/Description

* The HTML is treated as declarative, with a lot of logic being contained within the markup ("directives")
* The concept of scopes
* Two way data binding
  * Used for form inputs, displaying data, etc.
* Built in router for Single Page Applications

### Mark's Comments

Angular is a very mature framework with a very large community behind it.  I had no trouble recreating the simple TODO app using the latest version of Angular.  The declarative markup makes for super easy data binding, but the result is a monolithic HTML document that is a little intimidating to look at.  Also, there was a lot of boilerplate joining all of the functionality together.  Angular seems apt for very large companies who want a tried and true framework with the support of a very large company (Google) behind them.

### Final Verdict

Would not recommend

## React

Even though React is almost 4 years old, it's recently been making waves as Facebook continues to release newer and better versions.  Perhaps one of the most "hip" frameworks, React's design allows for developers to create and share components in an incredibly easy and standard way.

### Features/Description

* The actual HTML file served to the browser is very minimal, usually containing only a single `<div>`
* Markup is written directly in special javascript files called `jsx` files (see more [here](https://facebook.github.io/jsx/))
* Uses an advanced DOM diffing algorithm to only update elements as needed
* Server-side rendering is entirely possible
* Components are usually simple and shareable, leading to a large ecosystem of components

### Mark's Comments

React has been on my radar for some time, and now that I've used it, I can see why there's so much hype.  The concept of writing XML directly in javascript files can seem a little confusing at first, but there's so much great tooling already available for almost every major IDE/text editor.  After writing a few components, using them together to create the TODO app felt easy and natural.

### Final Verdict

Would recommend

## Knockout

Knockout and Angular are very similar in a lot of ways.  Both use declarative markup to control large parts of their app.  Where they differ is the * of the MV* pattern.  Knockout trades the traditional controller for the ViewModel pattern instead, which leads to a different style of frontend design.

### Features/Description

* Declarative HTML, just like Angular
* Two way data binding, just like Angular
* Heavy use of observable objects
* ViewModels are used to connect the Model to the View
* Not as popular as either of the other two frameworks

### Mark's Comments

Knockout takes a similar approach to Angular in a lot of ways.  However, the community is much smaller and the documentation isn't quite as clear as I'd like.  Using ViewModels instead of Controllers worked out, but I'd rather stick to a more traditional MVC model rather than use the MVVM pattern.  Knockout is a great framework for small, simple apps, but the resulting code can be unwieldy and bloated

### Final Verdict

Would not recommend
