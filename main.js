// DEPLOY COMMANDS
require("./deploy-commands");

const { Colors } = require("./colors");
const ReportInterface = require("./interface/ReportInterface");

const dotenv = require("dotenv").config();
const {DISCORD_TOKEN} = process.env;

const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection,Events, GatewayIntentBits } = require("discord.js");
const { SERVICES } = require("./guild_permissions");
const client = new Client({ intents: [GatewayIntentBits.Guilds]}) //, IntentsBitField
client.commands = new Collection()

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
//console.log(foldersPath)

for (const folder of commandFolders) {
	//console.log(folder);

	if(folder == SERVICES.command_folder_used){
		//console.log(folder);
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
		
		for (const file of commandFiles) {
			// console.log(`${folder} -> ${file}`)
	
			const filePath = path.join(commandsPath, file);
			const command = require(filePath);
	
			if ('data' in command && 'execute' in command) {
				//console.log("Command's name: " + command.data.name)
				//console.log(command)
	
				client.commands.set(command.data.name, command);
			}
			
			else {
				console.log(Colors.RED + `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.` + Colors.END);
			}
		}

	}
}

try{
	client.once(Events.ClientReady, readyClient => {
		console.log(Colors.GREEN + "●" + Colors.END + " Ready! Logged in DISCORD!");
		console.log(Colors.GREEN + `└── Welcome! ${readyClient.user.tag} ` + Colors.END);
	});
	
	client.on(Events.InteractionCreate, async interaction => {
		if (!interaction.isChatInputCommand()) return;
	
		const command = interaction.client.commands.get(interaction.commandName);
	
		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}
	
		try {
			await command.execute(interaction);
		}
		
		catch (error) {
			console.error(error);
	
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'Ocorreu um erro ao tentar executar este comando!', ephemeral: true });
			}
			
			else {
				await interaction.reply({ content: 'Ocorreu um erro ao tentar executar este comando!', ephemeral: true });
			}
		}
	});

	// # [MODAL RESPONSE]
	client.on('interactionCreate', async interaction => {
		// console.log(client)
		// console.log(interaction.type)
		
		if (interaction.customId === 'report-user') {
			// ModalBuilder().setCustomId

			const report_req = new ReportInterface(
				interaction.fields.getTextInputValue('id_usuario'),
				interaction.fields.getTextInputValue('text_report')
			);
			console.log(report_req.toString());
			// TextInputBuilder().setCustomId
			
			// === SEND MESSAGE ON DISCORD SERVER ===
			await interaction.reply(`[-] Report enviado com sucesso! **Agradeço** por enviar a denuncia para a administração fazer análise!`);
		}
	});
	
	// Log in to Discord with your client's token
	client.login(DISCORD_TOKEN);
}

catch(ConnectTimeoutError){
	console.error(ConnectTimeoutError);
}