import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import aws from '../assets/animaciones/aws.png';
import chatGpt from '../assets/animaciones/chat-gpt.png';
import claude from '../assets/animaciones/claude.png';
import dataCamp from '../assets/animaciones/datacamp.jpeg';
import docker from '../assets/animaciones/docker.png';
import excel from '../assets/animaciones/excel.png';
import jupyter from '../assets/animaciones/jupyter.png';
import microsoft from '../assets/animaciones/microsoft.png';
import postgres from '../assets/animaciones/postgres.png';
import powerBi from '../assets/animaciones/power-bi.png';
import python from '../assets/animaciones/python.png';
import ssms from '../assets/animaciones/ssms.jpg';
import vsCode from '../assets/animaciones/vs-code.png';

const logos = [
  aws, chatGpt, claude, dataCamp, docker, excel, jupyter,
  microsoft, postgres, powerBi, python, ssms, vsCode,
];

const positions = [
  { top: '10%', left: '3%' },
  { top: '14%', right: '3%' },
  { top: '24%', left: '7%' },
  { top: '28%', right: '7%' },
  { top: '40%', left: '2%' },
  { top: '44%', right: '2%' },
  { top: '57%', left: '6%' },
  { top: '61%', right: '6%' },
  { top: '72%', left: '3%' },
  { top: '76%', right: '3%' },
  { top: '86%', left: '8%' },
  { top: '89%', right: '8%' },
  { top: '52%', right: '18%' },
];

const shuffleLogos = (items) => [...items]
  .sort(() => Math.random() - 0.5)
  .slice(0, 4);

const AmbientAnimations = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [visibleLogos, setVisibleLogos] = useState(logos);

  useEffect(() => {
    const updateHeroVisibility = () => {
      setIsHeroVisible(window.scrollY < window.innerHeight * 0.8);
    };

    updateHeroVisibility();
    window.addEventListener('scroll', updateHeroVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateHeroVisibility);
  }, []);

  useEffect(() => {
    if (isHeroVisible) {
      setVisibleLogos(logos);
      return undefined;
    }

    setVisibleLogos(shuffleLogos(logos));
    const rotation = window.setInterval(() => {
      setVisibleLogos(shuffleLogos(logos));
    }, 24000);

    return () => window.clearInterval(rotation);
  }, [isHeroVisible]);

  return (
    <div className="ambient-layer" aria-hidden="true">
      {visibleLogos.map((logo, index) => (
        <motion.img
          className="ambient-logo"
          key={`${logo}-${index}`}
          src={logo}
          alt=""
          style={positions[index]}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -8, 3, 0],
            rotate: [-2, 1, -1, 0],
          }}
          transition={{
            duration: 18,
            delay: index * .6,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default AmbientAnimations;
