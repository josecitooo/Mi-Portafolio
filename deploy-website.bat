@echo off
echo ===================================================
echo  DESPLIEGUE AUTOMÁTICO A GITHUB PAGES
echo ===================================================
echo.

echo 1. Asegurando que los cambios estén en GitHub...
git push origin master
echo.

echo 2. Generando versión de producción...
call npm run build
echo.

echo 3. Preparando despliegue a GitHub Pages...
cd dist
git init
git add .
git commit -m "deploy: actualización del sitio %date% %time%"
echo.

echo 4. Subiendo a GitHub Pages...
git push -f https://github.com/josecitooo/Mi-Portafolio.git master:gh-pages
echo.

echo 5. Volviendo a la carpeta principal...
cd ..
echo.

echo ===================================================
echo  DESPLIEGUE COMPLETO
echo  Tu sitio estará disponible en unos minutos en:
echo  https://josecitooo.github.io/Mi-Portafolio/
echo ===================================================

pause