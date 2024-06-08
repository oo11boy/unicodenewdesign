"use client";
import React, { useState, useEffect } from "react";
import { S3 } from "aws-sdk";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [permanentLink, setPermanentLink] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [allFiles, setAllFiles] = useState([]);
  const [buckets, setBuckets] = useState([]);

  const ACCESSKEY = "dm5bekgv5u89h3lo"; // or process.env.LIARA_ACCESS_KEY;
  const SECRETKEY = "5fbb0390-da2d-439b-a8c0-2ba629b3203d"; //  or process.env.LIARA_SECRET_KEY;
  const ENDPOINT = "https://storage.iran.liara.space"; //   or process.env.LIARA_ENDPOINT;
  const BUCKET = "unicodewebdesign"; //    or process.env.LIARA_BUCKET_NAME;

  const fetchBuckets = async () => {
    const s3 = new S3({
      accessKeyId: ACCESSKEY,
      secretAccessKey: SECRETKEY,
      endpoint: ENDPOINT,
    });
    try {
      const response = await s3.listBuckets().promise();
      setBuckets(response.Buckets);
    } catch (error) {
      console.error("Error fetching buckets: ", error);
    }
  };

  const fetchAllFiles = async () => {
    const s3 = new S3({
      accessKeyId: ACCESSKEY,
      secretAccessKey: SECRETKEY,
      endpoint: ENDPOINT,
    });

    try {
      const response = await s3.listObjectsV2({ Bucket: BUCKET }).promise();
      setAllFiles(response.Contents);
    } catch (error) {
      console.error("Error fetching files: ", error);
    }
  };

  useEffect(() => {
    fetchBuckets();
    fetchAllFiles();
  }, [permanentLink]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setError(null);
    setPermanentLink(null);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        setError("Please select a file");
        return;
      }

      const s3 = new S3({
        accessKeyId: ACCESSKEY,
        secretAccessKey: SECRETKEY,
        endpoint: ENDPOINT,
      });

      const params = {
        Bucket: BUCKET,
        Key: file.name,
        Body: file,
      };

      const response = await s3.upload(params).promise();

      // Get permanent link
      const permanentSignedUrl = s3.getSignedUrl("getObject", {
        Bucket: BUCKET,
        Key: file.name,
        Expires: 315360000, // 1 year
      });
      setPermanentLink(permanentSignedUrl);

      // Update list of uploaded files
      setUploadedFiles((prevFiles) => [...prevFiles, { ...response, permanentLink: permanentSignedUrl }]);

      // Update list of all files
      fetchAllFiles();

      console.log("File uploaded successfully");
    } catch (error) {
      setError("Error uploading file: " + error.message);
    }
  };

  const handleShowFiles = () => {
    console.log("List of uploaded files:", uploadedFiles);
  };

  const handleDeleteFile = async (file) => {
    try {
      const s3 = new S3({
        accessKeyId: ACCESSKEY,
        secretAccessKey: SECRETKEY,
        endpoint: ENDPOINT,
      });

      await s3.deleteObject({ Bucket: BUCKET, Key: file.Key }).promise();

      // Update the list of uploaded files
      setUploadedFiles((prevFiles) =>
        prevFiles.filter((uploadedFile) => uploadedFile.Key !== file.Key)
      );

      // Update list of all files
      fetchAllFiles();

      console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file: ", error);
    }
  };

  const isImage = (fileName) => {
    return /\.(jpg|svg|jpeg|png|gif)$/i.test(fileName);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload File to S3</h1>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleUpload}
        disabled={!file}
      >
        Upload
      </button>
      {/* {permanentLink && (
        <div className="mt-4 p-4 border border-blue-300 rounded bg-blue-100">
          <h3 className="font-bold">
            Permanent Link:
            <a
              href={permanentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Permanent Link
            </a>
          </h3>
        </div>
      )} */}
      <button
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        onClick={handleShowFiles}
      >
        Show Uploaded Files
      </button>
      {file && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Selected File Preview:</h2>
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="mt-2 border border-gray-300"
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        </div>
      )}
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Uploaded Files:</h2>
          <ul className="list-disc list-inside">
            {uploadedFiles.map((uploadedFile) => (
              <li key={uploadedFile.Key} className="mt-2">
          
                {uploadedFile.Key}
                <a
                  href={uploadedFile.permanentLink}
                  download
                  className="text-blue-500 underline"
                >
                  Download
                </a>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 ml-2"
                  onClick={() => handleDeleteFile(uploadedFile)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {allFiles.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">All Files:</h2>
          <ul className=" list-inside flex justify-between flex-wrap">
            {allFiles.map((file) => {
              const s3 = new S3({
                accessKeyId: ACCESSKEY,
                secretAccessKey: SECRETKEY,
                endpoint: ENDPOINT,
              });

              const fileLink = s3.getSignedUrl("getObject", {
                Bucket: BUCKET,
                Key: file.Key,
                Expires: 3600,
              });

              return (
                <li key={file.Key} className="mt-2">
                  {isImage(file.Key) && (
                    <img
                      src={fileLink}
                      alt={file.Key}
                      className="mb-2 border border-gray-300"
                      style={{ width: "200px", height: "200px" ,objectFit:"cover"}}
                    />
                  )}
                
                  <a
                    href={fileLink}
                    download
                    className="text-blue-500 underline"
                  >
                    Download
                  </a>{" "}
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 ml-2"
                    onClick={() => handleDeleteFile(file)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}


    </div>
  );
};

export default Upload;
