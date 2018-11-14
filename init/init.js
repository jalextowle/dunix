const async = require('async')
const fs = require('fs-extra')

module.exports = (root) => {
  if (root) {
    // FIXME - At the moment, the root will not be used
  } else {
    async.waterfall([
      (callback) => {
        fs.exists('.dunix', (exists) => { 
          callback(null, exists) 
        })
      },
      (exists, callback) => {
        if (exists) 
          console.log('dunix has already been initialized')
        else 
          fs.mkdir('.dunix', (error) => { callback(error) })
      }, 
      (callback) => {
        fs.writeFile('./.dunix/root', '', (error) => { callback(error) })
      }, 
      (callback) => {
        fs.writeFile('./.dunix/home', '', (error) => { callback(error) })
      }
    ], (error) => {
      if (error) {
        console.log(error)
        return
      } 
    })
  }
}
