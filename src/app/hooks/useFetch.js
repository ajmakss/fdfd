import { useCallback } from "react"
import { useState } from "react"


const useFetch =  () => {
	const [isLoading,setIsLoading] = useState(false) 
	const [error,setError] = useState(null)

	const fetchData = useCallback((url,data,method = 'GET') => {
		  return async (event) => {
			  if(event){event.preventDefault()}
			  
			try {
				if(method === 'POST'){
					setIsLoading(true)
					setError(null)
					const responce = await fetch(url,{
						method,
						headers:{
							'Content-Type':'application/json'
						},
						body: JSON.stringify(data)
					})

					const resData = await responce.json()
					if(!resData.ok){
						setError(resData.error)
					}
					setIsLoading(false)
				}
			} catch (error) {
				setError(error)
				setIsLoading(false)
			}
		}
	},[])

	return {fetchData,isLoading,error};
} 

export default useFetch;