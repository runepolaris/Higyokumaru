dependencies = require('../../package.json').dependencies;
util = require('util');
exports.exec = (client, message, msgArray, callback) => {
    if (message.author.id == client.config.ownerID) {
      message.channel.send('```js\n' + util.inspect(dependencies, { depth: 0 }) + '```');
    }
}