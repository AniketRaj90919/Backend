const fs =require("fs").promises
const fetch =require("node-fetch")

async function apnaGithub (userid){
    try{
        const user={id:userid,name:"AniketRaj90919"};
        console.log("Fetched user", user.name);
        const response = await fetch(`https://api.github.com/users/${user.name.
        toLowerCase()}`);
        const githubData= response.json();
        console.log("Github Bio:",githubData.bio ||"No Bio");
        await fs.writeFile("user-Data.txt", JSON.stringify({user,githubData}));
        console.log("Data save to a file");

    }catch(err){
        console.log("error", err.message);
    }
}

apnaGithub();