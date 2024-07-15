const { SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { GuildCheck, Guild_Roles } = require('../../guild_permissions');

const modalExample = new ModalBuilder()
    .setCustomId('new-persona')
    .setTitle('Ficha de Personagem')

const NomeInput = new TextInputBuilder()
    .setCustomId('nome_persona')
    .setLabel('Nome do personagem')
    .setRequired(true)
    .setStyle(TextInputStyle.Short)
    .setMinLength(1)
    .setMaxLength(50)

const IdadeInput = new TextInputBuilder()
    .setCustomId('idade_persona')
    .setLabel('Idade do personagem')
    .setRequired(true)
    .setStyle(TextInputStyle.Short)
    .setMinLength(1)
    .setMaxLength(4)

const SexoInput = new TextInputBuilder()
    .setCustomId('sexo_persona')
    .setLabel('Sexo de personagem')
    .setPlaceholder('Masculino, Feminino, Não-Binário, etc...')
    .setRequired(true)
    .setStyle(TextInputStyle.Short)
    .setMinLength(1)
    .setMaxLength(50)

const AlturaInput = new TextInputBuilder()
    .setCustomId('altura_persona')
    .setLabel('Altura do personagem')
    .setRequired(true)
    .setStyle(TextInputStyle.Short)
    .setMinLength(1)
    .setMaxLength(50)

const PesoInput = new TextInputBuilder()
    .setCustomId('peso_persona')
    .setLabel('Peso do personagem')
    .setRequired(true)
    .setStyle(TextInputStyle.Short)
    .setMinLength(1)
    .setMaxLength(50)


modalExample.addComponents(new ActionRowBuilder().addComponents(NomeInput))
modalExample.addComponents(new ActionRowBuilder().addComponents(IdadeInput))
modalExample.addComponents(new ActionRowBuilder().addComponents(SexoInput))
modalExample.addComponents(new ActionRowBuilder().addComponents(AlturaInput))
modalExample.addComponents(new ActionRowBuilder().addComponents(PesoInput))
module.exports = {
    data: new SlashCommandBuilder()
        .setName("ficha_persona")
        .setDescription("Criação de personagem"),

    async execute(interaction){
        if(GuildCheck(interaction.member.guild.id)){
            if (interaction.member.roles.cache.has(Guild_Roles.adm) || interaction.member.roles.cache.has(Guild_Roles.avaliador_fichas)){
                await interaction.showModal(modalExample);
            }

            else{
                await interaction.showModal("Você não tem permissão para ativar este comando")
            }
        }

        else{
            await interaction.reply(`
               **[x] Acess Denied!!**
            `);
        }
    }
}