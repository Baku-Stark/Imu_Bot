const dotenv = require("dotenv").config();
const {DISCORD_TOKEN, CLIENT_ID, GUILD_ID} = process.env
// console.log({DISCORD_TOKEN, CLIENT_ID, GUILD_ID})

const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

const commands = [];
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);

		if ('data' in command && 'execute' in command) {
            //console.log(command.data.toJSON())
			commands.push(command.data.toJSON());
		}
        
        else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(DISCORD_TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
			{ body: commands },
		);

        console.log(data)
		console.log(`[+] Successfully reloaded ${data.length} application (/) commands.`);
	}
    
    catch (error){ 
		console.error(error);
	}

})();