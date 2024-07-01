const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Cumprimentar um usuário'),
	
    async execute(interaction) {
		// console.log(interaction.user)
		// console.log(interaction.member)

		await interaction.reply(`
			Hello, ${interaction.user.globalName} (${interaction.user.username})!
            
			- Nome de exibição : ${interaction.user.globalName}
		`);
	},
};