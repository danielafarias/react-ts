import React from 'react';
import Input from './Input';

type State = {
  name: string;
  email: string;
};

type Action =
  | { type: 'setName'; payload: string }
  | { type: 'setEmail'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setEmail':
      return { ...state, email: action.payload };
    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = React.useReducer(reducer, { name: '', email: '' });

  return (
    <form>
      <Input
        id="name"
        label={`Nome: ${state.name}`}
        value={state.name}
        onChange={({ target }) =>
          dispatch({ type: 'setName', payload: target.value })
        }
      />
      <Input
        id="email"
        label={`Email: ${state.email}`}
        value={state.email}
        onChange={({ target }) =>
          dispatch({ type: 'setEmail', payload: target.value })
        }
      />
    </form>
  );
}

export default Form;
