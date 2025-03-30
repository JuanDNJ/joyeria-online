// Se declara en el ámbito global que Window tendrá una propiedad "navigation"
// que a su vez posee un método "navigate" con las opciones definidas.
declare global {
    interface Navigation {
        // Método navigate encargado de realizar una acción de navegación
        // según la URL y las opciones especificadas.
        navigate(url: string, options: {
            state?: Record<string, unknown>;
            info?: Record<string, unknown>;
            history?: 'auto' | 'replace' | 'push' | 'replaceAll';
        }): void;
    }

    interface Window {
        // Se define que window tendrá una propiedad navigation de tipo Navigation.
        navigation: Navigation;
    }
}

// Función goTo que recibe una URL y realiza la navegación usando window.navigation.
// Retorna el objeto Navigation si existe, o undefined en caso contrario.
const goTo = (url: string): Navigation | void => {
    // Se valida que window.navigation esté definido para evitar errores en tiempo de ejecución.
    if (!window.navigation) {
        console.error("La API de navegación no está disponible en window.navigation");
        return;
    }
    
    // Se llama al método navigate pasando la URL y un objeto con opciones adicionales.
    // - state: Puede contener valores para mantener un estado extra, aquí se define un fondo de modal.
    // - info: Información adicional de la navegación, indicando la dirección de la misma.
    // - history: Controla cómo se maneja el historial (en este caso se realiza un 'push').
    window.navigation.navigate(url, {
        state: {
            modalBackgroundUrl: '/fedd', // Valor de estado adicional.
        },
        info: {
            direction: 'from-up', // Información sobre la dirección de animación/navegación.
        },
        history: "auto" // Se añade la nueva navegación al historial.
    });
    
    // Se retorna el objeto window.navigation para que pueda ser utilizado posteriormente.
    return window.navigation;
}

// Se exporta la función goTo para poder ser utilizada en otros módulos.
export {
    goTo
}