import { ReactNode } from "react";
import { StyledBackButton } from "./StyledBackButton";

import { useNavigate } from "react-router-dom";

interface IBackButtonProps {
  children: ReactNode
}

export const BackButton = ({ children }: IBackButtonProps) => {

  const navigate = useNavigate()

  return (
    <StyledBackButton onClick={() => navigate(-1)}>
      {children}
    </StyledBackButton>
  )
    
};
