import Image from 'next/image'

import logoImage from '../../../../public/spotify-logo-img.png'
import { ButtonLogin } from '@/components/login/login-button'

const Page: React.FC = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-14'>
      <Image
        src={logoImage}
        alt='spotify logo'
        className='w-[90%] lg:w-1/4'
        priority
      />
      <ButtonLogin field='Login' />
    </div>
  )
}

export default Page
