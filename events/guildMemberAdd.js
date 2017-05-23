exports.exec = (client) => {
  return (member) => {
    if (!client.config.selfbot) {
      client.getDB('config_' + member.guild.id).then(() => {
        if (result = JSON.parse(client.dbCache['config_' + member.guild.id])) result = result.welcome;
        else result = undefined;
        if (result == undefined || result !== false) {
          result = result || "Welcome [member] to [guild]! Enjoy your stay!";
          result = result.replace(/\[member]/g, member).replace(/\[guild]/g, member.guild);
          member.guild.defaultChannel.send(result);
        }
      });
    }
  }
}