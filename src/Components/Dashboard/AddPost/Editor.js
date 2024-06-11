"use client";
import { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Editorme({ setFormData, formData }) {
  
  const editorRef = useRef(null);



  return (
    <>
      <Editor
        apiKey='5kozx5x8g9baw4r6kzplxy823yuwnq80gb7coiu263qxf6j8'
        onInit={(_evt, editor) => {
          editorRef.current = editor;
          
        }}
        
        value={formData.text}
        onEditorChange={(content) => setFormData({
            ...formData,
            text: content,
        })}
        init={{
          height: 500,
          menubar: true,
          directionality:"rtl",
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount', 'directionality'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            ' removeformat | code | image | help | rtl ltr',
      
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px;  }'
        }}
      />
    </>
  );
}
