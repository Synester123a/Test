module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Aktuelle Musik ${queue.current.title} wird fortgesetzt ✅` : `Etwas ist schief gelaufen ${message.author}... erneut versuchen? ❌`);
    },
};