import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-center gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 w-[60%] flex-1 md:mt-0'>
        <h1 className='mb-6 text-4xl font-bold'>Hey, I&#39;m Dayo.</h1>
        <h2 className='text-muted-foreground mb-6 text-xl font-medium sm:text-3xl'>
          Building Fast, Modern Websites with Next JS
        </h2>
        <p className='text-foreground mt-3 mb-8 max-w-3xl text-xl font-bold'>
          I'm a dedicated Web Developer based in London, UK, My mission is to
          provide affordable solutions for small businesses and startups,
          helping you build a strong online presence
        </p>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          <Link
            href='/'
            className='flex w-fit items-center justify-center rounded-md bg-blue-500 px-6 py-2 text-white'
          >
            Our Services
          </Link>{' '}
          <Link
            href='/'
            className='flex w-fit items-center justify-center rounded-md bg-blue-800 px-6 py-2 text-white'
          >
            BlogPosts
          </Link>
        </div>
      </div>
      <div className='relative w-[40%]'>
        <Image
          className='flex-1 rounded-full grayscale'
          src='/dayo-luton3.jpg'
          alt='intro page image'
          width={375}
          height={375}
          priority
        />
      </div>
    </section>
  )
}
