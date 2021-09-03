import axios from 'axios'
import { useEffect, useState } from 'react'

export const Placeholder = () => {
  const [comments, setComments] = useState<any[]>([])
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then(res => {
      const persons = res.data
      setComments(persons)
    })
  }, [])

  return (
    <>
      <h2>Placeholder</h2>
      {comments.map(c => (
        <div key={c.id}>
          {c.name} {c.email}
        </div>
      ))}
    </>
  )
}
