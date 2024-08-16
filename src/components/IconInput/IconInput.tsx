import { FC } from 'react';
import styled from 'styled-components';

interface IconInputProps {
    onClick: () => void;
    visible: boolean;
}

const IconInput: FC<IconInputProps> = ({ onClick, visible }) => {
    return (
        <IconContainer onClick={onClick}>
            <img 
              src={visible ? 'public/iconInput/open-eye.svg' : '/iconInput/close-eye.svg'} 
              alt="Toggle visibility" 
            />
        </IconContainer>
    );
};
// public\iconInput\open-eye.svg
export default IconInput;

const IconContainer = styled.div`
  position: absolute;
  right: 10px; /* Расположите иконку справа, отступ 10px */
  top: 50%; /* Центрируйте по вертикали */
  transform: translateY(-50%); /* Центрирование по вертикали */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1; /* Обеспечивает, что иконка будет поверх поля ввода */
`;
