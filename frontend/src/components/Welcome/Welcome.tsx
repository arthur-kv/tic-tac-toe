import { WelcomeProps } from './types'

export const Welcome = ({ onGameStart }: WelcomeProps) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Hit the button below to start playing</p>
      <button type="button" className="button" onClick={() => onGameStart()}>
        Start
      </button>
    </div>
  )
}
