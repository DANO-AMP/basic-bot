const Discord = require('discord.js')

module.exports = (client, message, args) => { 
    const embedDatos = new Discord.MessageEmbed() 
    .setTitle("Instalacion Node")
    .setColor(0xeff80f)
    .setDescription("**1.-** bash <(curl -s https://pterodactyl-installer.se) \n **Opcion 1 (Wings)** \n\n **2.-** Configurar el panel con el node (nano /etc/pterodactyl/config.yml) \n **PD: modo puente para el cloudfare** \n\n **3.-** systemctl restart wings. (Node contentado con el panel)\n\n **4.-** SQL \nCREATE USER 'newuser'@'%' IDENTIFIED BY 'password'; \nGRANT ALL PRIVILEGES ON *.* TO 'newuser'@'%';\n  FLUSH PRIVILEGES;  \n\n **5.-** Vincular la SQL con le panel\n\n **6.-** Otros \n sudo ufw --force disable \n sudo ufw --force reset")
    .setThumbnail("https://cdn.discordapp.com/attachments/746349531087503448/808432645243273236/photos_host.png")
    .setFooter("XYZ HOST", client.user.avatarURL())
    .setTimestamp()
    
    
message.channel.send({ embed: embedDatos }); 

}