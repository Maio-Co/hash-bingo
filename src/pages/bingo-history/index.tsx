import TitleContainer from '@/context/title-context'
import { APIRequest } from '@/service/api-request'
import { ChangeEvent, useEffect, useState } from 'react'
import UserIcon from '@/assets/icons/user.svg?react'
import DrawerContainer from '@/context/drawer-context'
import { useNavigate } from 'react-router'
import { timeFormat } from '@/utils'
import LoadingContainer from '@/context/loading-context'

const BingoHistory = () => {
  const navigate = useNavigate()

  const { load, unload } = LoadingContainer.useContainer()
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
    filter: '',
  })
  const [total, setTotal] = useState(0)

  const onChangeFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    setHistory([])
    setSearchParams(prev => ({ ...prev, page: 1, filter: event.target.value }))
  }
  const onChangePage = (page: number) => setSearchParams(prev => ({ ...prev, page: page }))

  const [history, setHistory] = useState<any[]>([])

  const getHistory = async (page: number) => {
    load()
    const params = { page, pageSize: searchParams.pageSize } as any
    if (searchParams.filter) params.filter = searchParams.filter
    const { isError, value } = await APIRequest.get('/history', { params })
      .then(res => ({ isError: false, value: res.data }))
      .catch(() => ({ isError: true, value: [] }))

    if (!isError) {
      setHistory(prev => [...prev, ...(value?.history || [])])
      setTotal(value.total || 0)
    }

    unload()
  }

  useEffect(() => {
    getHistory(searchParams.page)
  }, [searchParams])

  return (
    <div className="p-4 flex flex-col">

      <select value={searchParams.filter} onChange={onChangeFilter} className="mb-4 w-full px-4 py-2 border-2 border-[#CCC0B2] rounded-lg bg-white">
        <option value={''}>All</option>
        <option value={'bingo'}>Bingo</option>
        <option value={'beat'}>Beat</option>
        <option value={'pending'}>Pending</option>
        <option value={'missed'}>Missed</option>
      </select>

      <div className="mb-2 px-6 py-2 flex items-center gap-4 bg-[#CCC0B2] rounded-xl">
        <div className="w-1/3 text-primary font-bold">Block</div>
        <div className="w-1/3 text-primary font-bold">Time</div>
        <div className="w-1/3 text-primary font-bold">Status</div>
      </div>

      <section className="mb-4 h-[calc(100vh-260px)] overflow-auto">
        {history.map(item =>
          <article key={item.id} className="px-6 py-2 flex items-center gap-4 border-b border-bg-dark" onClick={() => navigate(`/bingo-card/${item.id}`)}>
            <div className="w-1/3 text-primary font-bold">{item.block}</div>
            <div className="w-1/3 text-primary font-bold text-sm">{timeFormat(item.createdAt)}</div>
            <div className="w-1/3 text-primary font-bold capitalize" >
              { item.status === 'bingo' ? <span className="text-secondary">{item.status}</span> : <span>{item.status}</span> }
            </div>
          </article>
        )}

        { total > history.length && <div className="my-4 mx-auto py-3 px-6 bg-secondary text-white w-fit font-bold rounded-3xl" onClick={() => onChangePage(searchParams.page + 1)}>Load More</div> }
      </section>
    </div>
  )
}

export default BingoHistory
