import * as profileAPI from './profile-api'

export async function addProfileAPI(formData) {
    //console.log('this is working in goals-service')
    const profile = await profileAPI.addProfile(formData)
    return profile
}