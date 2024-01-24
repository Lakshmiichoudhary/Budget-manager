import React, { useRef } from 'react'
import Header from '../Header/Header'
import { updateProfile } from 'firebase/auth'
import { auth } from '../../Utils/Firebase'

const Profile = () => {
    const fullname = useRef(null)
    const profilUrl = useRef(null)

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
    <div>
        <Header />
        <div className='flex justify-between font-bold'>
        <h1 className='m-2 p-2 ml-96 text-2xl '>Contact Details</h1>
        <button className='p-2 bg-black text-white px-6 m-2 border-2 rounded-lg border-yellow-700'>
            Cancel
        </button>
        </div>
        <div className='ml-96 m-2 p-2 font-bold'>
            <label>Full Name</label>
            <input className='p-2 m-2 rounded-md bg-slate-600' 
            ref={fullname}
            type="text" />
        </div>
        <div className='ml-96 m-2 p-2 font-bold'>
            <label>Profile Photo Url</label>
            <input className='p-2 m-2' 
            ref={profilUrl}
            type="file"
            accept='imane/*' />
        </div>
        <button className='ml-96 m-2 p-3 font-bold bg-red-400 rounded-lg'
            onClick={handleUpdateProfile}>
            Update
        </button>
    </div>
  )
}

export default Profile