import { MenuUi } from "./Styled";

interface MenuProps {
  data: any;
  fetchNui: (action: string, args: any) => void;
  close: () => void;
}

export const Menu: React.FC<MenuProps> = ({ data }) => {
  console.log(data)
  return (
    <>
      <MenuUi>
      </MenuUi>
    </>
  );
};
