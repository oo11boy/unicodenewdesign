import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, Site_URL } from '../../../../ApiUrl';

const Uploader = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${API_URL}/upload`, formData);
      setImageUrl(`../uploader/${response.data.filename}`);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/images`);
        setImages(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [imageUrl]);

  const handleDelete = async (image) => {
    try {
      await axios.delete(`${Api_URL}/images/${image}`);
      setImages(images.filter((img) => img !== image));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };
  const clickonimage=(image)=>{
    alert(`${Site_URL}/uploader/`+image)
    }
  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {imageUrl && (
          <div className="flex flex-col my-4">
            <img
              className="w-[300px] h-[300px] my-10 object-cover"
              src={imageUrl}
              alt="Uploaded"
            />
            <p>{imageUrl}</p>
          </div>
        )}
      </div>

      <div>
        <div className="flex mt-[10%] flex-wrap w-full justify-between">
          {images.map((image, index) => (
            <div
            onClick={()=>clickonimage(image)}
              key={index}
              className="w-[30%] my-2 border border-black relative"
            >
              <img
                className="w-full h-[200px] object-cover"
                src={`../uploader/${image}`}
                alt={`Image ${index}`}
              />
              <button
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(image)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Uploader;