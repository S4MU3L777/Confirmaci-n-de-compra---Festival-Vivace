# Automatización de Reservas - Festival Vivace 🎶

Este proyecto consiste en un script desarrollado en **Google Apps Script** diseñado para optimizar el proceso de confirmación de asistencia y venta de entradas para el Festival de Música Vivace.

## 🚀 Problema a resolver
Originalmente, la confirmación de las reservas se realizaba de forma manual, lo que generaba retrasos en la comunicación con el asistente y posibles errores en la transcripción de datos de las entradas.

## 🛠️ Solución Técnica
Se implementó una solución que conecta **Google Forms** con **Gmail** mediante un trigger de envío de formulario (`onFormSubmit`). 

### Características principales:
- **Procesamiento en tiempo real:** Captura los datos del formulario (Nombre, Email, Cantidad de entradas) al instante.
- **Plantilla Dinámica HTML:** Genera un correo profesional con información crítica como ubicación por GPS (Google Maps), horarios y recordatorios de recogida de entradas.
- **Remitente Personalizado:** Configuración del alias del remitente para fortalecer la identidad visual del festival.

## 📈 Impacto
- **Eficiencia:** Reducción del tiempo de respuesta manual a 0 segundos.
- **Experiencia del Usuario:** Los asistentes reciben su confirmación inmediata con toda la información logística necesaria para el evento.

## 🧰 Tecnologías usadas
- **JavaScript / Google Apps Script**
- **Google Forms API**
- **Gmail Service (MailApp)**
