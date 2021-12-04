module.exports = {
    app: {
        px: 'y.',
        token: 'ODk2NDQ4OTA2MTk4NjU1MDA2.YWHRGg.0fZUP2IRHCzXM9KI66jPHqpjIqg',
        playing: `y.help | ${client.guilds.cache.size} Servern`
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
