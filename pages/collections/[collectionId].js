import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Collection = () => {
  const router = useRouter()
  console.log(router.query)
  console.log(router.query.collectionId)
  return (
    <Link href="/">
      <h2>{router.query.collectionId}</h2>
    </Link>
  )
}

export default Collection
