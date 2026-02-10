"use client";

import { useEffect, useRef } from "react";

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = {
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            };
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: {
            x: number;
            y: number;
            size: number;
            opacity: number;
            speed: number;
            color: string;
            parallax: number;
        }[] = [];

        let shootingStars: {
            x: number;
            y: number;
            len: number;
            speed: number;
            opacity: number;
        }[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const count = Math.floor((window.innerWidth * window.innerHeight) / 2000);
            const colors = ["#ffffff", "#18013dff", "#800e1dff", "#4e0808ff"];

            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 1.8 + 0.2,
                    opacity: Math.random() * 0.7 + 0.3,
                    speed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
                    color: colors[Math.floor(Math.random() * colors.length)],
                    parallax: Math.random() * 0.5 + 0.1,
                });
            }
        };

        const createShootingStar = () => {
            if (Math.random() > 0.992 && shootingStars.length < 2) {
                shootingStars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * (window.innerHeight / 2),
                    len: Math.random() * 80 + 20,
                    speed: Math.random() * 10 + 5,
                    opacity: 1,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw regular stars
            stars.forEach((star) => {
                const px = star.x - mousePos.current.x * star.parallax;
                const py = star.y - mousePos.current.y * star.parallax;

                ctx.beginPath();
                ctx.arc(px, py, star.size, 0, Math.PI * 2);

                ctx.shadowBlur = star.size * 2;
                ctx.shadowColor = star.color;

                const alpha = Math.floor(star.opacity * 255).toString(16).padStart(2, '0');
                ctx.fillStyle = star.color + alpha;
                ctx.fill();

                star.opacity += star.speed;
                if (star.opacity > 0.9 || star.opacity < 0.2) {
                    star.speed = -star.speed;
                }
            });

            // Draw shooting stars
            createShootingStar();
            shootingStars.forEach((s, i) => {
                ctx.beginPath();
                const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.len, s.y - s.len);
                ctx.stroke();

                s.x += s.speed;
                s.y += s.speed;
                s.opacity -= 0.01;

                if (s.opacity <= 0 || s.x > window.innerWidth || s.y > window.innerHeight) {
                    shootingStars.splice(i, 1);
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.8 }}
        />
    );
}
