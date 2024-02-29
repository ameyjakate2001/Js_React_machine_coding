/* eslint-disable no-unused-vars */
import {
  useMutation,
  QueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { fetchPosts, addPost } from './api/posts'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
function App() {
  const [postTitle, setPostTile] = useState('')
  const queryClient = new QueryClient()
  const { ref, inView } = useInView()

  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
    })

  const { mutate, isPending } = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    },
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  return (
    <div className='p-4'>
      <form
        className='mb-5 mt-3'
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            mutate({
              title: postTitle,
              body: postTitle,
              userId: 1,
              id: new Date().getTime(),
            })
          } catch (error) {
            console.log(error)
          }
          setPostTile('')
        }}
      >
        <input
          type='text'
          value={postTitle}
          placeholder='type something...'
          className='w-full p-3 border-none outline-none rounded-md bg-stone-300'
          onChange={(e) => setPostTile(e.target.value)}
        />
        <button className='rounded-md bg-emerald-500 p-2 w-[100px] mt-3 text-lg'>
          {isPending ? 'adding...' : 'Post'}
        </button>
      </form>
      {status === 'pending' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>{error.message}</div>
      ) : (
        <div className='flex flex-col gap-2'>
          {data.pages.map((page) => {
            return (
              <div key={page.currentPage} className='flex flex-col gap-2'>
                {page.data.map((item) => {
                  return (
                    <div key={item.id} className='rounded-md bg-lime-100 p-4'>
                      {item.title}
                    </div>
                  )
                })}
              </div>
            )
          })}

          <div ref={ref}>{isFetchingNextPage && 'Loading...'}</div>
        </div>
      )}
    </div>
  )
}
export default App
