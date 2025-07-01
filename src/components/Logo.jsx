import Image from 'next/image'

export function Logo(props) {
  return (
    <Image
      src="/images/logo-site.png"
      alt="Logo Forma Défense"
      width={120}
      height={40}
      priority
      {...props}
    />
  )
}
