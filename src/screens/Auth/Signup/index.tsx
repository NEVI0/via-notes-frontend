import React, { useState, useContext } from 'react';
import { FiMail, FiLock, FiUnlock, FiUser } from 'react-icons/fi';
import { RouteComponentProps } from 'react-router-dom';

import Alert from '../../../components/Alert';
import Loading from '../../../components/Loading';

import UserContext, { UserContextType } from '../../../contexts/UserContext';

import vialaser from '../../../assets/vialaser.png';
import './styles.css';

const Signup: React.FC<RouteComponentProps> = ({ history }) => {

	const {
		userContextError,
		signin,
		signup,
		createUserContextError,
		clearUserContextError
	} = useContext<UserContextType>(UserContext);

	const [ showLoading, setShowLoading ] = useState<boolean>(false);
	const [ showPassword, setShowPassword ] = useState<boolean>(false);
	
	const [ name, setName ] = useState<string>('');
	const [ email, setEmail ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');
	const [ confPassword, setConfPassword ] = useState<string>('');

	const handleSignup = async () => {
		try {
			const resp = await signup(name, email, password, confPassword);
			if (!resp) setShowLoading(false);
		} catch (err) {
			createUserContextError(err);
		}
	}

	return (
		<div className="Signup">
			<div className="box">
				<div className="col col-sm">
					<div className="header">
						<h2>VN - Cadastro</h2>
					</div>

					<div className="content">
						
						<div className="input-box">
							<FiUser size={ 24 } className="icon" />
							<input type="text" name="name" placeholder="Seu nome" value={ name } onChange={ ev => setName(ev.target.value) } />
						</div>
						<div className="input-box margin">
							<FiMail size={ 24 } className="icon" />
							<input type="email" name="email" placeholder="E-mail" value={ email } onChange={ ev => setEmail(ev.target.value) } />
						</div>
						<div className="input-box margin">
							{
								showPassword ? (
									<FiUnlock size={ 24 } className="icon" onClick={ () => setShowPassword(false) } />
								) : (
									<FiLock size={ 24 } className="icon" onClick={ () => setShowPassword(true) } />
								)
							}
							<input type={ showPassword ? 'text' : 'password' } name="password" placeholder="Senha" value={ password } onChange={ ev => setPassword(ev.target.value) } />
						</div>
						<div className="input-box margin">
							<FiLock size={ 24 } className="icon" onClick={ () => setShowPassword(true) } />
							<input type={ showPassword ? 'text' : 'password' } name="conf_password" placeholder="Confirme a senha" value={ confPassword } onChange={ ev => setConfPassword(ev.target.value) } />
						</div>

					</div>

					<div className="footer">
						<button className="btn btn-secondary" onClick={ () => history.goBack() }>
							Entrar
						</button>

						<button className="btn btn-primary" onClick={ handleSignup }>
							Criar Conta
						</button>
					</div>
				</div>
			
				<div className="col col-md wallpaper">
					<img src={ vialaser } />
				</div>
			</div>

			{ showLoading && <Loading message="Autenticando os dados..." /> }
			{ userContextError != '' && <Alert message={ userContextError } onClose={ clearUserContextError } /> }
		</div>
	);

}

export default Signup;
