import React from "react"
import { Gallery } from "next-gallery"

const ShowCase = () => {
  const images = [
    { src: "/events1/1.jpg", aspect_ratio: 4/4 },
    { src: "/events1/2.jpg", aspect_ratio: 4/4 },
    { src: "/events1/3.jpg", aspect_ratio: 4/4 },
    { src: "/events1/4.jpg", aspect_ratio: 4/4 },
    { src: "/events1/5.jpg", aspect_ratio: 4/3 },
    { src: "/events1/6.jpg", aspect_ratio: 4/3 },
    { src: "/events1/7.jpg", aspect_ratio: 4/3 },
    { src: "/events1/8.jpg", aspect_ratio: 16/9 },
    { src: "/events1/9.jpg", aspect_ratio: 16/9 },
    { src: "/events1/10.jpg", aspect_ratio: 16/9 },
    { src: "/events1/11.jpg", aspect_ratio: 16/9 },
    { src: "/events1/12.jpg", aspect_ratio: 4/3},
    { src: "/events1/13.jpg", aspect_ratio: 4/3 },
    { src: "/events1/14.jpg", aspect_ratio: 4/3 },
    { src: "/events1/15.jpg", aspect_ratio: 4/4 },
    { src: "/events1/16.jpg", aspect_ratio: 4/4 },
    { src: "/events1/17.jpg", aspect_ratio: 4/4 },
    { src: "/events1/18.jpg", aspect_ratio: 4/4 },
  ]

  const widths = [ 1000, 1600, 2400 ]
const ratios = [ 2, 4, 6, 8 ]
  return (
    <>
      <section className='showcase bg-top'>
      <Gallery {...{images, widths, ratios}} />
      </section>
    </>
  )
}

export default ShowCase
