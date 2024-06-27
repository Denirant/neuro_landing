"use client";

import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const PerlinNoiseFlow: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let particles: p5.Vector[] = [];
      const maximum = 10000;
      let noiseScale = 0.01;
      let speed = 0.7;
      const alpha = 50;
      const attractionRadius = 170;
      const attractionStrength = -0.035;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < maximum; ++i) {
          particles.push(p.createVector(p.random(p.width), p.random(p.height)));
        }
        p.stroke(255, 255, 255, alpha);
        setInterval(changeParameters, 10000);
      };

      p.draw = () => {
        p.background(0, 10);
        for (let i = 0; i < maximum; ++i) {
          let particle = particles[i];
          let n = p.noise(particle.x * noiseScale, particle.y * noiseScale);
          let a = p.TWO_PI * n;
          let dx = p.cos(a) * speed;
          let dy = p.sin(a) * speed;

          let distanceToCursor = p.dist(particle.x, particle.y, p.mouseX, p.mouseY);

          if (distanceToCursor < attractionRadius && mouseIsOnScreen()) {
            let attraction = p.createVector(p.mouseX - particle.x, p.mouseY - particle.y);
            attraction.mult(attractionStrength * (attractionRadius - distanceToCursor) / attractionRadius);
            dx += attraction.x;
            dy += attraction.y;
          }

          let nx = particle.x + dx;
          let ny = particle.y + dy;
          p.line(particle.x, particle.y, nx, ny);
          particle.x = nx;
          particle.y = ny;
          if (!onScreen(particle)) {
            particle.x = p.random(p.width);
            particle.y = p.random(p.height);
          }
        }
      };

      const onScreen = (v: p5.Vector) => {
        return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
      };

      const mouseIsOnScreen = () => {
        return p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height;
      };

      const changeParameters = () => {
        noiseScale = p.random(0.005, 0.02);
        speed = p.random(0.5, 1);
      };

      let myP5 = new p5(sketch, sketchRef.current!);

      return () => {
        myP5.remove();
      };
    };
  }, []);

  return <div ref={sketchRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default PerlinNoiseFlow;
