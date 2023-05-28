export const getTextFromPdf = async (file: File) => {
  const typedArray = new Uint8Array(await file.arrayBuffer());
  const pdfDoc = await (window as any).pdfjsLib.getDocument(typedArray).promise;
  const page = await pdfDoc.getPage(1);
  const content = (await page.getTextContent()) as {
    items: Array<{ str: string }>;
  };
  const textContent = content.items.map((item) => item.str).join(' ');
  return textContent;
};
