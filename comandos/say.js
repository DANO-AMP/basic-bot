const Discord = require('discord.js')

module.exports = (client, message, args) => { 
    let texto = args.join(' ');
    if(!texto) return message.channel.send('Debe escribir un mensaje.')
    message.channel.send(texto); 
  
  }
  