import { useMutation, useQueryClient } from "react-query"
import { createPost } from "../api/PostApi"
import { PostForm } from "./PostForm"
import {v4 as uuidv4} from 'uuid'

export const AddPost = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({
                querykey: ['posts']
            })
        }
    })

    const onSubmit = (cPost) => {
        mutation.mutate({
            id: uuidv4(),
            ...cPost
        })
    }
    return (
        <>
            <h2 className="text-2xl mx-3 text-green-300">
                Add Post
            </h2>
            <PostForm
                passFunc = {onSubmit}
                editObject = {{}}
            />
        </>
    )
}