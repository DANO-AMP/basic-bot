module.exports = (client) => {
  
    client.user.setPresence( 
      {
        status: "online", 
        activity: { 
          name: 'panel.danonino.xyz', 
          url: "https://panel.danonino.xyz/", // Establece el enlace del juego si el tipo es "STREAMING".
          type: "PLAYING"
        }
      }
    );
   
    
  }