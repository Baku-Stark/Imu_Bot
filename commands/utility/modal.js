const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { GuildCheck } = require('../../guild_permissions');

const modalExample = new ModalBuilder()
    .setCustomId('fav-color')
    .setTitle('Fav Color?')

const TextInput = new TextInputBuilder()
    .setCustomId('favColorInput')
    .setLabel('Why is your fav color?')
    .setRequired(true)
    .setStyle(TextInputStyle.Short)


modalExample.addComponents(new ActionRowBuilder().addComponents(TextInput))
module.exports = {
    data: new SlashCommandBuilder()
        .setName("modal")
        .setDescription("Modal Test"),

    async execute(interaction){
        if(GuildCheck(interaction.member.guild.id)){
            await interaction.showModal(modalExample);
        }

        else{
            await interaction.reply(`
               **[x] Acess Denied!!**
            `);
        }
    }
}