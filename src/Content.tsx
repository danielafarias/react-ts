import { useUi } from './UiContext';
import { useUser } from './UserContext';

const Content = () => {
  const { dark } = useUi();
  const { data } = useUser();

  return (
    <div
      style={{
        height: '400px',
        color: dark ? '#fff' : '#222',
        backgroundColor: dark ? '#222' : '#fff',
      }}
    >
      Esse é um teste do tema.
      {data &&
        <div>
            <p>Preferências</p>
            <ul>
                <li>
                    Playback: {data.preferencias.playback}
                </li>
                <li>
                    Qualidade: {data.preferencias.qualidade}
                </li>
                <li>
                    Volume: {data.preferencias.volume}
                </li>
            </ul>
        </div>
      }
    </div>
  );
};

export default Content;
