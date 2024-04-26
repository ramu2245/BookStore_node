import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/Admin.js'
import './db.js'

async function AdminAccount() {
try {
    const AdminCount = await Admin.countDocuments()
    if(AdminCount === 0) {
        const hashPassword = await bcrypt.hash('a', 10)
        const newAdmin = new Admin({
            username: 'a',
            password: hashPassword
        })
        await newAdmin.save()
        console.log("account created")
    } else {
        console.log("account already existed")
    }
} catch(err) {
    console.log("error")
}
}

AdminAccount()