// array of questions for user
const questions = [
    {
        type:"input",
        message:"github name?", 
        name:"github",
        validate: answer => answer === "" ? "github username can't be blank" : true,
    },
    {
        type:"input",
        message:"email?", 
        name:"email",
        validate: answer => {
            const re = /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i;
            if (!re.test(answer)) {
                return "That email looks a bit fishy";
            }
            return true;
        },
    },
    {
        type:"input",
        message:"project name?", 
        name:"title",
        validate: answer => answer === "" ? "Going to need an answer pal" : true,
    },
    {
        type:"input",
        message:"project description?", 
        name:"description",
        validate: answer => answer === "" ? "Short can be sweet, but blank isn't going to cut it" : true,
    },
    {
        type:"list",
        message:"license?", 
        choices: ["MIT", "Apache", "None"],
        name:"license",
        validate: answer => answer === "" ? "All your own work? WOW! Type N/A though if it's not required" : true,
    },
    {
        type:"input",
        message:"installation?", 
        name:"installation",
        default: "npm i",
        validate: answer => answer === "" ? "Type N/A if not required" : true,
    },
    {
        type:"input",
        message:"tests?", 
        name:"tests",
        default: "npm test",
        validate: answer => answer === "" ? "No tests? Sloppy. You're going to have to have something here" : true,
    },
    {
        type:"input",
        message:"usage?", 
        name:"usage",
        default: "node index.js",
        validate: answer => answer === "" ? "Your users are going to need a bit of help. Don't be mean" : true,
    },
    {
        type:"input",
        message:"contributions?", 
        name:"contribution",
        validate: answer => answer === "" ? "All your own work? WOW! Type N/A though if it's not required" : true,
    },
];

export default questions