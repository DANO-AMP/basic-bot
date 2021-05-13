const Discord = require('discord.js')

module.exports = (client, message, args) => { 
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Free Hosting")
    .setColor(0xfd0303)
    .setDescription("Ofrecemos hosting gratis!! Primero de todo el hosting de gratis vais a tener algunas limitaciones de momento tenemos solo disponible para hosting gratis **Fivem** y **Bots de Discord** Aprovechar no tenemos slots limitados!! \n\n Para mas informacion crea ticket <#809133745872961536> ")
    .setThumbnail("https://cdn.discordapp.com/attachments/746349531087503448/808432645243273236/photos_host.png")
    .setFooter("XYZ HOST", client.user.avatarURL())
    .setTimestamp()
    
    
message.channel.send({ embed: embedDatos }); 

}