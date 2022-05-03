import { default as NextHead } from 'next/head';

type Props = {
  title?: string;
};

const Head: React.FC<Props> = ({ title }) => (
  <NextHead>
    <title>Moodboard | {title ? title : 'Shop local'}</title>
    <meta name="description" content="Generated by create next app" />
  </NextHead>
);
export default Head;
