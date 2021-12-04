player.on('error', (queue, error) => {
    console.log(`Von der Warteschlange ${error.message} ausgegebener Fehler`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Von der Verbindung ausgegebener Fehler ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Spielt ${track.title} in **${queue.connection.channel.name}** ab 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Track ${track.title} zur Warteschlange hinzugefügt ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Ich wurde manuell vom Sprachkanal getrennt, Warteschlange wird geleert... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Niemand ist im Sprachkanal, verlässt den Sprachkanal... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Ich habe die ganze Warteschlange zu Ende gelesen ✅');
});