import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const hiddenCanvasRef = useRef(null); // Hidden canvas for capturing images
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [imageData, setImageData] = useState(null);

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.ageGenderNet.loadFromUri('/models'),
      ]);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  // Start the camera when models are loaded
  useEffect(() => {
    let stream = null;

    const startVideo = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: {} });
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    if (modelsLoaded) {
      startVideo();
    }

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [modelsLoaded]);

  // Capture a picture
  const handleCapture = () => {
    const hiddenCanvas = hiddenCanvasRef.current;
    const video = videoRef.current;

    hiddenCanvas.width = video.videoWidth;
    hiddenCanvas.height = video.videoHeight;
    hiddenCanvas.getContext('2d').drawImage(video, 0, 0, hiddenCanvas.width, hiddenCanvas.height);

    // Convert the image to a base64 string
    const image = hiddenCanvas.toDataURL('image/png');
    setImageData(image);

    // Automatically "upload" or process the image
    uploadImage(image);
  };

  // Simulated upload function
  const uploadImage = (image) => {
    console.log('Image uploaded:', image); // Replace with API call or form submission
    alert('Image captured and uploaded!');
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="flex-1">
          <video ref={videoRef} autoPlay muted width="300" height="250" className="border border-gray-300" />
          <canvas ref={canvasRef} width="300" height="250" className="border border-gray-300 hidden" />
        </div>
        <div className="flex-1">
          {imageData && (
            <div>
              <p>Captured Image:</p>
              <img src={imageData} alt="Captured" className="border border-gray-300" style={{ width: '250px' }} />
            </div>
          )}
        </div>
      </div>
      <button
        onClick={handleCapture}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 cursor-pointer"
      >
        Take Picture
      </button>
      {!modelsLoaded && <p>Loading models...</p>}
      <canvas ref={hiddenCanvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Camera;
