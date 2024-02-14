import React, { useState } from 'react';
import axios from 'axios';
import './AccountSettings.css';

const AccountSettings = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Ensure the field name matches what multer expects on the backend
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      // Adjust the URL to the server's endpoint as needed
      // If running on different ports or hosts, you need to specify the full URL
      // e.g., http://localhost:3000/upload-image if your server runs on port 3000
      const response = await axios.post('http://localhost:3000/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Profile photo updated successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload profile photo');
    }
  };

  return (
    <div className='accountsettings'>
      <h1 className='mainhead1'>Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='profilePhoto'>Profile Photo <span>*</span></label>
          <input type='file' id='profilePhoto' onChange={handleFileChange} />
        </div>
        <button type='submit' className='mainbutton1'>Save Changes</button>
      </form>
    </div>
  );
};

export default AccountSettings;
