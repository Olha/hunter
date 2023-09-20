import { Directory } from '../../components/directory/directory.component';
import categories from '../../categories.json';

const Home = () => (<Directory categories={categories} />);

export default Home;