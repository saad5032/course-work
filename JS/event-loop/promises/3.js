import axios from "axios";
import chalk from "chalk";
import readLineSync from "readline-sync"
import { Spinner } from "cli-spinner";

function main(){
    const username = readLineSync.question(chalk.yellow("Enter your user name : "));
    var spinner = new Spinner("Loading from Server..%s");
    spinner.setSpinnerString("|/-\\");
    spinner.start();

    setTimeout(() => {
        //axios.get(link) -> is a promise and .then() is how we consume that promise as shown below 
        axios
        .get(`https://api.github.com/users/${username}`)   // promise
        .then((res)=>{         // .then method to consume the promise
            console.log(res.data);
            console.log(chalk.bgCyanBright(res.data.followers, "Followers"));
            spinner.stop(true)
        })
        .catch((err)=>{
            console.log(err);
            spinner.stop(true)
        })
    }, 2000);

}
main()