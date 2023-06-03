import styles from './page.module.css'

import Comp01 from './components/Comp01'


export default function Home() {
  return (
    <main className={styles.main}>
        <div id="containerNEW" className="flex justify-center items-start w-[1200px] h-auto min-h-[100vh] pt-4">
          <Comp01/>
        </div>
    </main>
  )
}
