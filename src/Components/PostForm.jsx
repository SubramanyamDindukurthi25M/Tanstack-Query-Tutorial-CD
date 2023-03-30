import { useState } from "react"

export const PostForm = ({passFunc,editObject}) => {
    const {
        title,
        body
    } = editObject
    const [postObject, setPostObject] = useState({
        title: title || '',
        body: body || ''
    })

    const handleUserInput = (e) => {
        setPostObject({
            ...postObject,
            [e.target.name]: e.target.value
        })
    }

    const displayForm = (label) => (
        <div className="card">
            <div className="field">
                <label>{label}</label>
                <input 
                    type="text" 
                    className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                    name={label.toLowerCase()}
                    value={postObject[label.toLowerCase()]}
                    onChange={handleUserInput}
                />
            </div>
        </div>
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        passFunc(postObject)
        setPostObject({
            title: '',
            body: ''
        })
    }
    return (
        <>
            <form className="px-4" autoComplete="off">
                {displayForm('Title')}
                {displayForm('Body')}
                <button 
                    type="submit"
                    onClick={handleSubmit} 
                    className="text-white bg-primary-500 border-primary-500 px-3 py-2 text-base border-1 border-solid border-round cursor-pointer transition-all transition-duration-200 hover:bg-primary-600 hover:border-primary-600 active:bg-primary-700 active:border-primary-700">
                        Submit
                </button>
            </form>
        </>
    )
}