const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { GuildCheck, Bot_Images, Guild_Images } = require('../../guild_permissions'); 

const EmbedAjuda = new EmbedBuilder()
	.setColor(0x111111)
	.setTitle('Imu Sama [Discord Bot]')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Imu Bot', /*iconURL: Bot_Images.icon,*/ url: 'https://discord.js.org' })
	.setDescription(`
        **Imu Sama [Discord Bot]**
        **Criador**: [Baku-Stark](https://github.com/Baku-Stark)
        Projeto com implementação CRUD pra administração do sistema baseado em 'RPG'.
    `)
	.setThumbnail(Guild_Images.logo)
	.addFields(
        { name: "**──────── ｢ 火 ｣ ────────**", value: ":pen:"},
		{ name: "● `ficha_persona`", value: "Comando para ativar o modal do servidor e criar uma ficha de personagem." },
		{ name: '\u200B', value: '\u200B' }, // --- ESPAÇAMENTO ---
	)
	//.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	//.setImage(Guild_Images.logo)
	.setTimestamp()
	.setFooter({text: "Spright Universe [RPG]", iconURL: Guild_Images.logo });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ajuda')
		.setDescription('Embed com instruções de ajuda'),
	
    async execute(interaction) {
        if(GuildCheck(interaction.member.guild.id)){
            await interaction.reply({embeds: [EmbedAjuda]});
        }

        else{
            await interaction.reply(`
               **[x] Access Denied!!**
            `);
        }
	},
};