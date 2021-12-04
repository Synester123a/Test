module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Keine Musik in der Warteschlange nach der aktuellen ${message.author}... erneut versuchen? ❌`);

        await queue.clear();

        message.channel.send(`Die Warteschlange wurde gerade geräumt 🗑️`);
    },
};