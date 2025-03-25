import React, { useEffect, useRef } from 'react';

const StarryBackground = ({ density = 100, speed = 0.05, depth = 3 }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(); // Reinitialize stars when resizing
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Initialize the stars with improved colors for space feel
    function initStars() {
      stars = [];
      for (let i = 0; i < density; i++) {
        // Add more blue and purple stars for a cosmic look
        const colorChoice = Math.random();
        let color;
        
        if (colorChoice < 0.7) {
          // White to blue stars (70%)
          color = `rgba(${185 + Math.random() * 70}, ${185 + Math.random() * 70}, 255, ${0.5 + Math.random() * 0.5})`;
        } else if (colorChoice < 0.9) {
          // Purple stars (20%)
          color = `rgba(${180 + Math.random() * 50}, ${100 + Math.random() * 50}, ${220 + Math.random() * 35}, ${0.5 + Math.random() * 0.5})`;
        } else {
          // Yellow/red stars (10%)
          color = `rgba(255, ${150 + Math.random() * 105}, ${50 + Math.random() * 50}, ${0.5 + Math.random() * 0.5})`;
        }
        
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * depth,
          size: Math.random() * 1.5 + 0.5,
          color: color,
          blinkSpeed: Math.random() * 0.02 + 0.003,
          blinkDirection: Math.random() > 0.5 ? 1 : -1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: 1 + Math.random() * 3
        });
      }
    }
    
    // More frequent shooting stars
    let shootingStars = [];
    
    const addShootingStar = () => {
      if (Math.random() > 0.99) { // Increased frequency (5% chance)
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 100 + 150, // Longer trails
          speed: Math.random() * 15, // Faster movement
          angle: Math.PI / 4 + (Math.random() * Math.PI / 4),
          opacity: 1
        };
        shootingStars.push(shootingStar);
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars with enhanced twinkling
      stars.forEach(star => {
        // Update star blink with varied speeds
        star.opacity += star.blinkSpeed * star.blinkDirection * (Math.sin(Date.now() / (1000 * star.twinkleSpeed)) * 0.3 + 0.7);
        
        if (star.opacity > 1) {
          star.opacity = 1;
          star.blinkDirection = -1;
        } else if (star.opacity < 0.2) {
          star.opacity = 0.2;
          star.blinkDirection = 1;
        }
        
        // Parallax effect on scroll
        star.y += speed * star.z;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Draw star with a small glow effect for brighter stars
        if (star.size > 1.2) {
          ctx.shadowColor = star.color;
          ctx.shadowBlur = 5;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(')', `, ${star.opacity})`);
        ctx.fill();
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;
      });
      
      // Add occasional shooting star
      addShootingStar();
      
      // Draw shooting stars with enhanced glow
      shootingStars.forEach((star, index) => {
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.01;
        
        if (star.opacity <= 0) {
          shootingStars.splice(index, 1);
          return;
        }
        
        // Add glow effect to shooting stars
        ctx.shadowColor = 'rgba(180, 180, 255, 0.5)';
        ctx.shadowBlur = 10;
        
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        const gradient = ctx.createLinearGradient(
          star.x, star.y,
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.3, `rgba(180, 180, 255, ${star.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(180, 180, 255, 0)`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Reset shadow for performance
        ctx.shadowBlur = 0;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, depth]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};

export default StarryBackground;
