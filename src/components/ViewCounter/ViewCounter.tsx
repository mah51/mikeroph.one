import { useEffect } from 'react'
import { useQuery } from 'react-query'

const ViewCounter = ({ slug }: { slug: string | null }): JSX.Element => {
  const { data } = useQuery(`views${slug}`, () => {
    return fetch(`/api/views/${slug}`).then(res => res.json())
  })
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    registerView()
  }, [slug])

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>
}

export default ViewCounter
