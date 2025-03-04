"use client"
import React from 'react'
import { redirect } from "next/navigation";
import FormButton from '../components/FormButton/FormButton';


const CreateAccount = () => {

    const handleHomepageRedirect = () => {
        redirect("/")
      }

  return (
    <div>
        CreateAccount
        <FormButton text= 'Redirect' onClick={handleHomepageRedirect} />
    </div>
  )
}

export default CreateAccount