interface IMenuLinkProps {
  href: string;
  text: string;
  className?: string;
  isButton?: boolean;
  onClick?: () => void;
}

const MenuLink = ({
  href = '/',
  text = '',
  className = '',
  isButton = false,
  onClick = () => {},
}: IMenuLinkProps) => {
  return <div>Menu link</div>;
};

export default MenuLink;
