
import React, { useLayoutEffect, useRef } from 'react'
import './index.css'
import './App.css'
import { gsap } from "gsap";
import tokyo from './assets/images/tokyo.jpg'
import belgium from './assets/images/belgium.jpg'
import japan from './assets/images/japan.jpg'
import iceland from './assets/images/iceland.jpg'
import madrid from './assets/images/madrid.jpg'


const App = () => {

  const menu = useRef(null)

  const onMouseEnter = (el) => {
    gsap.fromTo(el, { opacity: 0, scale: 0.8, xPercent: 25, yPercent: 50, rotation: -15 }, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 })
  }

  const onMouseLeave = (el) => {
    gsap.fromTo(el, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 }, { opacity: 0, scale: 1, xPercent: 25, yPercent: -50, rotation: -15 })
  }

  const onMouseMove = ({ x, y }, el) => {
    gsap.to(el, { x, left: "350px", y: Math.round(-y + el.offsetHeight) })

  }

  useLayoutEffect(() => {
    const elements = menu.current.children

    for (let el of elements) {

      el.children[0].addEventListener("mouseenter", () => onMouseEnter(el.children[1]))
      el.children[0].addEventListener("mouseleave", () => onMouseLeave(el.children[1]))
      el.children[0].addEventListener("mousemove", e => onMouseMove(e, el.children[1]))

    }
  }, [])







  return (
    <div ref={menu} className='bg-[#161616] pl-12 py-12 flex justify-between flex-col h-screen text-9xl text-white'>
      <div className='relative'>
        <h2 className='glitch w-fit cursor-pointer' data-text="JAPAN">JAPAN</h2>
        <img src={japan} className="w-[550px] absolute opacity-0 top-0 " alt="" />
      </div>
      <div className='relative'>
        <h2 className='glitch w-fit cursor-pointer' data-text="TOKYO">TOKYO</h2>
        <img src={tokyo} className="w-[550px] absolute opacity-0 top-0" alt="" />
      </div>
      <div className='relative'>
        <h2 className='glitch w-fit cursor-pointer' data-text="BELGIUM">BELGIUM</h2>
        <img src={belgium} className="w-[550px] absolute opacity-0 top-0" alt="" />
      </div>
      <div className='relative'>
        <h2 className='glitch w-fit cursor-pointer' data-text="MADRID">MADRID</h2>
        <img src={madrid} className="w-[550px] absolute opacity-0 top-0" alt="" />
      </div>

      <div className='relative'>
        <h2 className='glitch w-fit cursor-pointer' data-text="ICELAND">ICELAND</h2>
        <img src={iceland} className="w-[550px] absolute opacity-0 top-0" alt="" />
      </div>

    </div>
  )
}

export default App