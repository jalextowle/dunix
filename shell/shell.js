const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let current_directory
let commands = { 
  exit: () => {
    process.exit()
  }
}

function getCommandArray(command_line) {
  return command_line.split(/\s+/) 
}

function shell() {
  rl.question('dunix: ', (command_line) => {
    cmd_arr = getCommandArray(command_line)
    if (cmd_arr) {
      if (commands[cmd_arr[0]])      
        commands[cmd_arr[0]].apply(cmd_arr.slice(1, cmd_arr.length))
      else 
        console.log('-dunix: ' + cmd_arr[0] + ': command not found') 
    }
    shell()
  })
}

shell()
