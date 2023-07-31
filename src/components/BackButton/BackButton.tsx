import { ReactNode } from "react";
import { StyledBackButton } from "./StyledBackButton";

import { useNavigate } from "react-router-dom";

interface IBackButtonProps {
  children: ReactNode;
  favoriteClass?: string;
}

export const BackButton = ({ children, favoriteClass }: IBackButtonProps) => {

  const navigate = useNavigate()

  return (
    <StyledBackButton className={favoriteClass} onClick={() => navigate(-1)}>
      {children}
    </StyledBackButton>
  )
    
};
