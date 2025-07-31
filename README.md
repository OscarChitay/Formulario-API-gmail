# 📧 Formulario de Contacto con API de Gmail

Una aplicación web moderna y responsiva que permite a los usuarios enviar mensajes de contacto directamente a tu email usando FormSubmit.

## 🚀 Características

- **Interfaz moderna y responsiva** - Se adapta a cualquier dispositivo
- **Validación en tiempo real** - Feedback inmediato al usuario
- **Envío de emails automático** - Integración con FormSubmit API
- **Experiencia de usuario mejorada** - Estados de carga y mensajes informativos
- **Accesibilidad** - Cumple con estándares de accesibilidad web
- **Sin backend requerido** - Funciona completamente en el frontend

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos modernos y responsive design
- **JavaScript (ES6+)** - Funcionalidad interactiva y validaciones
- **FormSubmit API** - Servicio de envío de emails

## 📁 Estructura del Proyecto

```
Formulario API gmail/
│
├── index.html                 # Página principal
├── README.md                 # Documentación del proyecto
│
└── assets/
    ├── js/
    │   └── app.js            # Lógica de la aplicación
    └── styles/
        └── styles.css        # Estilos CSS
```

## 🔧 Instalación y Configuración

### Prerrequisitos

- Un navegador web moderno
- Un servidor web local (opcional, para desarrollo)

### Configuración

1. **Clona o descarga el proyecto**
   ```bash
   git clone [URL-del-repositorio]
   cd "Formulario API gmail"
   ```

2. **Configura tu email en el archivo JavaScript**
   
   Abre `assets/js/app.js` y modifica la línea 2:
   ```javascript
   const API_URL = "https://formsubmit.co/tu-email@gmail.com";
   ```
   Reemplaza `tu-email@gmail.com` con tu dirección de email real.

3. **Ejecuta la aplicación**
   
   **Opción A: Abrir directamente**
   - Abre `index.html` en tu navegador

   **Opción B: Servidor local (recomendado)**
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js (si tienes http-server instalado)
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

## 📋 Funcionalidades

### Validaciones Implementadas

- **Nombre**: Mínimo 2 caracteres, solo letras y espacios
- **Email**: Formato de email válido
- **Mensaje**: Mínimo 10 caracteres

### Estados de la Aplicación

- **Estado inicial**: Formulario listo para usar
- **Estado de validación**: Errores mostrados en tiempo real
- **Estado de envío**: Botón deshabilitado con indicador de carga
- **Estado de éxito**: Mensaje de confirmación y formulario limpio
- **Estado de error**: Mensaje de error con sugerencias

## 🎨 Personalización

### Cambiar Estilos

Edita `assets/styles/styles.css` para modificar:
- Colores del tema
- Tipografía
- Espaciados y dimensiones
- Efectos y animaciones

### Modificar Validaciones

En `assets/js/app.js`, función `validateFormData()`:
```javascript
function validateFormData(data) {
  const errors = [];
  
  // Personaliza las validaciones aquí
  if (!data.nombre || data.nombre.length < 2) {
    errors.push("El nombre debe tener al menos 2 caracteres");
  }
  
  // Agrega más validaciones según necesites
  
  return errors;
}
```

### Agregar Campos

1. Añade el campo en `index.html`
2. Incluye la validación en `validateFormData()`
3. Agrega los estilos correspondientes en `styles.css`

## 🔒 Seguridad y Privacidad

- **FormSubmit** maneja el envío de emails de forma segura
- Los datos se envían a través de HTTPS
- No se almacenan datos en el navegador
- Validación tanto en frontend como en el servicio

## 🌐 Navegadores Compatibles

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Dispositivos móviles (320px+)
- 📲 Tablets (768px+)
- 💻 Escritorio (1024px+)

## 🐛 Solución de Problemas

### El formulario no envía emails

1. Verifica que el email en `app.js` sea correcto
2. Asegúrate de que FormSubmit no esté bloqueado
3. Revisa la consola del navegador para errores

### Errores de CORS

- Usa un servidor web local en lugar de abrir el archivo directamente
- FormSubmit requiere que las solicitudes vengan de un servidor

### Validaciones no funcionan

- Verifica que JavaScript esté habilitado
- Comprueba la consola para errores de sintaxis

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Oscar** - [oscarchitayy@gmail.com](mailto:oscarchitayy@gmail.com)

## 🔗 Enlaces Útiles

- [FormSubmit Documentation](https://formsubmit.co/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

---

⭐ Si este proyecto te fue útil, no olvides darle una estrella!
