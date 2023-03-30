import { useMutation, useQuery, useQueryClient } from "react-query"
import { useNavigate } from "react-router-dom"
import { deletePost, fetchPosts } from "../api/PostApi"
import { AddPost } from "../Components/AddPost"
import {Button} from 'primereact/button'

export const PostList = () => {
    const navigate = useNavigate()

    const {
        isLoading,
        isError,
        data,
        error
    } = useQuery({
        queryKey: ['postsc'],
        queryFn: fetchPosts
    })

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                querykey: ['posts']
            })
        }
    })

    const onSubmit = (id) => {
        mutation.mutate(id)
    }
    
    if(isLoading) return <h1>Loading....</h1>

    if(isError) return <h1>Error : {error.message}</h1>

    return (
        <>
            <AddPost/>
            <h3 className="mx-2 text-2xl text-red-300">
                Listing Posts - {
                    data.length
                }
            </h3>

            {
                data.map((post) => {
                    const {
                        id,
                        title
                    } = post
                    return (
                        <blockquote key={id} className='bg-gray-200 my-2 p-3'>
                            <h3 
                                className="text-yellow-900 cursor-pointer"
                                onClick = {
                                    () => navigate(`/post/${id}`)
                                }
                            >
                                Title : {title}
                            </h3>
                            <div className="btn-group flex justify-content-around">
                                <Button
                                    label='Edit'
                                    icon = 'pi pi-user-edit'
                                    onClick = {
                                        () => navigate(`/post/${id}/edit`)
                                    }
                                />
                                <Button
                                    label='Delete'
                                    icon = 'pi pi-delete-left'
                                    onClick={() => onSubmit(id)}
                                />
                            </div>
                        </blockquote>
                    )
                })
            }
        </>
    )
}