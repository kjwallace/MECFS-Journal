import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from 'styled-components';

const Slider = () => {
  const constraintsRef = useRef(null);
  const [position, setPosition] = useState(0);
  const dragX = useMotionValue(0);

  const onDrag = (event, info) => {
    // Calculate the position within the constraints
    const newPosition = Math.round(info.point.x / (constraintsRef.current.clientWidth / 10)) * 10;
    setPosition(newPosition);
  };

  useEffect(() => {
    console.log('Current position:', position);
  }, [position]);

  return (
    <DragArea className="drag-area" ref={constraintsRef}>
        
      <DraggableElement
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        onDrag={onDrag}
        style={{
          x: useTransform(dragX, (value) => value),
          width: '5%',
          height: '100%',
        }}
      />
    </DragArea>
  );
};

const DraggableElement = styled(motion.div)`
  background: #4caf50;
  width: 100px;
  height: 100%;
  border-radius: 30px;
`;

const DragArea = styled(motion.div)`
  display: flex;
  width: 90vw;
  height: 5vh;
  background: #ffffff;
  border-radius: 30px;
  margin: 5px;
`;

export default Slider;
