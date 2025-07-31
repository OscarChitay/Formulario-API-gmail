// Configuración de la API
const API_URL = "https://formsubmit.co/oscarchitayy@gmail.com";
// Elementos del DOM
const contactForm = document.getElementById("contactForm");
const submitButton = contactForm.querySelector('button[type="submit"]');

// Función para mostrar mensajes de estado
function showMessage(message, isSuccess = true) {
  // Remover mensaje anterior si existe
  const existingMessage = document.querySelector('.form-message');
  if (existingMessage) {
    existingMessage.remove();
  }

  // Crear nuevo mensaje
  const messageDiv = document.createElement('div');
  messageDiv.className = `form-message ${isSuccess ? 'success' : 'error'}`;
  messageDiv.textContent = message;

  // Insertar mensaje antes del botón
  submitButton.parentNode.insertBefore(messageDiv, submitButton);

  // Remover mensaje después de 5 segundos
  setTimeout(() => {
    messageDiv.remove();
  }, 5000);
}

// Función para validar los datos del formulario
function validateFormData(data) {
  const errors = [];

  if (!data.nombre || data.nombre.length < 2) {
    errors.push("El nombre debe tener al menos 2 caracteres");
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Ingresa un correo electrónico válido");
  }

  if (!data.mensaje || data.mensaje.length < 10) {
    errors.push("El mensaje debe tener al menos 10 caracteres");
  }

  return errors;
}

// Función para cambiar el estado del botón
function setButtonState(isLoading) {
  if (isLoading) {
    submitButton.disabled = true;
    submitButton.textContent = "Enviando...";
    submitButton.style.opacity = "0.7";
  } else {
    submitButton.disabled = false;
    submitButton.textContent = "Enviar mensaje";
    submitButton.style.opacity = "1";
  }
}

// Evento principal del formulario
contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Obtener datos del formulario
  const formData = new FormData(e.target);
  const data = {
    nombre: formData.get('nombre').trim(),
    email: formData.get('email').trim(),
    mensaje: formData.get('mensaje').trim()
  };

  // Validar datos
  const validationErrors = validateFormData(data);
  if (validationErrors.length > 0) {
    showMessage(validationErrors[0], false);
    return;
  }

  // Cambiar estado del botón
  setButtonState(true);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      showMessage("¡Mensaje enviado con éxito! Te responderemos pronto.", true);
      e.target.reset();
    } else {
      const errorData = await response.text();
      console.error('Error del servidor:', errorData);
      showMessage("Error del servidor. Por favor, intenta más tarde.", false);
    }

  } catch (error) {
    console.error('Error de conexión:', error);
    showMessage("Error de conexión. Verifica tu internet e intenta nuevamente.", false);
  } finally {
    setButtonState(false);
  }
});

// Validación en tiempo real (opcional)
contactForm.querySelectorAll('input, textarea').forEach(field => {
  field.addEventListener('blur', function () {
    const fieldData = {};
    fieldData[this.name] = this.value.trim();

    const errors = validateFormData({
      nombre: this.name === 'nombre' ? this.value.trim() : 'valid',
      email: this.name === 'email' ? this.value.trim() : 'valid@email.com',
      mensaje: this.name === 'mensaje' ? this.value.trim() : 'valid message text'
    });

    // Remover clases de error previas
    this.classList.remove('error');

    // Si hay error en este campo específico, marcarlo
    if (this.name === 'nombre' && this.value.trim().length < 2 && this.value.trim().length > 0) {
      this.classList.add('error');
    } else if (this.name === 'email' && this.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value.trim())) {
      this.classList.add('error');
    } else if (this.name === 'mensaje' && this.value.trim().length < 10 && this.value.trim().length > 0) {
      this.classList.add('error');
    }
  });
});