const Discord = require('discord.js')

module.exports = (client, message)  => { 
 
   
            const embedDatos = new Discord.MessageEmbed() 
            .setTitle("Bienvenid@ **XYZ HOST**")
            .setColor(0x033bfd)
            .setDescription(`${message.user} Pasalo bien y Disfruta!! `)
            .setThumbnail("https://cdn.discordapp.com/attachments/746349531087503448/808432645243273236/photos_host.png") // Aqui va la img del imgur
            .setFooter("XYZ HOST", client.user.avatarURL())
            .setTimestamp()    
    
            // message.channel.send({ embed: embedDatos }); 
            client.channels.cache.get('808440521508782081').send({ embed: embedDatos })  // lo envia al canal que le pasamos por cache

    }


 

