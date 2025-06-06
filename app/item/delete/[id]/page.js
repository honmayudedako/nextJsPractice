"use client"
import { useState,useEffect, use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import useAuth from "@/app/utils/useAuth"

const DeleteItem = (context) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const loginUserEmail = useAuth()

    useEffect(() => {
        const getSingleItem = async() => {
            const params = await context.params
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${params.id}`)
            const jsonData = await response.json()
            const singleItem = jsonData.singleItem
            setTitle(singleItem.title)
            setPrice(singleItem.price)
            setImage(singleItem.image)
            setDescription(singleItem.description)
            setEmail(singleItem.email)
            setLoading(true)
        }
        getSingleItem()
    },[context])

    const handleSubmit = async(e) => {
        e.preventDefault()
        const params = await context.params
        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/delete/${params.id}`,{
                method:"DELETE",
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify({
                    email:loginUserEmail
                })
            })
            const jsonData = await response.json()
            alert(jsonData.message)
            router.push("/")
        }catch{
            alert("アイテム削除失敗")
        }
    }

    if(loading){
        if(loginUserEmail === email){
            return (
                <div>
                    <h1 className="page-title">アイテム削除</h1>
                    <form onSubmit={handleSubmit}>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="アイテム名" required></input>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" placeholder="価格" required></input>
                        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="画像" required></input>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" rows={15} placeholder="商品説明" required></textarea>
                        <button>削除</button>
                    </form>
                </div>
            )    
        }else{
            return<h1>権限がありません</h1>
        }    
    }else{
        return<h1>ローディング中...</h1>
    }
}

export default DeleteItem