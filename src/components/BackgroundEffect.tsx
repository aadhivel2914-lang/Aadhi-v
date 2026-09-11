import React, { useEffect, useRef } from 'react';

export const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const particleCount = Math.min(65, Math.floor(width / 22));
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#06b6d4', '#38bdf8', '#818cf8', '#a855f7'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Wrap edges
        if (p1.x < 0) p1.x = width;
        else if (p1.x > width) p1.x = 0;
        if (p1.y < 0) p1.y = height;
        else if (p1.y > height) p1.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.shadowColor = p1.color;
        ctx.shadowBlur = 8;
        ctx.fill();

        // Connect with other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#06b6d4';
            ctx.globalAlpha = (1 - dist / 110) * 0.15;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Slight attraction or line to cursor if close
        const dmx = p1.x - mouseX;
        const dmy = p1.y - mouseY;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < 140) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = '#38bdf8';
          ctx.globalAlpha = (1 - distMouse / 140) * 0.25;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Cyber Ambient Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-cyan-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 sm:w-[480px] sm:h-[480px] bg-violet-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-75" />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  );
};
