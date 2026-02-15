export const playClickSound = () => {
  if (typeof window !== 'undefined') {
    try {
      const audio = new Audio('/sounds/click.mp3')
      audio.volume = 0.2
      audio.play().catch(e => console.log('Audio play failed:', e))
    } catch (error) {
      console.log('Sound not available')
    }
  }
}
