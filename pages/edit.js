import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Edit() {
  
  const [editPosition, setEditPosition] = useState(false)

  const router = useRouter()
  useEffect(() => {
    console.log("Router Info")
    console.log(router.query)
    let openPositions = JSON.parse(localStorage.getItem('open-positions'))
    let entry = openPositions.find(x => x.id = router.query.id)
    console.log(entry)
  }, [])
  return (
    <div>

    </div>
  )
}