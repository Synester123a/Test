module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        message.author.send(`Du hast den Titel ${queue.current.title} gespeichert | ${queue.current.author} vom Server${message.guild.name} ✅`).then(() => {
            message.channel.send(`Ich habe dir den Titel der Musik per Privatnachricht geschickt ✅`);
        }).catch(error => {
            message.channel.send(`Kann Ihnen keine private Nachricht senden ${message.author}... erneut versuchen? ❌`);
        });
    },
};