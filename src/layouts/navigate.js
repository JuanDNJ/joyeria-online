// Se envuelve el código en una función autoinvocada para no contaminar el ámbito global.
(() => {
    // Se añade un listener para el evento "navigate" de la API de navegación.
    window.navigation.addEventListener("navigate", (event) => {
        // Se verifica que la navegación no sea de descarga, no incluya datos de formulario y que se pueda interceptar.
        if (!event.downloadRequest && !event.formData && event.canIntercept) {
            // Se intercepta el evento de navegación para controlarlo.
            event.intercept({
                commit: "after-transition", // Se indica que la acción se confirmará después de la transición.
                async handler() {
                    // Lanza una excepción si la señal de abortado ha sido activada.
                    event.signal.throwIfAborted();
                    // Realiza la solicitud mediante Fetch API utilizando el método GET a la URL de destino.
                    const response = await fetch(event.destination.url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/html', // Indica que el contenido esperado es HTML.
                            'Accept': 'text/html',       // Especifica que se aceptan respuestas en formato HTML.
                        },
                    });
                    // Se obtiene el contenido HTML de la respuesta.
                    const htmlContent = await response.text();
                    // Aquí podrías procesar htmlContent o actualizar la vista de la aplicación.
                },
            });
        }
    });

    // Listener para el evento de error en la navegación interceptada.
    window.navigation.addEventListener("navigateerror", (event) => {
        // Se registra en consola el error producido durante la navegación.
        console.error("Intercepted navigateerror: ", event.error, event);
    });

    // Listener para el evento de éxito en la navegación interceptada.
    window.navigation.addEventListener("navigatesuccess", (event) => {
        // Se registra en consola la información del evento de navegación exitosa.
        console.log("Intercepted navigatesuccess: ", event);
    });
})();