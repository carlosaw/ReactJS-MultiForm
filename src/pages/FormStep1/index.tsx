import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if(state.name !== '' ) {     
      if(state.name.length > 3) {
        navigate('/step2');
      } else {
        alert("Nome deve ter mais de 3 caracteres!");
      }
    } else {
      alert("Preencha os dados!");
    }   
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    });
  }

  // Ao carregar a pg começa step1
  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr/>

        <label>
          Seu nome completo
          <input
            type='text'
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
    
  );
}