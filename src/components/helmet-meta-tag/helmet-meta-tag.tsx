import { Helmet } from 'react-helmet-async';

type PropsWithChildren = { children?: React.ReactNode | undefined };

function HelmetMetaTag(props: PropsWithChildren): JSX.Element {
  return (
   <Helmet>
    {props.children}
   </Helmet>
  );
}

export default HelmetMetaTag;
