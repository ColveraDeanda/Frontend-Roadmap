import React, { useReducer, useEffect } from 'react';

interface AuthState {
  validando: boolean,
  token: null | string,
  username: string,
  nombre: string
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
}

/**
 * type e interface son muy parecidos y hacen prácticamente lo mismo.
 * la diferencia principal es en el caso de interface, ésta se puede exterder. Es decir, se puede hacer 
 * una interface con el mismo nombre, y se pueden agregar nuevas propiedades. Ésto no lo puede hacer type
 * Ej:
 * interface AuthState {
      otra: string;
}  }
 */
type LoginPayload = {
  username: string;
  nombre: string;
}

type AuthAction = { type: 'logout' } | { type: 'login', payload: LoginPayload }



/**
 * 
 * @param state = El estado actual.
 * @param action = La acción que tendrá el state.
 * @returns un nuevo estado actualizado.
 */
function reducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: ''
      }
    case 'login':
      // * action.payload será la data que el usuario ingresa y se actualiza el estado con esa información
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: 'ABC123',
        nombre,
        username
      }

    default:
      return state
  }
}

const Login = () => {

  /* useReducer es la alternativa a useState.
     useReducer is usually preferable to useState when you have complex state logic that involves multiple 
     sub-values.
  */
  const [{ validando, token }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 2000)
  }, [])

  const login = () => {
    dispatch({ type: 'login', payload: { nombre: 'Cristobal', username: 'colvera_deanda' } })
  }

  const logout = () => {
    dispatch({ type: 'logout' })
  }


  return (
    <div>
      <h3>Login</h3>
      {validando ? (<div className='alert alert-info'>Validando...</div>) :
        token ?
          <div>
            <div className='alert alert-success'>Autenticado</div>
            <button onClick={logout} className='btn btn-danger'>Logout</button>
          </div>
          :
          <div>
            <div className='alert alert-danger'>No Autentificado</div>
            <button onClick={login} className='btn btn-primary'>Login</button>
          </div>
      }
    </div>
  )
}

export default Login