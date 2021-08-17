client.on("message", msg => {
  if (msg.content === "-bal") {
     msg.channel.send('Your current balance is ' + db.get(msg.author.id + '.bal') + '.');
  }
