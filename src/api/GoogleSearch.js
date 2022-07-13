const API_KEY=process.env.REACT_APP_GOOGLE_API_KEY
const ENGINE_ID=process.env.REACT_APP_GOOGLE_ENGINE_ID


export const searchData=async (term) => {
    const data=await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}`)

    const result=data.json()
    return result
}