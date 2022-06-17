import React, { useEffect, useState } from 'react'

const defaultInputs = {
    name: undefined,
    email: undefined,
    message: undefined,
    error: {
        name: '',
        email: '',
        message: '',
    }
}

const ContactForm = () => {

    const [inputs, setInputs] = useState(defaultInputs)
    const [buttonStatus, setButtonStatus] = useState(false)

    const checkEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
    const checkForError = () => {
        return !(inputs.error.name === "" && inputs.error.email === "" && inputs.error.message === "")
    }
    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const error = inputs.error
        switch (name) {
            case 'name':
                error.name = (value.length < 6) ?
                    'Please enter atleast 5 char long name' : ""
                break
            case 'email':
                error.email = !checkEmail(value) ? 'Invalid email id' : ""
                break
            case 'message':
                error.message = (value.length < 10) ?
                    'Please write atleast 10 characters' : ""
                break
            default:
                break
        }
        setInputs({
            ...inputs,
            error: error,
            [name]: value
        })
    }

    useEffect(() => {
        if (!(inputs.name && inputs.email && inputs.message)) {
            setButtonStatus(false)
            return
        }
        setButtonStatus(!checkForError())
    }, [inputs])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputs.name && inputs.email && inputs.message) {
            if (!checkForError()) {
                console.log(inputs)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className=' text-slate-500 w-[90%] bg-white flex flex-col p-10 rounded-xl drop-shadow-lg'>
            <p className='font-bold text-md'>NAME</p>
            <input onChange={handleChange} className='text-xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' name='name' value={inputs.name} placeholder='Enter your full name'></input>

            <p className='text-rose-600 py-2 mb-3 text-md font-bold'>
                {inputs.error.name}
            </p>

            <p className='opacity-80 font-bold text-md'>EMAIL</p>
            <input onChange={handleChange} name='email' value={inputs.email} className='text-xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' placeholder='Enter your email address'></input>
            <p className='text-rose-600 py-2 mb-3 text-md font-bold'>
                {inputs.error.email}
            </p>

            <p className='opacity-80 font-bold text-md'>MESSAGE</p>
            <textarea onChange={handleChange} name="message" value={inputs.message} className='text-xl appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' placeholder='Type your message'></textarea>
            <p className='text-rose-600 py-2 mb-3 text-md font-bold'>
                {inputs.error.message}
            </p>

            <br />
            <button disabled={!buttonStatus} className='p-5 bg-blue-500 disabled:bg-blue-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors duration-500 text-white rounded-full' type='submit'>SUBMIT</button>
        </form>
    )
}

export default ContactForm