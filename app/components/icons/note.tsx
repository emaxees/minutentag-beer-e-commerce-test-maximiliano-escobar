import IconBase from "./icon-base";

const Note: React.FC = (props) => (
  <IconBase width={24} height={24} viewBox={'0 0 24 24'} {...props}>
    <path d="M9 8H14" stroke="#8F8F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 16H14" stroke="#8F8F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12H16" stroke="#8F8F8F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="3.75" y="2.75" width="16.5" height="18.5" rx="3.25" stroke="#8F8F8F" strokeWidth="1.5" />
  </IconBase>
);

export default Note;
