"use client"
import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { signIn } from "next-auth/react"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const loginWithGoogle = async () => {
        setIsLoading(true)
        try{
            await signIn('google')
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button size='sm' className='w-full' onClick={loginWithGoogle}>Google</Button>
        </div>
    )
}

export default UserAuthForm