import React, { useEffect, useRef, useState } from 'react';
import "./style.css"

const CameraComponent = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [hasPermission, setHasPermission] = useState(null); // State to track permission

  useEffect(() => {
    const startVideo = async () => {
      try {
        // Request access to the camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // If a video element is available, set its source to the video stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          // Wait for the video metadata to load before playing
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
          };
        }

        // Update permission state
        setHasPermission(true);
      } catch (error) {
        console.error("Error accessing camera:", error);
        setHasPermission(false);
      }
    };

    // Start video when the component mounts
    startVideo();

    // Cleanup function to stop the video stream when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop()); // Stop all tracks
      }
    };
  }, []);

  return (
    <div className='camera'>
      {hasPermission === null ? (
        <p>Requesting camera access...</p>
      ) : hasPermission ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          width="100%"
          height="auto"
          style={{ border: '1px solid black' }} // Optional styling
        />
      ) : (
        <p>Permission denied or camera unavailable.</p>
      )}
    </div>
  );
};

export default CameraComponent;
