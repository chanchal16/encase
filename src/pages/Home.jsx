import React from 'react'
import logo from '../../public/logo.svg'

export const Home = () => {
  return (
    <div className='template-intro'>
        <div className='pt-24 mb-2'>
        <img src={logo} className='w-16 h-16 mx-auto '/>
        </div>
        <h2 className='text-4xl text-center font-bold mb-4  text-zinc-600'>Encase</h2>
        <p className="text-teal-600 text-2xl text-center font-medium mb-2">A react starter template</p>
        <p className='text-lg text-center text-zinc-600 font-medium mb-2'>
            Includes{" "}
            <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                tailwindCSS
            </a>
            , &nbsp;
            <a
                href="https://github.com/remix-run/react-router/blob/dev/docs/advanced-guides/migrating-5-to-6.md"
                target="_blank"
                rel="noopener noreferrer"
            >
                react-router-v6
            </a>
            &nbsp;and uses&nbsp;
            <a
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                webpack
            </a>{" "}
            as a build tool.
        </p>
    </div>
  )
}
