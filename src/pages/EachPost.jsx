import { Button } from "primereact/button"
import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { fetchPost } from "../api/PostApi"

export const EachPost = () => {
    const {
        id
    } = useParams()
    const navigate = useNavigate()

    const {
        isLoading,
        isError,
        data,
        error
    } = useQuery({
        queryKey: ['posts', id],
        queryFn: () => fetchPost(id)
    })

    if(isLoading) return <h1>Loading....</h1>

    if(isError) return <h1>Error : {error.message}</h1>

    const {
        body
    } = data

    return (
        <div className="bg-yellow-200 p-2 my-2">
            <Button
                label="Back to home page"
                icon='pi pi-angle-left'
                onClick = {
                    () => navigate('/')
                }
            />
            <h3 className="text-red-500">
                Body: {
                    body
                }
            </h3>
        </div>
    )
}