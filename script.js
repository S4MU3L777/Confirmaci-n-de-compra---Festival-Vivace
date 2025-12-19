function enviarConfirmacion(e) {
  // Obtenemos los datos del formulario
  var nombre = e.namedValues["Nombre completo"][0];
  var entradas = e.namedValues["Número de entradas"][0];
  var email = e.namedValues["Dirección de correo electrónico"][0];

  // Personaliza el asunto y el mensaje
  var asunto = "Confirmación de reserva - Concierto";
  var mensaje = "Hola " + nombre + ",<br><br>" +
                "Gracias por tu compra. Hemos recibido tu registro y confirmamos tu reserva para el día domingo 22:<br><br>" +
                "🎟️ Número de entradas: " + entradas + "<br><br>" +
                "📍 Lugar: <a href='https://maps.app.goo.gl/pJ72TUMAmNDv4NF88'>Capilla del Seminario San Luis</a><br>" +
                "🕖 Hora: 19:30<br>" +
                "⏰ Puedes recoger tus entradas desde una hora antes de la función.<br><br>" +
                "Tu comprobante de pago será validado y te enviaremos un mensaje adicional al WhatsApp si es que se requiriera alguna verificación.<br><br>" +
                "¡Nos vemos en el concierto! 🎶<br><br>" +
                "Saludos,<br>Organización del Evento";

  // Enviar correo con HTML
  MailApp.sendEmail({
    to: email,
    subject: asunto,
    htmlBody: mensaje,
    name: "Festival Vivace"
  });
}

function onFormSubmit(e) {
  enviarConfirmacion(e);
}
