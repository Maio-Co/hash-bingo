import RefreshIcon from '@/assets/icons/refresh.svg?react'
import QuestionIcon from '@/assets/icons/question.svg?react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import { ChangeEvent, useMemo, useState } from 'react'

enum Step { Bingo = 'Bingo', Block = 'Block', Placed = 'Placed' }
enum BlockType { Custom = 'Custom', Auto = 'Auto' }

const Home = () => {

  // step page
  const [step, setStep] = useState(Step.Bingo)
  const toBlock = () => setStep(Step.Block)
  const toPlaced = () => setStep(Step.Placed)
  const toBingo = () => setStep(Step.Bingo)

  const [bingoList, setBingoList] = useState(Array.from(Array(16)).map(() => ''))

  const isGenerate = useMemo(() => bingoList.every(item => item !== ''),[bingoList])

  const generation = () => {
    setBingoList(generateRandomArray(16))
  }

  // block form
  const [blockType, setBlockType] = useState(BlockType.Auto)
  const [blockInput, setBlockInput] = useState('')

  return (
    <div className="px-4 py-4 h-full">
      {/* step 1 */}
      {
        step === Step.Bingo &&
        <article>
          <div className="mb-8 flex h-12">
            <span className="text-4xl text-primary font-bold">Bingo Card</span>
            { isGenerate &&
              <div className="ml-auto flex w-11 h-11 bg-primary-dark rounded-2xl" onClick={generation}>
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
            <QuestionIcon className="ml-auto" />
          </div>

          <div className="flex justify-center">
            <div className="py-3 px-6 min-w-28 text-white text-center font-semibold rounded-full bg-secondary" onClick={isGenerate ? toBlock : generation}>
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
              { blockType === BlockType.Custom ? <TextField className="ml-4" id="outlined-basic" label="Enter Block Number" variant="outlined" /> : <span className="text-xl">Enter Block Number</span> }
            </div>
            <div className="flex items-center gap-4">
              <Radio value={BlockType.Auto} checked={blockType === BlockType.Auto} onChange={(event: ChangeEvent<any>) => setBlockType(event.target.value)} />
              <span className="text-xl">Auto Assign Block</span>
            </div>
          </div>


          <div className="mt-40">
            <div className="mx-4 px-1 py-3 flex items-center justify-between gap-2 text-xl border-b border-bg-dark">
              <div className="flex gap-4">
                <span>注數</span>
                <span className="text-secondary">1</span>
              </div>

              <div className="flex gap-4">
                <span>每注</span>
                <span className="text-secondary">200</span>
                <span>元</span>
              </div>

              <div className="flex gap-4">
                <span>手續費</span>
                <span className="">15%</span>
              </div>
            </div>


            <div className="mx-auto py-4 w-fit flex gap-4 text-2xl">
              <span>總金額</span>
              <span className="text-secondary">230</span>
              <span>元</span>
            </div>

            <div className="mt-10 mx-auto py-3 px-6 min-w-28 w-fit text-white text-center font-semibold rounded-full bg-secondary" onClick={toPlaced}>
              Place Bet
            </div>
          </div>

        </article>
      }

      {/* step 3 */}
      {
        step === Step.Placed &&
        <div>
          <div className="mt-10 text-center text-primary text-3xl font-bold">Bet Placed!</div>
          <div className="mt-8 mx-auto py-3 px-6 min-w-28 w-fit text-white text-center font-semibold rounded-full bg-secondary" onClick={toBingo}>Check Bets</div>
        </div>
      }
    </div>
  )
}

export default Home


function generateRandomArray(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const result = [] as string[]

  while (result.length < length) {
    const randomIndex = Math.floor(Math.random() * chars.length)
    const randomChar = chars[randomIndex]
    if (!result.includes(randomChar)) {
      result.push(randomChar)
    }
  }

  return result
}
