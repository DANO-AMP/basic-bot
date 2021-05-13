const Discord = require('discord.js')

module.exports = (client, message, args) => { 
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Comandos")
    .setColor(0xfd0303)
    .setDescription("**!status** - Estado de las maquinas en tiempo real 📈 \n\n **!web** - web de XYZ 🌐 \n\n **!panel** - Panel de clientes 👤 \n\n **!fivemcode** - Invitacion de Fivem code 📩\n\n **!invitacion** - Invitacion del discord 📩 ")
    .setThumbnail("https://cdn.discordapp.com/attachments/746349531087503448/808432645243273236/photos_host.png")
    .setFooter("XYZ HOST", client.user.avatarURL())
    .setTimestamp()
    
    
message.channel.send({ embed: embedDatos }); 

}