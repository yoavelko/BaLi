import './Carousel.css'
import { useState, useEffect } from 'react'

function Carousel({ children, show }) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children?.length)
    const [touchPosition, setTouchPosition] = useState(null)

    useEffect(() => {
        children && setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 &&
                    <div onClick={prev} className="left-arrow">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8ElEQVR4nO3WuUqDURAG0B9ERYUEXApj49KIwUbxiQPBNohYidi5FNqqTaKNC6hvcCQ4ggqxCnMj5HuBMzD3zkxVjTOEYAkHWC2BL+DaZ46y8TouA79FIxOv4TzwO6xk4nM4DbyX2nvM4iTwe6xl4jM4DvwBG5n4NA4Df8RmJj4V/7yfJ2xl4pPoBP6MZiY+gf3AX7GTjbcDf8NuNt4K/B17afhIFFC8BQMe4Qu2q+wo+Q1HYhD9KqLMKP5jGa1X2fFzHfdS1/GAg6Rb6hit4ezbSdYoUUQdF1HEDZZLFDGPqyJn+VewGMMq/y2M8+/zAfLmtvoTTmaZAAAAAElFTkSuQmCC" alt="" />
                    </div>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - show) &&
                    <div onClick={next} className="right-arrow">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6klEQVR4nO3WIS9GURgH8IO9U9gE9TXFRtUoIknVZI2Pgfw2qoQPYCia90sYTWCC2Yz52d19ApJ0no37Lyf+f9u59zxPKV26/DLo46w5S0ZwrM0t5jMAEzgPxAOWMhDjOAnEM1YzEGM4CMQrNjIQI9gLxDu2qiOaYBsfAdktGcEm3gIxwGgGYh0vgThCLwOxgqdAXGAyA7GI+0BcYzoDMYebQAz/F8D3KxhWvQKZH6HM31DmQyTrKdYOo/0obgA7tcfxYco41i4kp18WkrWa5VO4ivJHLFcr/7GU3mGh1A5mcYmZ6uVd/nQ+AZqKirIaTQ5dAAAAAElFTkSuQmCC" alt="" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Carousel