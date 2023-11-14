import Link from "next/link"
import vector404 from "./assets/vector404.jpg"
import Image from "next/image"
import style from "./styles/NotFound.module.scss"

export default function NotFound() {
  return (
    <main className={style.mainWrapper}>
      <div className={style.innerWrapper}>
        <Image src={vector404} className={style.innerWrapperImage} />
        <Link href="/" className={style.goBackBtn}>Return home</Link>
      </div>
    </main>
  )
}