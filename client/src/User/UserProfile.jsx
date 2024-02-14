import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserProfile.css';


const UserProfile = () => {
    const { activepage } = useParams();
    const [user, setUser] = useState({ profilePhoto: '' });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/profile'); // Adjust to your API
                setUser(response.data); // Assuming the response has user data including profilePhoto URL
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Update the base URL as per your server configuration
    const profilePhotoUrl = user.profilePhoto ? `http://localhost:3000/uploads/${user.profilePhoto}` : '/path/to/default/profile/photo.jpg';

    return (
        <div className='userprofile'>
            <Navbar />
            <SingleBanner 
              heading={`My Profile`}
              bannerimage='https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            />
            {/* Display the profile photo at the top */}
            <img src={profilePhotoUrl} alt="Profile" className="userProfilePhoto" />
            <div className='userprofilein'>
                <div className='left'>
                  <UserSidebar activepage={activepage}/>
                </div>
                <div className='right'>
                  {activepage === 'accountsettings' && <AccountSettings user={user} setUser={setUser} />}
                  {activepage === 'changepassword' && <ChangePassword />}
                  {activepage === 'yourbooks' && <YourBooks />}
                  {activepage === 'premium' && <Premium />}
                  {activepage === 'legalnotice' && <LegalNotice />}
                </div>
             </div>
        </div>
    );
};

export default UserProfile;
