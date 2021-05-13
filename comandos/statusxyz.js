const Discord = require('discord.js')

module.exports = (client, message, args) => { 
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Status Nodes")
    .setColor(0xD703FC)
    .setDescription(" 📍 Esado del node 1: **Funcionado con normalidad**   \n\n   📍 Esado del node 1: **Funcionado con normalidad** ")
    .setFooter("XYZ HOST", client.user.avatarURL())
    .setTimestamp()
    
    
message.channel.send({ embed: embedDatos }); 

}