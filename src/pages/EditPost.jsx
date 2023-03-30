import { useQuery,useMutation, useQueryClient } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { fetchPost, updatePost } from "../api/PostApi"
import { PostForm } from "../Components/PostForm"

export const EditPost = () => {
    const queryClient = useQueryClient()

    const navigate = useNavigate()
    const {
        id
    } = useParams()

    const {
        isLoading,
        isError,
        data,
        error
    } = useQuery({
        queryKey: ['posts', id],
        queryFn: () => fetchPost(id)
    })

    const mutation = useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                querykey: ['posts']
            })
            navigate('/')
        }
    })

    const handleSubmit = (updatedPost) => {
        mutation.mutate({
            id,
            ...updatedPost
        })
    }

    if(isLoading) return <h1>Loading....</h1>

    if(isError) return <h1>Error : {error.message}</h1>

    return (
        <>
            <PostForm
                editObject = {data}
                passFunc = {handleSubmit}
            /> 
        </>
    )
}