import React, { FC, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200  mt-8 pt-8 ">
      {children}
    </div>
  );
};

export default Card;
