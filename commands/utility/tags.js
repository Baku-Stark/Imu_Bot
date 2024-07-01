const { SlashCommandBuilder } = require('discord.js');
const { Guild_Roles } = require('../../guild_permissions');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tags')
		.setDescription('Leitura de Tags'),
	
    async execute(interaction) {
		// console.log(interaction.user)
        //console.log(interaction.member.roles.cache)
		//console.log(interaction.member.roles.cache.has(Guild_Roles.adm))

		await interaction.reply(`
			Hello, ${interaction.user.globalName} (${interaction.user.username})!
            
			- Nome de exibição : ${interaction.user.globalName}
		`);
	},
};