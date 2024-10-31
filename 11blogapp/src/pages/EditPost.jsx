import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from "../appwrite/config"

function EditPost() {

  const [post, setPost] = useEffect(null)
  const{slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post)
        }else{
          navigate("/")
        }
      })
    }
  }, [slug, navigate])

  return (
    <div>EditPost</div>
  )
}

export default EditPost