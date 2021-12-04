module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Aktuelle Musik ${queue.current.title} übersprungen ✅` : `Etwas ist schief gelaufen ${message.author}... erneut versuchen? ❌`);
    },
};