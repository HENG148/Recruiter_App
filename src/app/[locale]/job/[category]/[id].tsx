import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const ItemPage = () => {
  const router = useRouter()
  const { id } = router.query 

  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await fetch(`/api/data/${id}`) 
          if (!response.ok) {
            throw new Error('Data not found')
          }
          const result = await response.json()
          setData(result)
        } catch (error) {
          if (error instanceof Error) {
            setError('Error fetching data: ' + error.message)
          } else {
            setError('An unknown error occurred')
          }
        } finally {
          setLoading(false)
        }
      }
      fetchData();
    }
  }, [id])

  if (loading) return <p>Loading...</p> //loading state
  if (error) return <p>{error}</p> //error handling
  if (!data) return <p>No data found for this ID.</p> //not data found
  
  return (
    <div>
      <h1>Data for ID: {id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
export default ItemPage