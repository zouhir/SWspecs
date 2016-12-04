navigator.serviceWorker.register('/sw.js' /*, scope */)
  .then(function(done) {
    console.log('Registered 🎉')
  })
  .catch(function(error) {
    console.log('Crap 🤒')
  })


/**
 * SW can have another, object, optional parameter
 * it can contain the scope
 * {
 *    scope: '/app/'
 * }
 */

/**
 * Scope test: /app/
 *
 *  /app/sydpwa ✅
 *  /app 🚫
 */
