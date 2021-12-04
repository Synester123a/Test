const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Sie müssen zuerst die aktuelle Musik im Loop-Modus deaktivieren (${client.config.app.px}loop) ${message.author}... erneut versuchen? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Wiederholungsmodus **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** die ganze Warteschlange wird endlos wiederholt 🔁` : `Etwas ist schief gelaufen ${message.author}... erneut versuchen ? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Sie müssen zuerst die aktuelle Warteschlange im Schleifenmodus deaktivieren (${client.config.app.px}Schleifenwarteschlange) ${message.author}... erneut versuchen? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Wiederholungsmodus **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** die aktuelle Musik wird endlos wiederholt (Sie können die Warteschlange mit der Option <queue> durchlaufen) 🔂` : `Etwas ist schief gelaufen ${message.author}... erneut versuchen? ❌`);
        };
    },
};