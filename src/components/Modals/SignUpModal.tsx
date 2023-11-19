'use client'
import React from 'react'
import BaseModal from './BaseModal'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'

type Props = {}

function SignUpModal({ }: Props) {
    const header = "Join X today"

    const body =
        <>

            <button className=' rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 w-full border'>
                <FcGoogle size={18} />
                <div>Sign up with Google</div>
            </button>

            <button className=' rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 border w-full'>
                <FaApple size={18} />
                <div>Sign up with Apple</div>
            </button>

            <hr className=' w-full text-black' />


            <button className='w-full rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 bg-neutral-600 text-white'>

                Create account
            </button>
            {/* <div className=' text-sm w-full flex-wrap'>
                By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
            </div> */}

            <div>
                Have an account already? Log in
            </div>
        </>
    return (
        <BaseModal
            onClose={() => { }}
            heading={header}
            body={body}

        />
    )
}

export default SignUpModal