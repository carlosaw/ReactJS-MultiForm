import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  const handleNextStep = () => {
    if(state.name !== '' ) {     
      if(state.name.length > 3) {
        navigate('/step3');
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
      payload: 2
    });
  }, []);

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr/>

        <SelectOption 
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos."
          icon="😏"
          selected={state.level === 0}
        />
        <SelectOption 
          title="Sou programador"
          description="Já programo há mais de 4 anos."
          icon="😎"
          selected={state.level === 1}
        />
       
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
    
  );
}