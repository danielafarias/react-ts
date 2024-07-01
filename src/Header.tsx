import { useUi } from './UiContext';
import { useUser } from './UserContext';

const Header = () => {
  const { setDark } = useUi();
  const { data } = useUser();

  return (
    <div>
        <button onClick={() => setDark((d) => !d)}>Tema</button>
        <p>Nome: {data?.nome}</p>
    </div>
  );
};

export default Header;
