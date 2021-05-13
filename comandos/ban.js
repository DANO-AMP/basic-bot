const Discord = require('discord.js')

module.exports = (client, message, args) => { 


  if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
    return message.channel.send('No tengo permisos para banear personas')
  }
  
  if (!message.member.permissions.has('BAN_MEMBERS')) {
    return message.channel.send('Perdon, pero no tienes el permiso para banear personas')
  }
  
  let persona = message.mentions.members.first() || 
    message.guild.members.resolve(args[0])
  
  if (!persona) {
    return message.channel.send('Debe mencionar a alguien para banear')
  } else if(!persona.bannable){
    return message.channel.send('No puedo banear a esta persona')
  }else if (persona.roles.highest.comparePositionTo(message.member.roles.highest) > 0) {
    return message.channel.send('Esta persona esta en la misma o mayor nivel de jerarquia que tu, no puedes banearlo')
  }
  
  var razon = args.slice(1).join(' ')
  if (!razon) {
    razon = 'Razon no especificada'
  }
  
  razon += `, Baneado por ${message.author.tag}`
  
  message.guild.members.ban(persona, {
    reason: razon
  })
    .catch(e => message.reply('Ocurrio un **error** desconocido'))
    .then(() => {
      message.channel.send(`Listo, banee a **${persona.user.tag}**`)
    })


}