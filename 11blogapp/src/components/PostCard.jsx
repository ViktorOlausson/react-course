import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import appWriteService from "../appwrite/config"

function PostCard({$id, title, featuredImage}) {
  const [imageSrc, setImageSrc] = useState(null);  // State to store the resolved image URL

    useEffect(() => {
        async function fetchImageSrc() {
            if (featuredImage) {
                const url = await appWriteService.getFilePreview(featuredImage);
                setImageSrc(url);
            }
        }
        
        fetchImageSrc();
    }, [featuredImage]);
    console.log(appWriteService.getFilePreview(featuredImage))
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appWriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard