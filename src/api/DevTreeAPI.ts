import { isAxiosError } from "axios"
import api from "../config/axios"
import type { ProfileForm, User } from "../types"

export async function getUser() {
    try {
        const { data } = await api<User>('/auth/user')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw Error(error.response?.data.message)
        }
        return
    }
}

export async function updateUserProfile(formData: ProfileForm) {
    try {
        const { data } = await api.patch('/auth/user', formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw Error(error.response?.data.message)
        }
        return
    }
}

export async function uploadImage(file:File) {
    const formData = new FormData()
    formData.append('file',file)
    try {
        const {data} = await api.post('/auth/user/image',formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw Error(error.response?.data.message)
        }
        return
    }
}