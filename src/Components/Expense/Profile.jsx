import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import { onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth } from '../../Utils/Firebase'

const Profile = () => {
    const fullname = useRef(null)
    const profilUrl = useRef(null)
    const [userData,setUserData] = useState({fullname:"" , profilUrl:""})

    useEffect(()=>{
        const authStateChanged = onAuthStateChanged(auth,(user) => {
            if(user) {
                setUserData({
                    fullname: user.displayName || "",
                    profilUrl: user.photoURL || "",
                })
            }
        })
        return () => {
            authStateChanged();
        }
    },[])

    const handleUpdateProfile = async () => {

        const fullName = fullname.current.value;
        const profile = profilUrl.current.files[0];

        try{
            await updateProfile(auth.currentUser,{
                displayName:fullName,
                photoURL: ""

            })
            console.log('User profile updated successfully!');
        }catch(error){
            console.error('Error updating user profile:', error.message);
        }
    }

  return (
    <div >
        <Header />
        <form className='w-4/12 bg-slate-900 text-white p-12 m-8 mx-auto left-0 right-0 border-2 border-yellow-700'>
        <div>
        <h1 className='m-2 p-2 text-2xl '>Contact Details</h1>
        </div>
        <div className='m-2 p-2 font-bold'>
            <label>Full Name</label>
            <input className='p-2 m-2 rounded-md' 
            ref={fullname}
            type="text"
            value={userData.fullname}
            onChange={(e) => setUserData({ ...userData, fullName: e.target.value })} 
            />
        </div>
        <div className='m-2 p-2 font-bold'>
            <label>Profile Photo Url</label>
            <input className='p-2 m-2' 
            ref={profilUrl}
            type="file"
            accept='imane/*' />
        </div>
        <button className='m-2 p-2 font-bold bg-red-400 rounded-lg'
            onClick={handleUpdateProfile}>
            Update
        </button>
        <button className='p-2 bg-black text-white px-6 m-2 border-2 rounded-lg border-yellow-700'>
            Cancel
        </button>
        </form>
    </div>
  )
}

export default Profile