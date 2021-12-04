const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Derzeit wird keine Musik abgespielt ${message.author}... erneut versuchen? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Das aktuelle Volumen ist ${queue.volume} 🔊\n*Um das Volumen zu ändern, geben Sie eine gültige Zahl zwischen **1** und **${maxVol}** ein.*`);

        if (queue.volume === vol) return message.channel.send(`Das Volume, das Sie ändern möchten, ist bereits das aktuelle ${message.author}... erneut versuchen? ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Die angegebene Nummer ist ungültig. Geben Sie eine Zahl zwischen **1** und **${maxVol}** ${message.author} ein... erneut versuchen? ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Die Lautstärke wurde auf **${vol}**/**${maxVol}**% geändert 🔊` : `Etwas ist schief gelaufen ${message.author}... erneut versuchen? ❌`);
    },
};