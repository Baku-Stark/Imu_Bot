const { SlashCommandBuilder } = require('discord.js');
const { Guild_Roles } = require('../../guild_permissions');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Cumprimentar um usuário'),
	
    async execute(interaction) {
		// console.log(interaction.user)
		// console.log(interaction.member)

		// WALLE VERIFY
		if(interaction.member.roles.cache.has(Guild_Roles.adm) && interaction.user.id == "303321235679477760"){
			await interaction.reply(`
				# 👑 | ADM ONLINE !
			\nHello, ${interaction.user.globalName} (${interaction.user.username})! MEU PAI!!!
			- Nome de exibição : ${interaction.user.globalName}
			`);
		}

		// IZA VERIFY
		else if(interaction.member.roles.cache.has(Guild_Roles.adm) && interaction.user.id == "427678389495660547"){
			await interaction.reply(`
				# 👑 | ADM ONLINE !
			\nHello, ${interaction.user.globalName} (${interaction.user.username})! MINHA MÃE!!!
			- Nome de exibição : ${interaction.user.globalName}
			`);
		}

		// ADM VERIFY
		else if(interaction.member.roles.cache.has(Guild_Roles.adm)){
			await interaction.reply(`
				# 👑 | ADM ONLINE !
			\nHello, ${interaction.user.globalName} (${interaction.user.username})!
			- Nome de exibição : ${interaction.user.globalName}
			`);
		}

		else{
			await interaction.reply(`
				Hello, ${interaction.user.globalName} (${interaction.user.username})!
				
				- Nome de exibição : ${interaction.user.globalName}
			`);
		}
	},
};