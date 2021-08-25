import { HTMLAttributes, useEffect, useState } from 'react'

import Image, {ImageProps} from "next/image"

import styles from './styles.module.css'

export const Page = (props: HTMLAttributes<HTMLElement>) => (
  <div className={styles.container}>
    <div className={styles.card} {...props} />
  </div>
)

export const Code = (props: HTMLAttributes<HTMLElement>) => <code className={styles.inlineCode} {...props} />

export const Button = (props: HTMLAttributes<HTMLElement>) => <button className={styles.button} {...props} />

export const FixedImage = (props: ImageProps) => {
  const [isLoaded, toggleLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      toggleLoaded(true)
    }, 3000);
  }, [])

  return <Image alt={props.alt} {...props} className={`${styles.image} ${props.className || ''} ${isLoaded ? '' : styles.blur}`} />
}
