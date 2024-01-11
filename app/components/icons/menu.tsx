import IconBase from "./icon-base";

const Menu: React.FC = (props) => (
  <IconBase width={40} height={40} viewBox={'0 0 40 40'} {...props}>
    <rect width="40" height="40" rx="12" fill="white"/>
    <rect x="12" y="13" width="16" height="1.5" rx="0.75" fill="#0F0D23"/>
    <rect x="12" y="19" width="10" height="1.5" rx="0.75" fill="#0F0D23"/>
    <rect x="12" y="25" width="16" height="1.5" rx="0.75" fill="#0F0D23"/>
  </IconBase>
);

export default Menu;
