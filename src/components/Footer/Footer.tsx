import {FC} from 'react';

type OwnProps = {
  version?: number;
  caption?: string;
}

const x = {
  a: 1,
  b: 2
}
const Footer: FC<OwnProps> = (props) => {
  return (
    <footer>
      <p>{props.caption}</p>
      <p>version is: {props.version}</p>
    </footer>
  )
}

export default Footer;
