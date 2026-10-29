# Portafolio de Jose Carlos Fernandez

Portafolio profesional construido con React, Vite, Tailwind CSS y Framer Motion. La interfaz utiliza un neumorfismo moderado: superficies claras, relieve sutil, contraste accesible y animaciones discretas.

## Desarrollo local

```powershell
npm install
npm run dev
```

Para comprobar la compilación de producción:

```powershell
npm run build
npm run preview
```

El proyecto conserva la base `/Mi-Portafolio/` necesaria para GitHub Pages. Para publicar, usa `npm run deploy` o el script existente `deploy-website.bat` después de revisar los cambios.

## Certificaciones manuales

Los certificados existentes están en `public/assets/certificates/` y sus datos de presentación se centralizan en [src/data/portfolio.js](./src/data/portfolio.js). Para agregar uno manualmente:

1. Copia la imagen o PDF a `public/assets/certificates/`.
2. Agrega una entrada al arreglo `certificates` en `src/data/portfolio.js` con `title`, `issuer`, `date`, `category`, `description`, `image` y `link`.
3. Usa una ruta que empiece por `/Mi-Portafolio/assets/certificates/` en producción, igual que las entradas existentes.

La tarjeta y la vista ampliada se generan desde ese único arreglo; no es necesario modificar `Certificates.jsx`.

## Importación masiva local

Coloca imágenes o PDF en `public/assets/certifications/inbox/` y ejecuta desde Windows:

```powershell
py scripts/import-certificates.py
```

El script copia los archivos sin sobrescribir destinos existentes, genera previews JPG de la primera página de los PDF usando PyMuPDF y genera/actualiza `src/data/certificates.json`. Instala el renderizador local una vez con `py -m pip install PyMuPDF`. Los nombres de archivo se convierten en títulos provisionales y quedan marcados con `needsReview: true`; revisa institución, fecha, descripción, categoría y enlace antes de publicar. No hay subida a servicios externos. La extracción OCR no se ejecuta automáticamente para evitar dependencias y falsos datos; si se necesita, puede habilitarse localmente con Pillow, Tesseract y `pytesseract`.

## Diploma universitario

La sección **Formación** está preparada para mostrar el diploma en grande y abrirlo en un modal. Coloca la imagen verificada en:

```text
public/assets/academic/TITULO ITLA.pdf
```

Si todavía no existe, la página muestra un marcador sin inventar datos. Si reemplazas el archivo, actualiza la constante `diplomaImage` en `src/components/Academic.jsx`.

## CV

La URL está centralizada en `siteConfig.cvUrl` dentro de `src/data/portfolio.js`. El valor actual apunta al archivo estable `public/assets/Jose Carlos Fernandez CV.pdf`. Para usar Google Drive u OneDrive, reemplaza únicamente esa URL con un enlace de compartir que pueda abrirse sin autenticación y prueba el botón en una ventana privada; los enlaces de visualización no siempre sirven como descarga directa.

## Contacto por Web3Forms y WhatsApp

El formulario de contacto usa Web3Forms y el botón de WhatsApp usa el número centralizado en [src/data/contact.js](./src/data/contact.js).

### Configurar Web3Forms

1. Entra a [web3forms.com](https://web3forms.com/) y crea una cuenta.
2. Registra y verifica el correo receptor `fernandezjosecarlos61@gmail.com`.
3. Crea un Access Key para ese correo.
4. Copia `.env.example` como `.env.local` y pega tu clave:

   ```text
   VITE_WEB3FORMS_ACCESS_KEY=tu_clave_real
   ```

5. Reinicia Vite después de crear o cambiar `.env.local`:

   ```powershell
   npm run dev
   ```

6. Prueba un envío real desde **Contáctame** y confirma que llegue al correo receptor.

En GitHub Pages, cualquier variable `VITE_*` se incorpora al JavaScript generado y puede ser visible para visitantes. El Access Key de Web3Forms está diseñado para usarse desde el frontend, pero no es un secreto privado: nunca subas `.env.local` al repositorio. El proyecto solo incluye `.env.example`.

El formulario valida los campos en el navegador, incluye un honeypot contra bots, deshabilita el botón durante el envío y solo muestra éxito cuando Web3Forms devuelve una respuesta exitosa. Si el servicio falla, muestra un error real y no simula el envío.

### WhatsApp

El número está centralizado en `contactConfig.whatsappNumber` y usa formato internacional sin `+`, espacios ni guiones. El botón abre `wa.me` con un mensaje profesional precargado; el visitante debe revisar y enviar el mensaje manualmente desde WhatsApp o WhatsApp Web.

## Intervención manual pendiente

- Confirmar la fecha exacta de graduación y reemplazar el marcador del diploma cuando el archivo esté disponible.
- Revisar los campos marcados por el importador antes de publicarlos.
- Verificar periódicamente que las credenciales externas continúen accesibles.
