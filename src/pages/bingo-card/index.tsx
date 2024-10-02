import DrawerContainer from '@/context/drawer-context'
import TitleContainer from '@/context/title-context'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import UserIcon from '@/assets/icons/user.svg?react'

const BingoCard = () => {
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


  const { id = '' } = useParams()

  console.log(id)

  const createDefaultBingo = () => Array.from(Array(16)).map(() => '')
  const [bingoList] = useState(createDefaultBingo())

  return (
    <div className="p-6">
      <div onClick={() => navigate(-1)} className="mb-4 w-fit flex items-center gap-4 text-2xl text-secondary font-bold">
        <span>{'<'}</span>
        <span>Back</span>
      </div>

      <section className="mb-4 p-4 flex bg-bg-dark">

        <article className="m-auto flex flex-col gap-4 w-full">
          <div className="flex gap-4">
            {bingoList.slice(0, 4).map((item, index) => <div key={`1_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
              <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
            </div>)}
          </div>
          <div className="flex gap-4">
            {bingoList.slice(4, 8).map((item, index) => <div key={`2_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
              <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
            </div>)}
          </div>
          <div className="flex gap-4">
            {bingoList.slice(8, 12).map((item, index) => <div key={`3_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
              <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
            </div>)}
          </div>
          <div className="flex gap-4">
            {bingoList.slice(12, 16).map((item, index) => <div key={`4_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
              <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
            </div>)}
          </div>
        </article>

      </section>

      <div className="mb-4 py-3 text-3xl text-primary text-center font-bold bg-bg-dark">Block Pending</div>

      <div>
        <span className="font-bold">Block：</span>
        <span>{123}</span>
      </div>
      <div>
        <span className="font-bold">Bet Time：</span>
        <span>{123}</span>
      </div>


      <div className="mt-8 py-3 w-full text-center rounded-3xl text-xl font-bold text-white bg-bg-dark">Refresh</div>
    </div>
  )
}

export default BingoCard
