const baseUrl = 'http://localhost:3000/posts'

// 1 Get All Posts
export async function fetchPosts() {
    const response = await fetch(baseUrl)
    return response.json()
}

// 2 Get Each Post
export async function fetchPost(id) {
    const response = await fetch(`${baseUrl}/${id}`)
    return response.json()
}

// 3 Create new post - post request
export async function createPost(postObject) {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObject)
    })
    return response.json()
}

// 4 Update each post - put request
export async function updatePost(postObject) {
    const response = await fetch(`${baseUrl}/${postObject.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postObject)
    })
    return response.json(postObject)
}

// 5 Delete each post - delete request
export async function deletePost(id) {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    })
    return response.json()
}