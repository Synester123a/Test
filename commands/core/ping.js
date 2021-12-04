const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`Letzter berechneter Heartbeat ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} vor **${client.ws.ping}ms** 🛰️`);
    },
};