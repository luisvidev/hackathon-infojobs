import { MAX_FILE_SIZE_1MB } from '../constants';

export const validateFileList = async (files: FileList | undefined) => {
  if (!files?.[0]) {
    return 'Debe cargarse un archivo .pdf';
  }

  if (files.length > 1)
    return 'Solo se permite cargar hasta un máximo de 3 archivos';

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file.size > MAX_FILE_SIZE_1MB) {
      return 'El tamaño de los archivos debe ser menor a  1 MB';
    }

    if (!file.type.toLowerCase().includes('pdf')) {
      return 'Solo se permite cargar archivos .pdf';
    }

    const typedArray = new Uint8Array(await file.arrayBuffer());
    const pdfDoc = await (window as any).pdfjsLib.getDocument(typedArray)
      .promise;
    const numPages = pdfDoc.numPages as number;

    if (numPages > 1)
      return `El PDF debe tener (1) página. (Número de páginas: ${numPages})`;
  }

  return true;
};
