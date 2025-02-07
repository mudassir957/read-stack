"use client"

import AuthForm from '@/components/AuthForm'
import { signUp } from '@/lib/actions/auth'
import { SignUpSchema } from '@/lib/validations'
import React from 'react'

const page = () => (
    <AuthForm
        type="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{
            email: '',
            password: '',
            fullName: '',
            universityId: 0,
            universityCard: '',
        }}
        onSubmit={signUp}
    />
)

export default page