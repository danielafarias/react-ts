import { useUi } from './UiContext';
import { useUser } from './UserContext';

const Header = () => {
  const { setDark } = useUi();
  const { data, loading } = useUser();

  return (
    <div>
        <button onClick={() => setDark((d) => !d)}>Tema</button>
        {loading ? <p>Carregando...</p> 
            : (
                data && <p>Nome: {data.nome}</p>
            )
        }
    </div>
  );
};

export default Header;
