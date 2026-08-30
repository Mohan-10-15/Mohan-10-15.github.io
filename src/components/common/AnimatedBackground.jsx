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
        70,
        Math.max(25, Math.floor((width * height) / 24000))
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        velocityX: (Math.random() - 0.5) * 0.3,
        velocityY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.22 + 0.08
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

    const drawParticle = (particle) => {
      context.beginPath();
      context.arc(
        particle.x,
        particle.y,
        particle.radius,
        0,
        Math.PI * 2
      );

      context.fillStyle = `rgba(23, 28, 38, ${particle.opacity})`;
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

          particle.x += (distanceX / distance) * force * 0.5;
          particle.y += (distanceY / distance) * force * 0.5;
        }
      }
    };

    const drawConnections = () => {
      const connectionDistance = 120;

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
              (1 - distance / connectionDistance) * 0.05;

            context.beginPath();
            context.moveTo(first.x, first.y);
            context.lineTo(second.x, second.y);

            context.strokeStyle = `rgba(23, 28, 38, ${opacity})`;
            context.lineWidth = 0.6;
            context.stroke();
          }
        }
      }
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);

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
    </div>
  );
}

export default AnimatedBackground;
