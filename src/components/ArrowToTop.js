import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll';

const ArrowToTop = () => {
    const [showArrow, setShowArrow] = useState(false);

    const handleShowArror = () => {
        window.scrollY > 350 ? setShowArrow(true) : setShowArrow(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleShowArror);
        return () => window.removeEventListener('scroll', handleShowArror);
    }, []);

    return (
        showArrow && (
            <div className="arrowToTop" onClick={() => scroll.scrollToTop({duration: 500})}>
                <IoIosArrowUp size={60} />
            </div>
        )
    );
};

export default ArrowToTop;
