
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, UploadCloud, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';



const Certificates = () => {
  const [certificates, setCertificates] = useState(() => {
    const savedCertificates = localStorage.getItem('portfolioCertificates');
    return savedCertificates ? JSON.parse(savedCertificates) : [];
  });
  const [newCertificate, setNewCertificate] = useState({ title: '', issuer: '', date: '', link: '', imageFile: null, imagePreview: null });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCertificate(prev => ({ ...prev, [name]: value }));
  };

  

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewCertificate(prev => ({
        ...prev,
        imageFile: file,
        imagePreview: reader.result, // Imagen en formato Base64
      }));
    };
    reader.readAsDataURL(file); // Convierte la imagen a Base64
  }
};

const handleAddCertificate = (e) => {
  e.preventDefault();
  if (!newCertificate.title || !newCertificate.issuer || !newCertificate.date) {
    toast({
      title: "Error",
      description: "Por favor, completa los campos obligatorios (Título, Emisor, Fecha).",
      variant: "destructive",
    });
    return;
  }

  const newCert = {
    id: Date.now(),
    ...newCertificate,
    imageAlt: `Certificado de ${newCertificate.title}`,
    imageDesc: `Certificado de ${newCertificate.title} emitido por ${newCertificate.issuer}`,
  };

  const updatedCertificates = [...certificates, newCert];
  setCertificates(updatedCertificates);
  localStorage.setItem('portfolioCertificates', JSON.stringify(updatedCertificates));

  setNewCertificate({ title: '', issuer: '', date: '', link: '', imageFile: null, imagePreview: null });
  setIsDialogOpen(false);
  toast({
    title: "Certificado Añadido",
    description: "Tu nuevo certificado ha sido añadido exitosamente.",
  });
};

  const handleDeleteCertificate = (id) => {
    const updatedCertificates = certificates.filter(cert => cert.id !== id);
    setCertificates(updatedCertificates);
    localStorage.setItem('portfolioCertificates', JSON.stringify(updatedCertificates));
    toast({
      title: "Certificado Eliminado",
      description: "El certificado ha sido eliminado.",
      variant: "destructive"
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mis <span className="gradient-text">Certificados</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Aquí puedes ver algunos de los certificados que he obtenido a lo largo de mi carrera profesional.
        </motion.p>
      </div>

    {/* El siguiente codigo contiene una condicional para que el boton de agregar un certificado solo le aparezca al developer, o sea, yo jejeeje */}

     {process.env.NODE_ENV === 'development' && (
      <div className="text-center mb-8">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-bg">
              <UploadCloud className="mr-2 h-4 w-4" /> Añadir Certificado
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Certificado</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAddCertificate} className="grid gap-4 py-4">
              <div>
                <Label htmlFor="title">Título del Certificado</Label>
                <Input id="title" name="title" value={newCertificate.title} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="issuer">Emisor</Label>
                <Input id="issuer" name="issuer" value={newCertificate.issuer} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="date">Fecha de Obtención</Label>
                <Input id="date" name="date" type="date" value={newCertificate.date} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="link">Enlace al Certificado (Opcional)</Label>
                <Input id="link" name="link" value={newCertificate.link} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="imageFile">Imagen del Certificado (Opcional)</Label>
                <Input id="imageFile" name="imageFile" type="file" accept="image/*" onChange={handleFileChange} />
              </div>
              {newCertificate.imagePreview && (
                <div className="mt-2">
                  <img src={newCertificate.imagePreview} alt="Vista previa del certificado" className="max-w-full h-auto rounded-md border" />
                </div>
              )}
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancelar</Button>
                </DialogClose>
                <Button type="submit">Guardar Certificado</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
     )}

      
      {certificates.length === 0 && (
        <motion.p 
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Aún no has añadido ningún certificado. ¡Haz clic en "Añadir Certificado" para empezar!
        </motion.p>
      )}
      


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 relative"


          >



            {/* El siguiente codigo contiene una condicional para que el boton de eliminar un certificado solo le aparezca al developer, o sea, yo jejeeje */}
            {process.env.NODE_ENV === 'development' && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 text-red-500 hover:bg-red-100"
              onClick={() => handleDeleteCertificate(cert.id)}
              aria-label="Eliminar certificado"
            >
              <X className="h-4 w-4" />
            </Button>
           )}

            {cert.imagePreview ? (
              <div className="w-full h-40 mb-4 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src={cert.imagePreview} alt={cert.imageAlt} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-full h-40 mb-4 rounded-md bg-gray-100 flex items-center justify-center">
                <Award className="w-16 h-16 text-gray-400" />
              </div>
            )}

            <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-600 mb-1">Emitido por: {cert.issuer}</p>
            <p className="text-sm text-gray-500 mb-3">Fecha: {new Date(cert.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {cert.link && (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver Certificado <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
