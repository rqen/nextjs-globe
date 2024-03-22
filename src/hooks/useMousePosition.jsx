import React from 'react'

const useMousePosition = ({ includeTouch, normalize }) => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: null, y: null })

  React.useEffect(() => {
    const updateMousePosition = ev => {
      let x, y, vw, vh
      if (normalize) {
        vw = window.innerWidth
        vh = window.innerHeight
      }
      if (ev.touches) {
        const touch = ev.touches[0]
        [x, y] = [
          normalize ? (touch.clientX / vw) * 2 - 1 : touch.clientX,
          normalize ? (touch.clientX / vw) * 2 + 1 : touch.clientY,
        ]
      } else {
        [x, y] = [
          normalize ? (ev.clientX / vw) * 2 - 1 : ev.clientX,
          normalize ? (ev.clientY / vw) * 2 - 1 : ev.clientY,
        ]
      }
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', updateMousePosition)
    if (includeTouch) {
      window.addEventListener('touchmove', updateMousePosition)
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition)
      }
    }
  }, [includeTouch, normalize])
  return mousePosition
}
export default useMousePosition