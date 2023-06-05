import styles from './page.module.css'

import Comp01 from './components/Comp01'
import  {Spinning}  from './components/Spinning/Spinning'
import Comp02 from './components/Comp02'
import Comp03 from './components/Comp03'

export default function Home() {
  return (
        <div id="containerNEW" className="flex flex-col justify-center items-start h-auto pt-4 ">
          <Comp01/>
          <Spinning/>
          <Comp02/>
          <Comp03/>
        </div>
  )
}
