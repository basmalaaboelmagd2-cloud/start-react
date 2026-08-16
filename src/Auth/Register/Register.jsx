import { Input } from '@heroui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Label, ListBox, Select } from "@heroui/react";
import {Button} from "@heroui/react";




export default function Register() {

let nameInput = useRef()
console.log('render....');

useEffect(()=>{
console.log(nameInput);
},[])



  return (
    <>
      <div className="bg-gray-50 p-6">
        <div className="bg-white p-3 text-center md:w-1/2 m-auto rounded-2xl">
          <h2 className="text-2xl font-bold text-sky-400">Register</h2>

          <form>
            <Input ref={nameInput} onChange={()=>console.log(nameInput.current.Value)} type='text' name='name' aria-label="Name" className="w-full mt-4" placeholder="Enter your name" />
            <Input type='text' name='username' aria-label="username" className="w-full mt-4" placeholder="Enter your username" />
            <Input type='email' name='email' aria-label="email" className="w-full mt-4" placeholder="Enter your email" />
            <div className='flex gap-5'>
              <Input type='date' name='dateOfBirth' aria-label="dateOfBirth" className="w-full mt-4" placeholder="Enter your email" />

              <Select className="w-[256px]" placeholder="Select one">
                <Label>Gender</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Male" textValue="Male">
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="Famale" textValue="Famale">
                      Famale
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <Input type='password' name='password' aria-label="password" className="w-full mt-4" placeholder="Enter your password" />
            <Input type='password' name='rePassword' aria-label="rePassword" className="w-full mt-4" placeholder="Enter your rePassword" />
            <Button className="w-full mt-5">Register </Button>

          </form>
        </div>
      </div>


    </>
  )
}
