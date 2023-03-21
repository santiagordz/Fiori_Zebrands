import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ConfirmLinkProps {
  to: string;
  message: string;
  children: React.ReactNode;
  className: string;
}

const ConfirmLink: React.FC<ConfirmLinkProps> = ({
  to,
  message,
  children,
  className,
}) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent) => {
    if (message) {
      event.preventDefault();
      const confirmNavigation = window.confirm(message);
      if (confirmNavigation) {
        navigate(to);
      }
    }
  };

  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default ConfirmLink;
