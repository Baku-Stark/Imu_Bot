const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { GuildCheck, Bot_Images } = require('../../guild_permissions'); 

const exampleEmbed = new EmbedBuilder()
	.setColor(0x111111)
	.setTitle('Imu-Sama Discord Bot')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Imu Bot', iconURL: Bot_Images.icon, url: 'https://discord.js.org' })
	.setDescription('Imu Sama  [Discord Bot]\nCriador: https://github.com/Baku-Stark \nProjeto com implementação CRUD pra administração do sistema baseado em `RPG`.')
	.setThumbnail(Bot_Images.banner)
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });


module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Server embed test'),
	
    async execute(interaction) {
        // console.log(interaction)
		// console.log(interaction.user)
        // console.log(GuildCheck(interaction.member.guild.id))
		
		// console.log(`[${interaction.commandName}]: ${interaction.member.guild.id}`)
        
        if(GuildCheck(interaction.member.guild.id)){
            await interaction.reply({embeds: [exampleEmbed]});
        }

        else{
            await interaction.reply(`
               **[x] Acess Denied!!**
            `);
        }
	},
};