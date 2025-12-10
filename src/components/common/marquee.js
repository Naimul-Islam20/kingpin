"use client";
import React, { useEffect, useRef } from "react";

export default function ReusableMarquee({ items, speed = 1.2 }) {
  const marqueeRef = useRef(null);
  const isPausedRef = useRef(false);

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId;
    let position = 0;

    const animate = () => {
      if (!isPausedRef.current) {
        position -= speed;

        const itemWidth = marquee.children[0]?.offsetWidth || 0;
        const resetPoint = -(itemWidth * items.length);

        if (position <= resetPoint) {
          position = 0;
        }

        marquee.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [items, speed]);

  return (
    <div
      className="overflow-hidden w-full py-3"
      onMouseEnter={() => (isPausedRef.current = true)}
      onMouseLeave={() => (isPausedRef.current = false)}
    >
      <div ref={marqueeRef} className="flex transition-none duration-0">
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0"
            style={{ width: "calc(28.33vw - 1rem)" }}
          >
            <div className="bg-white rounded shadow-md overflow-hidden duration-300 mx-3">
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                <h4 className="text-black mb-2 text-xl font-bold">
                  {item.title}
                </h4>
                <p className="text-black text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
