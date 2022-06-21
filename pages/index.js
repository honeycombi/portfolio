import 'katex/dist/katex.min.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="leading-[1.75]">
      <div>
        <p className="pt-10 text-center text-5xl">Hi, I'm Gary</p>
      </div>
      <br />
      <div className="flex gap-8">
        <div className="w-3/4">
          I'm the cofounder of{' '}
          <a href="https://www.nexusworkshop.org" target="_blank" rel="noreferrer">
            The Nexus Workshop
          </a>{' '}
          and a rising high school junior at{' '}
          <a href="https://www.mka.org/" target="_blank" rel="noreferrer">
            Montclair Kimberley Academy
          </a>
          . Broadly speaking, I'm mostly interested in math and computer science.
          {/* Currently Exploring */}
          <br /> <br />
          <p className="text-center text-xl font-bold">Currently Exploring</p>
          <ul>
            <li>
              Learning the zero knowledge cryptography circuit compiler language{' '}
              <a href="https://docs.circom.io" target="_blank" rel="noreferrer">
                Circom
              </a>
              .
            </li>
            <li>
              Growing, marketing, and creating content for my{' '}
              <a href="https://www.nexusworkshop.org" target="_blank" rel="noreferrer">
                nonprofit
              </a>
              .
            </li>
            <li>
              Speedtyping and learning the{' '}
              <a href="https://colemakmods.github.io/mod-dh/" target="_blank" rel="noreferrer">
                Colemak Mod-DH
              </a>{' '}
              keyboard layout.
            </li>
          </ul>
          {/* Past */}
          <br />
          <p className="text-center text-xl font-bold">Some Things I've Done In The Past</p>
          <ul>
            <li>
              Compete in math competitions. Most notably, I placed fourth place overall and third
              place for the geometry round at the{' '}
              <a href="https://cmimconline.org" target="_blank" rel="noreferrer">
                Carnegie Mellon Informatics and Mathematics Competition
              </a>
              . Also, I qualified for the {''}
              <a
                href="https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime"
                target="_blank"
                rel="noreferrer"
              >
                American Invitational Mathematics Competition
              </a>{' '}
              as an 8th grader. Nowadays, I give back to the math contest community through creating
              content for{' '}
              <a href="https://www.everaise.org" target="_blank" rel="noreferrer">
                Everaise Academy
              </a>
              .
            </li>
            <li>
              Play ice hockey. Back in 2019, I played in the{' '}
              <a
                href="https://www.tournoipee-wee.qc.ca/en/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Quebec International Pee-Wee Hockey Tournament
              </a>
              . In the same year, I was invited to both the{' '}
              <a href="https://twitter.com/CombineCrimson" target="_blank" rel="noreferrer">
                Harvard Crimson Combine
              </a>{' '}
              and the{' '}
              <a
                href="https://worldhockeyhub.com/world-selects-invitational-trophy/"
                target="_blank"
                rel="noreferrer"
              >
                World Selects Internationals
              </a>
              . Unfortunately, injuries and Covid-19 got in the way, stopping me from participating
              in these two events as well as large portions of the next two seasons. Nowadays, I
              don't play as competitively as I used to, but I still enjoy playing on my high
              school's team.
            </li>
          </ul>
        </div>
        <div className="mx-auto block w-1/4">
          <Image src="/static/images/photo.jpg" width="240" height="300" />
        </div>
      </div>
    </div>
  )
}
