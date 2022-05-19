import { getTrainings } from '../../utils';
import AllFormations from '../../components/formation/All';

const Formations = ({ trainings = [] }) => <AllFormations trainings={trainings} title="Webinaires" />;

export default Formations;

export const getServerSideProps = async () => {
  const res = await fetch(getTrainings);
  const trainings = await res.json();
  return {
    props: {
      trainings: trainings
        .filter((training) => training.formation_categorie.type === 'Webinaire')
        .sort((a, b) => a.id - b.id),
    },
  };
};
