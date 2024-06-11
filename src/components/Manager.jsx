import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("password");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }


    }, [])

    const copyText = (text) => {
        toast('🦄 copied to clipboard!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });
        navigator.clipboard.writeText(text)
    }


    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)

        if (ref.current.src.includes("hidden1.png")) {
            ref.current.src = "eye.png"
            passwordRef.current.type = "text"
        }
        else {
            ref.current.src = "hidden1.png"
            passwordRef.current.type = "password"
        }
    }


    const savePassword = () => {
    //   if(form.site.length >3 && form.username.length >3 && form.password.lenght >3){

          setpasswordArray([...passwordArray,{...form,id: uuidv4()}])
          localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id: uuidv4()}]))
          console.log([...passwordArray, form])
          
          setform({ site: "", username: "", password: "" });
        // }
        // else{
        //     toast('Error:password not saved')
        // }

    }

    const deletPassword = (id) => {
        console.log("Deleting password with id",id)
        let c = confirm("do you want to Delet it?")
        if(c){

            setpasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
            toast('🦄 Password Deleted Succesfully!', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                
                });
        }
        // console.log([...passwordArray, form])

    }

    const editPassword = (id) => {
        toast('🦄 Password Edited Succesfully!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });
        console.log("Editing password with id",id)
        setform(passwordArray.filter(i=>i.id===id)[0])
        setpasswordArray(passwordArray.filter(item=>item.id!==id))
        // localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id: uuidv4()}]))
        // console.log([...passwordArray, form])

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
            <div className='container mx-auto bg-green-50 max-w-4xl  min-h-[100vh]'>

                <div className="mx-auto mycontainer mt-4">
                    <h1 className="text-4xl text font-bold text-center"><span className='text-green-700 '>&lt;</span>
                        <span>Pass</span><span className='text-green-700'>Word/&gt;</span>
                    </h1>
                    <p className="text-green-900 text-lg text-center font-medium">  Create Your Own PassWord Manager</p>


                    <div className=" flex flex-col p-4 text-black gap-8 items-center">
                        <input value={form.site} onChange={handleChange} placeholder="Enter Your URL" className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="site" id="site" />
                        <div className="flex w-full justify-between gap-8">
                            <input valur={form.username} onChange={handleChange} placeholder="Enter Your Username" className="rounded-full border  border-green-500 w-full p-4 py-1" type="text" name="username" id="username" />
                            <div className="relative">
                                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className="rounded-full border  border-green-500 w-full p-4 py-1" type="password" name="password" id="password" />
                                <span className="absolute right-0 top-1 cursor-pointer" onClick={showPassword}>
                                    <img ref={ref} className="p-1 w-8 h-auto" width={40} src="hidden.png" alt="eye" /></span>

                            </div>
                        </div>
                        <button onClick={savePassword} className="flex justify-center items-center bg-green-600 hover:bg-green-400 rounded-full px-4 py-2 w-fit border border-green-900">
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover">
                            </lord-icon>
                            Save PassWords</button>
                    </div>
                    <div className='passwords'>
                        <h2 className='font-bold text-3xl text-center py-2'>Your Passwords</h2>
                        {passwordArray.length === 0 && <div> No Previous Passwords</div>}
                        {passwordArray.length != 0 &&
                            <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                                <thead className='bg-green-800 text-white'>
                                    <tr>
                                        <th className='py-2'>Sites</th>
                                        <th className='py-2'>UserName </th>
                                        <th className='py-2'>Passwords</th>
                                        <th className='py-2'>Actions</th>

                                    </tr>
                                </thead>
                                <tbody className='bg-green-100'>
                                    {passwordArray.map((item, index) => {

                                        return <tr key={index}>
                                            <td className=' border border-white text-center py-2'>
                                                <div className='flex items-center justify-center'>

                                                    <a href={item.site} target='_blank'>{item.site}</a>
                                                    <div className=' lordiconcopy size-7 cursor-pointer ' onClick={() => { copyText(item.site) }}>

                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                            trigger="hover">

                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='  text-center py-2 border border-white'>
                                                <div className='flex items-center justify-center'>
                                                    <span>{item.username}</span>
                                                    <div className=' lordiconcopy size-7 cursor-pointer ' onClick={() => { copyText(item.username) }}>


                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                            trigger="hover">

                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='  text-center py-2'>
                                                <div className='flex items-center justify-center'>
                                                    <span>{item.password}</span>
                                                    <div className=' lordiconcopy size-7 cursor-pointer ' onClick={() => { copyText(item.password) }}>


                                                        <lord-icon
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px" }}
                                                            src="https://cdn.lordicon.com/lyrrgrsl.json"
                                                            trigger="hover">

                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='  flex justify-center py-2 border border-white text-center'>
                                                <span className='cursor-pointer' onClick={()=>{deletPassword(item.id)}}>
                                                    <img src="delet.svg" alt=""  />
                                                </span>
                                                <span className='cursor-pointer' onClick={()=>{editPassword(item.id)}}>
                                                    <img src="edit.svg" alt=""  />
                                                </span>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>}

                    </div>
                </div>
            </div >

        </>
    )
}

export default Manager
