import { useRef } from 'react'

export default function useFollowCursor() {
  const areaRef = useRef(null)
  const cursorRef = useRef(null)

  const onPointerMove = (event) => {
    const cursor = cursorRef.current
    if (event.pointerType !== 'mouse' || !cursor) return

    const bounds = areaRef.current.getBoundingClientRect()
    const x = event.clientX - bounds.left - cursor.offsetWidth / 2
    const y = event.clientY - bounds.top - cursor.offsetHeight / 2
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
    cursor.style.visibility = 'visible'
  }

  const onPointerLeave = () => {
    if (cursorRef.current) cursorRef.current.style.visibility = 'hidden'
  }

  return {
    cursorRef,
    areaProps: { ref: areaRef, onPointerMove, onPointerLeave },
  }
}
