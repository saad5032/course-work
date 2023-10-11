import {Spinner} from "cli-spinner" // i am using spinner class so use {}
import chalk from "chalk"

function loading(msg){
    let spinner = new Spinner (chalk.red(msg))
    spinner.setSpinnerString('|/\\')
    spinner.start()
    return spinner

}

export default loading