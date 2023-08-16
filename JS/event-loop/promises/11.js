import axios from "axios";
import chalk from "chalk";
import readLineSync from "readline-sync"
import { Spinner } from "cli-spinner";

function main(){
    const username = readLineSync.question(chalk.yellow("Enter your user name : "));
    var spinner = new Spinner("Loading from Server..%s");
    spinner.setSpinnerString("|/-\\");
    spinner.start();

    setTimeout(async () => {
        //axios.get(link) -> is a promise and using async inside settimeout 
        //and await to execute log statements in asyn part is like executing syncronous fashion that is line 1 after line 2
        try{  // try catch is important as it will break the server i.e., stops executing so you need to restart the server
        const res = await axios.get(`https://api.github.com/users/${username}`)  // api is a special link which has data in json format to perform array or other manipulations
        console.log(res.data);
        console.log(chalk.bgCyanBright(res.data.followers, "Followers"));
        spinner.stop(true)
        }catch (error){
            console.log(error);
            spinner.stop(true)
        }
    }, 2000);

}
main()