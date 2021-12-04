module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Vor ${message.author} wurde keine Musik abgespielt... erneut versuchen? ❌`);

        await queue.back();

        message.channel.send(`Wiedergabe des **vorherigen** Titels ✅`);
    },
};