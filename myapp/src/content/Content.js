import React from 'react'
import './Content.css'
import introimg from "../assets/images/intro.jpg"

import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";

const content = () => {
  return (
    <main>
      <HelmetProvider>
        <section id="home" className="home">
          <Helmet>
            <meta charSet='utf-8'/>
            <title> APX-dev </title>
            <meta name="description" content='#description' />
          </Helmet>
        <div className="intro_sec">
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style = {{ backgroundImage: `url(${introimg})`}}
          ></div>
          <div className='intro_text'>
            <h2>This is About me </h2>
            <Typewriter
              options={{
                strings: [
                  'I love work',
                  'I like coding',
                  'I enjoy learning',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </div>
        </div>
        </section>
      </HelmetProvider>

    </main>
  )
}

export default content
