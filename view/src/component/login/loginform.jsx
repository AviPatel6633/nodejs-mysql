"use client"
import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'

const Loginform = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        router.push('/dashboard')
    }

    const registerOptions = {
        username: {
            required: "enter username",
        },
        password: {
            required: "enter password",
            minLength: {
                value: 8,
                message: "Password must be of 8 letters",
            },
        }
    }

    return (
        <div>
            <Form className="form" onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Username"
                    className="inputBox"
                >
                    <Form.Control type="text" {...register("username", registerOptions.username)} />
                    <p className="error-message">{errors.username?.message}</p>
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" className='inputBox' label="Password">
                    <Form.Control type="password" minLength={8} maxLength={12} {...register("password", registerOptions.password)} />
                    <p className="error-message">{errors.password?.message}</p>
                </FloatingLabel>

                <Button className='login-submin-btn' type='submit'>Submit</Button>
                <div className="links">
                    <Link href="#">Forgot Password</Link>
                    <Link href="#">Signup</Link>
                </div>
            </Form>
        </div>
    )
}

export default Loginform