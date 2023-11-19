'use client'
import React, { useCallback } from 'react'
import BaseModal from './BaseModal'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { TokenResponse, useGoogleOneTapLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { request, gql } from 'graphql-request'
import { graphqlClient, graphqlClientForTokenVerification } from '../../../clients/graphqlClient';
import toast from 'react-hot-toast/headless';
import { verifyUserGoogleTokenQuery } from '../../../graphql/query/user';


type Props = {}

function SignInModal({ }: Props) {


    const sendTokenToBackend = useCallback(async (authToken: Omit<TokenResponse, "error" | "error_description" | "error_uri">) => {
        // console.log("called")
        try {
            if (authToken.access_token) {
                // console.log(authToken.access_token)

                const { verifyGoogleToken } = await graphqlClientForTokenVerification.request(verifyUserGoogleTokenQuery, { token: authToken.access_token })
                // console.log(verifyGoogleToken)
                if (verifyGoogleToken) {
                    window.localStorage.setItem("__token_test", verifyGoogleToken)
                    toast.success("signin succesfull")
                } else {
                    toast.error("faild to load acess token ")
                }
            }
        } catch (err) {
            console.log(err)
        }

    }, [])


    const login = useGoogleLogin({
        onSuccess: sendTokenToBackend,
        onError: () => toast.error("oops something went wrong")

    });




    const handleLogin = () => {
        login()
        // console.log("called")
    }


    const header = "Sign in to x"

    const body =
        <>

            <button className=' rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 w-full border' onClick={handleLogin}>
                <FcGoogle size={18} />
                <div>Sign in with Google</div>
            </button>




            {/* <button className=' rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 w-full border' onClick={() => googleLogout()}>
            logout
        </button> */}

            <button className=' rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 border w-full'>
                <FaApple size={18} />
                <div>Sign in with Apple</div>
            </button>

            <hr className=' w-full text-black' />

            <input type="text" placeholder='Phone , email address , or username' className=' p-3 w-full border rounded-sm' />
            <button className='w-full rounded-full  py-2 px-5 flex flex-row items-center justify-center gap-1 bg-neutral-600 text-white'>

                Next
            </button>
            <button className=' w-full rounded-full border py-2 px-5 flex flex-row items-center justify-center gap-1'>

                Forgot password?
            </button>

            <div>
                Don’t have an account? Sign up
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

export default SignInModal