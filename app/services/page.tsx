import type { Metadata } from 'next'
import ServicesSection from '@/components/service-section'

export const metadata: Metadata = {
  title: 'Professional Web Development Services | Your Name',
  description:
    'Expert Next.js, TypeScript and React development services for businesses of all sizes. From static landing pages to full e-commerce solutions.',
  keywords:
    'web development, Next.js, TypeScript, React, Tailwind CSS, responsive design, SEO optimization'
}

export default function ServicesPage() {
  return (
    <main className='container mx-auto min-h-screen px-4 py-24'>
      <h1 className='mb-12 text-center text-4xl font-bold'>Our Services</h1>
      <ServicesSection />
    </main>
  )
}
