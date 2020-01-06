import React, { useState } from 'react'

function CreateArea({ onAdd }) {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    function handleChange(event) {
        const origin = event.target.name
        const newValue = event.target.value

        if (origin === 'title') {
            setNote(prevNote => {
                return {
                    title: newValue,
                    content: prevNote.content
                }
            })
        } else if (origin === 'content') {
            setNote(prevNote => {
                return {
                    title: prevNote.title,
                    content: newValue
                }
            })
        }
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    name='title'
                    placeholder='Title'
                    value={note.title}
                />
                <textarea
                    onChange={handleChange}
                    name='content'
                    placeholder='Take a note...'
                    rows='3'
                    value={note.content}
                />
                <button
                // onClick={() => {
                //     onAdd(inputText)
                //     setInputTitle('')
                //     setInputText('')
                // }}
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default CreateArea
