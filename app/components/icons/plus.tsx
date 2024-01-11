import IconBase from "./icon-base";
import { FC } from "react";

const Plus: FC = (props) => (
    <IconBase width={24} height={24} viewBox={'0 0 24 24'} {...props}>
        <rect x="11" y="5" width="2" height="14" rx="1" fill="white"/>
        <rect x="5" y="13" width="2" height="14" rx="1" transform="rotate(-90 5 13)" fill="white"/>
    </IconBase>
);

export default Plus;
