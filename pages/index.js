import 'katex/dist/katex.min.css'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'

export default function Home() {
  return (
    <>
      <PageSEO />
      <div className="leading-[1.75]">
        <div>
          <p className="pt-10 text-center text-5xl">Hi, I'm Gary</p>
        </div>
        <br />
        <div className="flex gap-8">
          <div className="w-3/4">
            <p>
              I'm the cofounder of{' '}
              <a href="https://www.nexusworkshop.org" target="_blank" rel="noreferrer">
                The Nexus Workshop
              </a>{' '}
              and a rising high school junior at{' '}
              <a href="https://www.mka.org/" target="_blank" rel="noreferrer">
                Montclair Kimberley Academy
              </a>
              . Broadly speaking, I'm mostly interested in math and computer science.
            </p>
            <br />
            <p>
              Right now, I'm actively searching for things to do. If you want me to be part of
              whatever you're doing, reach out to me and let's continue the conversation there!
            </p>
            <br />
            <p>
              Feel free to contact me if you want to be friends with me! I enjoy meeting new people,
              especially diverse people that have different interests than me.
            </p>
          </div>
          <div className="mx-auto block w-1/4">
            <Image src="/static/images/photo.jpg" width="240" height="300" />
          </div>
        </div>
      </div>
    </>
  )
}
