import { type FC, useState, useEffect, useRef } from "react";
import styles from "./css/newcarrusel.module.css";
import { CARRUSEL_ITEMS } from "./config";

const Carrusel: FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);
    const totalSlides = CARRUSEL_ITEMS.length;

    const nextSlide = () => {
        setActiveSlide(prev => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setActiveSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    const startAutoSlide = () => {
        if (!slideInterval.current) {
            slideInterval.current = setInterval(() => {
                nextSlide();
            }, 3000);
        }
    };

    const stopAutoSlide = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
            slideInterval.current = null;
        }
    };

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, []);

    return (
        <section className={styles.carrusel}>
            <button onClick={prevSlide} className={styles.btnLeft}>
                &lt;
            </button>
            <article 
                className={styles.containerCarrusel}
                onMouseEnter={stopAutoSlide} 
                onMouseLeave={startAutoSlide}
            >
                <article 
                    className={styles.slidesContainer}
                    style={{
                        transform: `translateX(-${activeSlide * 100}%)`,
                        transition: "transform 0.5s ease-in-out"
                    }}
                >
                    {CARRUSEL_ITEMS.map((item) => (
                        <section key={item.id} className={styles.slide}>
                            <a className={styles.carruselItem} href={item.mark?.toLocaleLowerCase()}>
                                <img
                                    className={styles.imagenCarrusel}
                                    title={item.alt}
                                    src={item.src}
                                    alt={item.alt}
                                    width={item.width}
                                    height={item.height}
                                />
                            </a>
                        </section>
                    ))}
                </article>
            </article>
            <button type="button" onClick={nextSlide} className={styles.btnRight}>
                &gt;
            </button>
        </section>
    );
};

export default Carrusel;