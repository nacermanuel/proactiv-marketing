import styles from './page.module.css'

import Comp01 from './components/Comp01'
import  {Spinning}  from './components/Spinning/Spinning'


export default function Home() {
  return (
        <div id="containerNEW" className="flex flex-col justify-center items-start h-auto pt-4 ">
          <Comp01/>
          <Spinning/>
        </div>
  )
}
