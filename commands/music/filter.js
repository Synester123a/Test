module.exports = {
    name: 'filter',
    aliases: [],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Keine Musik wird derzeit abgespielt ${message.author}... erneut versuchen? ❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Bitte geben Sie einen gültigen Filter an, um ${message.author} zu aktivieren oder zu deaktivieren... erneut versuchen? ❌\n${actualFilter ? `Filter derzeit aktiv ${actualFilter} (${client.config.app.px}filter ${actualFilter} to disable it).\n` : ''}`);

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filter) return message.channel.send(`Dieser Filter existiert nicht ${message.author}... erneut versuchen? ❌\n${actualFilter ? `Filter derzeit aktiv ${actualFilter}.\n` : ''}Liste der verfügbaren Filter ${filters.map(x => `**${x}**`).join(', ')}.` );

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Der Filter ${filter} ist jetzt **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Erinnerung je länger die Musik ist, desto länger dauert dies.*`);
    },
};