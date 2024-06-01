const { SlashCommandBuilder } = require('discord.js');
const { GuildCheck } = require('../../guild_permissions');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('certify')
		.setDescription('Certify command informantion on the server')
        .addStringOption(option =>
            option.setName("name")
                .setDescription("Type your name")
                .setMaxLength(20)
        ),
	
    async execute(interaction) {
		// console.log(interaction.user)
		// console.log(interaction.member)
    
        if(GuildCheck(interaction.member.guild.id)){
            const name = interaction.options.getString("name");
            await interaction.reply(`
                Hello, ${interaction.user.globalName} (${interaction.member.guild.name})!
                
                - Nome de exibição : ${interaction.user.globalName}
                
                - Nome do personagem : ${name}
            `);
        }

        else{
            await interaction.reply(`
               Acess Denied!!
            `);
        }
	},
};