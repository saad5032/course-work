import chalk from "chalk";
const log = console.log

log(chalk.blue("hello")+'world'+chalk.red('!'))

//nest styles
console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring')+
    ' that becomes green again'
));


// es2015 template
// log(`
// CPU ${}`)