// App.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PDFDocument, rgb } from 'pdf-lib';
import { Document, Packer, Paragraph, TextRun } from 'docx';

const templates = [
  { id: 'template1', name: 'Template 1' },
  { id: 'template2', name: 'Template 2' },
];

const App = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [previewMode, setPreviewMode] = useState('');

  const onSubmit = (data) => {
    setUserData(data);
  };

  const handleTemplateSelect = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const handlePreview = (mode) => {
    setPreviewMode(mode);
  };

  const handleDownload = () => {
    if (!userData || !selectedTemplate) return;

    if (previewMode === 'pdf') {
      downloadPdf();
    } else if (previewMode === 'docx') {
      downloadDocx();
    }
  };

  // Function to generate and preview/download PDF
  const downloadPdf = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { name, email } = userData;

    // Adding some basic text content
    page.drawText(`Template: ${selectedTemplate}`, { x: 50, y: 350, size: 20, color: rgb(0, 0, 0) });
    page.drawText(`Name: ${name}`, { x: 50, y: 320, size: 15 });
    page.drawText(`Email: ${email}`, { x: 50, y: 300, size: 15 });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    window.open(url); // Opens the PDF in a new tab for preview
  };

  // Function to generate and download DOCX
  const downloadDocx = () => {
    const { name, email } = userData;
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun(`Template: ${selectedTemplate}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Name: ${name}`),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun(`Email: ${email}`),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      const url = URL.createObjectURL(blob);
      window.open(url); // Opens the DOCX in a new tab for preview
    });
  };

  return (
    <div>
      {!userData ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Name" />
          <input {...register("email", { required: true })} placeholder="Email" />
          <button type="submit">Next</button>
        </form>
      ) : (
        <div>
          <h2>Select a Template</h2>
          {templates.map((template) => (
            <div key={template.id}>
              <label>
                <input
                  type="radio"
                  value={template.name}
                  checked={selectedTemplate === template.name}
                  onChange={handleTemplateSelect}
                />
                {template.name}
              </label>
            </div>
          ))}

          <h3>Select Preview Format</h3>
          <button onClick={() => handlePreview('pdf')}>Preview PDF</button>
          <button onClick={() => handlePreview('docx')}>Preview DOCX</button>

          {previewMode && (
            <div>
              <button onClick={handleDownload}>Download</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
