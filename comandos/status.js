const Discord = require('discord.js')

module.exports = (client, message, args) => { 
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("STATUS XYZ")
    .setColor(0x03fd0d)
    .setDescription("Aqui podras ver a tiempo real el estado de todas nuestras maquinas!!")
    .setURL("https://stats.uptimerobot.com/gMYN4ilvl3")
    .setThumbnail("https://cdn.discordapp.com/attachments/746349531087503448/808432645243273236/photos_host.png")
    .setFooter("XYZ HOST", client.user.avatarURL())
    .setTimestamp()
    
    
message.channel.send({ embed: embedDatos }); 

}