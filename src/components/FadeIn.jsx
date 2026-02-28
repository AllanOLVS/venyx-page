import React, { useState, useEffect, useRef } from 'react';

export default function FadeIn({ children, delay = 0, direction = 'up' }) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);

    const getTransform = () => {
        if (direction === 'up') return 'translateY(30px)';
        if (direction === 'down') return 'translateY(-30px)';
        if (direction === 'left') return 'translateX(30px)';
        if (direction === 'right') return 'translateX(-30px)';
        return 'none';
    };

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0'
                }`}
            style={{
                transform: isVisible ? 'none' : getTransform(),
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
}