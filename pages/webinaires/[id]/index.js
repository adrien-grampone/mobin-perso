import OneFormation from '../../../components/formation/One';
import { getTraining } from '../../../utils';

const Formation = ({ training = {} }) => <OneFormation training={training} />;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(getTraining(id));
  if (res.status !== 200) {
    return {
      redirect: {
        destination: '/formations',
        permanent: false,
      },
    };
  }
  const training = await res.json();
  return {
    props: { training },
  };
};

export default Formation;
