module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Aktuelle Musik ${queue.current.title} pausiert ✅` : `Etwas ist schief gelaufen ${message.author}... erneut versuchen? ❌`);
    },
};