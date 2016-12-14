(function(){


// Main site JS file / bundle
// can be iife
// can be webpack
// can be anything JS, less than 500KB please.


// ensure no console errors or issues in older browsers
// check for service worker first
if(navigator.serviceWorker) {


  navigator.serviceWorker.register('/sw.js' /*  */)
    .then(function(regsitered) {
      console.log('yay! registered')
    }).catch(function() {
      console.log('oh no! somethings wrong')
    })
}

})()
