import Intro from '@/components/Intro'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function Home() {
  const content = `#markdown heading`

  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <Intro />
        <MDXRemote source={content} />
      </div>
    </section>
  )
}
