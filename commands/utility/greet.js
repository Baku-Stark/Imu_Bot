const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('greet')
		.setDescription('Greet the user')
        .addStringOption(option =>
            option.setName("age")
                .setDescription("Type your age")
                .setMaxLength(2)
        ),
	
    async execute(interaction) {
		// console.log(interaction.user)
		// console.log(interaction.member)
        const age = interaction.options.getString("age");

		await interaction.reply(`
			Hello, ${interaction.user.globalName} (${interaction.user.username})!
            
			- Nome de exibição : ${interaction.user.globalName}
            
            - Age : ${age} years old
		`);
	},
};