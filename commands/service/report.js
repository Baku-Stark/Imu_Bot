const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { GuildCheck, Guild_Roles } = require('../../guild_permissions');

const modalExample = new ModalBuilder()
    .setCustomId('report-user')
    .setTitle('Denúncia')

const IDUsuarioInput = new TextInputBuilder()
    .setCustomId('id_usuario')
    .setLabel('ID do usuário')
    .setRequired(true)
    .setStyle(TextInputStyle.Short)
    .setMinLength(1)
    .setMaxLength(18)

const TextInput = new TextInputBuilder()
    .setCustomId('text_report')
    .setLabel('Qual o motivo da reclamação?')
    .setRequired(true)
    .setStyle(TextInputStyle.Paragraph)
    .setMinLength(1)
    .setMaxLength(200)


modalExample.addComponents(new ActionRowBuilder().addComponents(IDUsuarioInput))
modalExample.addComponents(new ActionRowBuilder().addComponents(TextInput))
module.exports = {
    data: new SlashCommandBuilder()
        .setName("report_usuario")
        .setDescription("Reportar um usuário"),

    async execute(interaction){
        if(GuildCheck(interaction.member.guild.id)){
            await interaction.showModal(modalExample);
        }

        else{
            await interaction.reply(`
               **[x] Access Denied!!**
            `);
        }
    }
}