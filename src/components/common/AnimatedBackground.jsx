import { useEffect, useRef } from "react";

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return undefined;
    }

    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;

    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    const createParticles = () => {
      const particleCount = Math.min(
        100,
        Math.max(35, Math.floor((width * height) / 18000))
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.7 + 0.6,
        velocityX: (Math.random() - 0.5) * 0.35,
        velocityY: (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.45 + 0.2
      }));
    };

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createParticles();
    };

    const updateMousePosition = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const clearMousePosition = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const drawGrid = () => {
      const gridSize = 52;

      context.save();
      context.strokeStyle = "rgba(66, 217, 255, 0.035)";
      context.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.restore();
    };

    const drawParticle = (particle) => {
      context.beginPath();
      context.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      context.fillStyle = `rgba(66, 217, 255, ${particle.opacity})`;
      context.fill();
    };

    const updateParticle = (particle) => {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x < -10) {
        particle.x = width + 10;
      }

      if (particle.x > width + 10) {
        particle.x = -10;
      }

      if (particle.y < -10) {
        particle.y = height + 10;
      }

      if (particle.y > height + 10) {
        particle.y = -10;
      }

      if (mouse.x !== null && mouse.y !== null) {
        const distanceX = particle.x - mouse.x;
        const distanceY = particle.y - mouse.y;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        if (distance < mouse.radius && distance > 0) {
          const force = (mouse.radius - distance) / mouse.radius;

          particle.x += (distanceX / distance) * force * 0.7;
          particle.y += (distanceY / distance) * force * 0.7;
        }
      }
    };

    const drawConnections = () => {
      const connectionDistance = 125;

      for (let index = 0; index < particles.length; index += 1) {
        for (
          let nextIndex = index + 1;
          nextIndex < particles.length;
          nextIndex += 1
        ) {
          const first = particles[index];
          const second = particles[nextIndex];

          const distanceX = first.x - second.x;
          const distanceY = first.y - second.y;

          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.16;

            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);

            context.strokeStyle = `rgba(66, 217, 255, ${opacity})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

      drawGrid();

      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      drawConnections();

      animationFrameId = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", clearMousePosition);

    return () => {
      window.cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", clearMousePosition);
    };
  }, []);

  return (
    <div className="animated-background" aria-hidden="true">
      <canvas ref={canvasRef} className="animated-background__canvas" />

      <div className="animated-background__orb animated-background__orb--one" />
      <div className="animated-background__orb animated-background__orb--two" />

      <div className="animated-background__scanline" />
      <div className="animated-background__noise" />
    </div>
  );
}

export default AnimatedBackground;