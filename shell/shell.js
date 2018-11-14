const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function shell() {
  rl.question('dunix: ', (command) => {
    if (command == 'exit') 
      process.exit()
    else 
      // FIXME - The commands need to actually be run
      shell()
  })
}

shell()
