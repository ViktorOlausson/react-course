import React, { useState } from 'react'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from "../appwrite/config"
import Container from '../components/container/Container'
import PostForm from "../components/post-form/PostForm"
import PostCard from '../components/PostCard'

function AllPost() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      setPosts(posts.documents)
    })
  } ,[])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPost