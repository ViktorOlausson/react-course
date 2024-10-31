import React,{useCallback} from 'react';
import { useForm } from 'react-hook-form'
import Button from "../Button"
import Input from "../Input"
import RTE from '../RTE'
import Select from "../Select"
import appwriteService from "../../appwrite/config"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

function PostForm({post}) {
  const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
    defaultValues:{
      title:post?.title || "",
      slug: post?.slug || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  })

  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData)
  const slugTranform = useCallback((value) => {if(value && typeof value === "string") return value.trim().toLowerCase()
    .replace(/[^a-zA-Z\d\s]+/g, '-').replace(/\s/g, "-")},[])

    React.useEffect(() => {
      watch((value, {name}) => {
        if(name === "title"){
          setValue("slug", slugTranform(value.title), {shouldValidate: true})
        }
      })
    }, [watch, slugTranform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input label="Title" placeholder="Title" className="mb-4" {...register("title", {required: true})}/>
        <Input label="Slug :" placeholder="Slug" className="mb-4" {...register("slug", {required: true})}
        onInput={(e) => {setValue("slug", slugTranform(e.currentTarget.value), {shouldValidate: true})}}/>
        <RTE label="Content: " name="content" control={control} defaultValue={getValues("content")}/>
      </div>

      <div className='w-1/3 px-2'>
        <Input label="Featured Image" type="file" className="mb-4" accept="image/png, image/jpg, image/jpeg" {...register("image", {required: true})}/>
      </div>
    </form>
  )
}

export default PostForm