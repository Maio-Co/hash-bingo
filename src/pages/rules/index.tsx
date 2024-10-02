import TitleContainer from '@/context/title-context'
import UserIcon from '@/assets/icons/user.svg?react'
import CloseIcon from '@/assets/icons/close.svg?react'
import { useEffect } from 'react'
import DrawerContainer from '@/context/drawer-context'
import { useNavigate } from 'react-router'


const Rules = () => {
  const navigate = useNavigate()

  const { setTitle } = TitleContainer.useContainer()
  const { openDrawer } = DrawerContainer.useContainer()


  useEffect(() => {
    setTitle(
      <>
        <div className="absolute t-2 left-4">
          <UserIcon onClick={openDrawer} />
        </div>
        <div className="mx-auto text-2xl font-bold">Bingo Card</div>
      </>
    )
  }, [])


  const rules = [
    'Your Bingo card is randomly filled with a unique combination of letters (a-z) and numbers (0-9).',
    'If you don\'t like your card, you can choose to regenerate a new one before selecting a block.',
    'Choose a Solana block to bet on, or let the system randomly select one for you, you cannot bet on a block that is already mined.',
    'Once the block is mined, its Hash value is revealed.',
    'Match the entire Hash value to the corresponding characters on your card.',
    'Connect 4 matching squares in a straight line (horizontal, vertical, or diagonal) to achieve Bingo and win the reward pool!',
    'If multiple players achieve Bingo on the same block, the first player to have placed a bet on that block wins the entire reward pool.',
    'Your bet, minus a 15%  transaction fee, contributes to the reward pool.',
    'Your bet, minus a 15%  transaction fee, contributes to the reward pool.',
    'Your bet, minus a 15%  transaction fee, contributes to the reward pool.',
    'Your bet, minus a 15%  transaction fee, contributes to the reward pool.',
    'Your bet, minus a 15%  transaction fee, contributes to the reward pool.',
  ]

  return (
    <div className="p-5">
      <div className="mb-3">
        <CloseIcon className="ml-auto" onClick={() => navigate('/')} />
      </div>

      <ul style={{ listStyleType: 'disc' }} className="pl-6 text-xl">
        { rules.map(lorem => <li className="mb-2" key={lorem}>{lorem}</li>) }
      </ul>
    </div>
  )
}

export default Rules
