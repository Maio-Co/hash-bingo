import TitleContainer from '@/context/title-context'
import { APIRequest } from '@/service/api-request'
import { ChangeEvent, useEffect, useState } from 'react'
import UserIcon from '@/assets/icons/user.svg?react'
import DrawerContainer from '@/context/drawer-context'
import { useNavigate } from 'react-router'


const BingoHistory = () => {
  const navigate = useNavigate()

  const { openDrawer } = DrawerContainer.useContainer()
  const { setTitle } = TitleContainer.useContainer()
  useEffect(() => {
    setTitle(
      <>
        <div className="absolute t-2 left-4">
          <UserIcon onClick={() => openDrawer()} />
        </div>
        <div className="mx-auto text-2xl font-bold">My Bingo Card</div>
      </>
    )
  }, [])

  const [searchParams, setSearchParams] = useState({
    page: 1,
    pageSize: 10,
    filter: 'all',
  })

  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => setSearchParams(prev => ({ ...prev, filter: event.target.value }))

  const [history, setHistory] = useState([])

  const getHistory = async (page: number) => {
    const params = { page, pageSize: searchParams.pageSize }
    const { isError, value } = await APIRequest.get('/history', { params })
      .then(res => ({ isError: false, value: res.data.history }))
      .catch()
    if (!isError) setHistory(value)
  }

  useEffect(() => {
    getHistory(searchParams.page)
  }, [searchParams])

  return (
    <div className="p-4 flex flex-col">

      <select value={searchParams.filter} onChange={onChangeFilter} className="mb-4 w-full px-4 py-2 border-2 border-[#CCC0B2] rounded-lg bg-white">
        <option value={1}>All</option>
        <option value={1}>Bingo</option>
        <option value={2}>Beat</option>
        <option value={3}>Pending</option>
        <option value={3}>Missed</option>
      </select>

      <div className="mb-4 px-6 py-2 flex items-center gap-4 bg-[#CCC0B2] rounded-xl">
        <div className="w-1/3 text-primary font-bold">Block</div>
        <div className="w-1/3 text-primary font-bold">Time</div>
        <div className="w-1/3 text-primary font-bold">Status</div>
      </div>

      <section className="mb-4 h-[calc(100vh-320px)] overflow-auto">
        {history.map((_, index) =>
          <article key={index} className="px-2 flex items-center gap-4" onClick={() => navigate(`/bingo-card/${index}`)}>
            <div className="w-1/3 text-primary font-bold">Block</div>
            <div className="w-1/3 text-primary font-bold">Time</div>
            <div className="w-1/3 text-primary font-bold">Status</div>
          </article>
        )}
      </section>

      <div className="mt-auto mx-auto py-3 px-6 bg-secondary text-white w-fit font-bold rounded-3xl">Load More</div>

    </div>
  )
}

export default BingoHistory