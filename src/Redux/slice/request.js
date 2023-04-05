import { getPublicGists,getGistForUser } from "../../services/gistService";

export const fetchGistList = async () => {
    const { data, status } = await getPublicGists()

    return {
        data,
        status
 }
};


export const fetchGistForUser = async (searchParams) => {
    const { data, status } = await getGistForUser(searchParams)
    return {
        data,
        status
 }
    
};