const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Verify information about current user'),
	
    async execute(interaction) {
		// console.log(interaction.user)
		// console.log(interaction.member)

		await interaction.reply(`
			[+] **${interaction.user.username}**

			- ID : ${interaction.user.id}
			
			- Nome de exibição : ${interaction.user.globalName}
		`);
	},
};