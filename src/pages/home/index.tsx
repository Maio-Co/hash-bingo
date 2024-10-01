import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import { ChangeEvent, useMemo, useState } from 'react'
import { Connection} from '@solana/web3.js'
import { APIRequest } from '@/service/api-request'
import RefreshIcon from '@/assets/icons/refresh.svg?react'
import QuestionIcon from '@/assets/icons/question.svg?react'
import LoadingContainer from '@/context/loading-context'
import { useNavigate } from 'react-router'

enum Step { Bingo = 'Bingo', Block = 'Block', Placed = 'Placed' }
enum BlockType { Custom = 'Custom', Auto = 'Auto' }

const createDefaultBingo = () => Array.from(Array(16)).map(() => '')

const Home = () => {
  const navigate = useNavigate()
  const { load, unload } = LoadingContainer.useContainer()

  // step page
  const [step, setStep] = useState(Step.Bingo)
  const toBingo = () => setStep(Step.Bingo)
  const toBlock = () => setStep(Step.Block)
  const toPlaced = () => setStep(Step.Placed)

  // bingo number
  const [bingoList, setBingoList] = useState(createDefaultBingo())

  const isGenerate = useMemo(() => bingoList.every(item => item !== ''),[bingoList])

  const generation = async () => {
    load()
    const bingoNumber = await APIRequest.get('/getboard')
      .then(res => res.data)
      .then(res => res.board || createDefaultBingo())
      .catch(() => createDefaultBingo())

    setBingoList(bingoNumber)
    unload()
  }

  // block form
  const [blockType, setBlockType] = useState(BlockType.Auto)
  const [blockInput, setBlockInput] = useState('')

  // place bet
  const placeBet = async () => {
    load()

    const network = 'https://api.devnet.solana.com'
    const connection = new Connection(network)
    const canUseBlockHeight = (await connection.getLatestBlockhash()).lastValidBlockHeight + 200

    const data = {
      block: blockType === BlockType.Auto ? String(canUseBlockHeight) : blockInput,
      board: bingoList,
      amount: 100,
    }

    // const { isError } = await APIRequest.get('/bet', { data })
    await APIRequest.get('/bet', { data })
      .then(res => ({ isError: false, value: res.data }))
      .catch(() => ({ isError: true, value: null }))

    toPlaced()
    unload()
  }

  return (
    <div className="px-4 py-4 h-full">
      {/* step 1 */}
      {
        step === Step.Bingo &&
        <article>
          <div className="mb-8 flex h-12">
            <span className="text-4xl text-primary font-bold">Bingo Card</span>
            { isGenerate &&
              <div className="ml-auto flex w-11 h-11 bg-primary-dark rounded-2xl cursor-pointer" onClick={generation}>
                <RefreshIcon className="m-auto" />
              </div>
            }
          </div>

          <div className="mb-1 text-secondary">Click on the reload icon on top to change the Bingo card.</div>

          <section className="mb-2 p-4 flex bg-bg-dark">

            <article className="m-auto flex flex-col gap-3 w-full">
              <div className="flex gap-2">
                {bingoList.slice(0, 4).map((item, index) => <div key={`1_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
                  <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
                </div>)}
              </div>
              <div className="flex gap-2">
                {bingoList.slice(4, 8).map((item, index) => <div key={`2_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
                  <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
                </div>)}
              </div>
              <div className="flex gap-2">
                {bingoList.slice(8, 12).map((item, index) => <div key={`3_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
                  <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
                </div>)}
              </div>
              <div className="flex gap-2">
                {bingoList.slice(12, 16).map((item, index) => <div key={`4_${index}`} className="relative w-1/4 pb-[calc(25%-1rem)] flex rounded bg-[#CCC0B2]">
                  <span style={{ color: item ? '' : 'white' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto font-bold text-3xl">{item || '?'}</span>
                </div>)}
              </div>
            </article>

          </section>

          <div className="mb-4 flex">
            <QuestionIcon className="ml-auto" onClick={() => navigate('/rules')} />
          </div>

          <div className="flex justify-center">
            <div className="py-3 px-6 min-w-28 text-white text-center font-semibold rounded-full bg-secondary cursor-pointer" onClick={isGenerate ? toBlock : generation}>
              { isGenerate ? 'Next' : 'Generation' }
            </div>
          </div>
        </article>
      }

      {/* step 2 */}
      {
        step === Step.Block &&
        <article className="h-full flex flex-col">
          <div className="mb-8 flex h-12">
            <span className="mb-6 text-4xl text-primary font-bold">Choose Block</span>
          </div>

          <div className="px-4">
            <div className="mb-4 flex items-center gap-4">
              <Radio value={BlockType.Custom} checked={blockType === BlockType.Custom} onChange={(event: ChangeEvent<any>) => setBlockType(event.target.value)} />
              { blockType === BlockType.Custom ? <TextField className="ml-4" id="outlined-basic" label="Enter Block Number" variant="outlined" value={blockInput} onChange={event => setBlockInput(event.target.value)} /> : <span className="text-xl">Enter Block Number</span> }
            </div>
            <div className="flex items-center gap-4">
              <Radio value={BlockType.Auto} checked={blockType === BlockType.Auto} onChange={(event: ChangeEvent<any>) => setBlockType(event.target.value)} />
              <span className="text-xl">Auto Assign Block</span>
            </div>
          </div>


          <div className="mt-40">
            <div className="mx-4 px-1 py-3 flex items-center justify-between gap-2 text-xl border-b border-bg-dark">
              <div className="flex gap-4">
                <span>Bets: </span>
                <span className="text-secondary">1</span>
              </div>

              <div className="flex gap-4">
                <span>Price: </span>
                <span className="text-secondary">200</span>
                <span>USDT</span>
              </div>

              <div className="flex gap-4">
                <span>Fee: </span>
                <span className="">15%</span>
              </div>
            </div>


            <div className="mx-auto py-4 w-fit flex gap-4 text-3xl font-bold">
              <span>Net</span>
              <span className="text-secondary">230</span>
              <span>USDT</span>
            </div>


            <div className="mt-10 w-full flex items-center gap-6">
              <div className="py-4 px-6 w-1/2 text-xl text-secondary text-center font-semibold rounded-full border border-secondary cursor-pointer" onClick={() => toBingo()}>
                Back
              </div>

              <div className="py-4 px-6 w-1/2 text-xl text-white text-center font-semibold rounded-full bg-secondary cursor-pointer" onClick={() => placeBet()}>
                Place Bet
              </div>
            </div>

          </div>

        </article>
      }

      {/* step 3 */}
      {
        step === Step.Placed &&
        <div>
          <div className="mt-[40%] text-center text-primary text-4xl font-bold">Bet Placed!</div>
          <div className="mt-8 mx-auto py-3 px-8 min-w-28 w-fit text-lg text-white text-center font-semibold rounded-full bg-secondary cursor-pointer" onClick={toBingo}>Check Bets</div>
        </div>
      }

      {/* <button onClick={() => openWallet()} className="p-2 px-4 bg-secondary rounded-2xl">
        錢包
      </button> */}
    </div>
  )
}

export default Home
