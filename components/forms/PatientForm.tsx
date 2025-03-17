"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CoustomFormField from "../CoustomFormField"
import { useState } from "react"
import SubmitButton from "../ui/SubmitButton"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"

// import { ValidationMode } from "react-hook-form"
 export enum FormFieldType{
    INPUT= 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'PhoneInput',
    CHECKBOX = 'CheckBox',
    DATE_PICKER = 'datePicker',
    SELECT = 'Select',
    SKELETON = 'skeleton'
 }

 
const PatientForm = () => {
  const  router = useRouter();

  // 1. Define your form.
  const [isLoading, setisLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name : "",
      email: "",
      phone: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof UserFormValidation>) {
    setisLoading(true);

    try {
      // const userData = {name , email, phnoe};
      // const user = await createUser(userData);
      // if (user) router.push(`/patient/${user.$id}/register`)


    } catch (error) {
      console.log(error);
    }
    console.log(values)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Hi there, 👋 😊 </h1>
            <p className="text-dark-700">Schedule Your First Appointment. </p>

            </section> 

            <CoustomFormField 
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Full name"
              placeholder="Rajdeep pal"
              iconsrc="/assets/icons/user.svg"
              iconAlt="user"
            />

<CoustomFormField 
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="emai;"
              label="Email"
              placeholder="abc@gmail.com"
              iconsrc="/assets/icons/email.svg"
              iconAlt="user"
            />

<CoustomFormField 
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="phone number"
              placeholder="(555) 123-456"
              // iconsrc="/assets/icons/user.svg"
              // iconAlt="user"
            />

      {/* <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      /> */}
      <SubmitButton isLoading = {isLoading}>Get started</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm
