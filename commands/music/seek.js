const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Die angegebene Zeit ist höher als die Gesamtzeit des aktuellen Songs ${message.author}... erneut versuchen? ❌\n*Versuchen Sie zum Beispiel eine gültige Zeit wie **5s, 10s, 20 Sekunden, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`Zeiteinstellung für das aktuelle Lied **${ms(timeToMS, { long: true })}** ✅`);
    },
};