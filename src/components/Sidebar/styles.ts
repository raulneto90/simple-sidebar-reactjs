import styled from 'styled-components';

export const Container = styled.aside`
  width: 250px;
  height: 100vh;
  background: #2f4050;
`;

export const SidebarItems = styled.ul`
  height: auto;
  width: 100%;
  
`;

export const MenuItem = styled.li`
  width: 100%;
  height: 60px;
  padding: 0 16px 0 24px;
  list-style-type: none;

  display: flex;
  align-items: center;

  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  color: white;

  > svg {
    margin-right: 16px;
  }

  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: #293846;
  }

  #active {
    background: #293846;
  }
`;