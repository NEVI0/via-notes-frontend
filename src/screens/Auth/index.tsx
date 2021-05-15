import React, { useState, useContext } from 'react';
import { FiMail, FiLock, FiUnlock, FiUser } from 'react-icons/fi';

import Alert from '../../components/Alert';
import Loading from '../../components/Loading';

import UserContext, { UserContextType } from '../../contexts/UserContext';
import './styles.css';

const Auth: React.FC = () => {

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

	const handleChangeSection = () => {
		const signinEl = document.getElementById('signin');
		const signupEl = document.getElementById('signup');

		if (signupEl?.classList.contains('active')) {
			signupEl?.classList.remove('active');
			signinEl?.classList.add('active');
		} else {
			signupEl?.classList.add('active');
			signinEl?.classList.remove('active');
		}
	}

	const handleAuthentication = async (isSignin: boolean) => {
		try {
			
			let resp = null;

			if (isSignin) {
				resp = await signin(email, password);
			} else {
				resp = await signup(name, email, password, confPassword);
			}
			
			if (!resp) setShowLoading(false);

		} catch (err) {
			createUserContextError(err);
		}
	}

	return (
		<div className="Auth">

			<div className="box">
				<div className="col active" id="signin">
					<div className="header">
						<h2>Via Notes</h2>
					</div>

					<div className="content">
						
						<div className="input-box">
							<FiMail size={ 24 } className="icon" />
							<input type="email" name="email" placeholder="E-mail" value={ email } onChange={ ev => setEmail(ev.target.value) } />
						</div>
						<div className="input-box">
							{
								showPassword ? (
									<FiUnlock size={ 24 } className="icon" onClick={ () => setShowPassword(false) } />
								) : (
									<FiLock size={ 24 } className="icon" onClick={ () => setShowPassword(true) } />
								)
							}
							<input type={ showPassword ? 'text' : 'password' } name="password" placeholder="Senha" value={ password } onChange={ ev => setPassword(ev.target.value) } />
						</div>

					</div>

					<div className="footer">
						<button className="btn btn-secondary" onClick={ handleChangeSection }>
							Criar Conta
						</button>

						<button className="btn btn-primary" onClick={ () => handleAuthentication(true) }>
							Entrar
						</button>
					</div>
				</div>

				<div className="col desactive" id="signup">
					<div className="header">
						<h2>Via Notes</h2>
					</div>

					<div className="content">
						
						<div className="input-box">
							<FiUser size={ 24 } className="icon" />
							<input type="text" name="name" placeholder="Seu nome" value={ name } onChange={ ev => setName(ev.target.value) } />
						</div>
						<div className="input-box">
							<FiMail size={ 24 } className="icon" />
							<input type="email" name="email" placeholder="E-mail" value={ email } onChange={ ev => setEmail(ev.target.value) } />
						</div>
						<div className="input-box">
							{
								showPassword ? (
									<FiUnlock size={ 24 } className="icon" onClick={ () => setShowPassword(false) } />
								) : (
									<FiLock size={ 24 } className="icon" onClick={ () => setShowPassword(true) } />
								)
							}
							<input type={ showPassword ? 'text' : 'password' } name="password" placeholder="Senha" value={ password } onChange={ ev => setPassword(ev.target.value) } />
						</div>
						<div className="input-box">
							<FiLock size={ 24 } className="icon" onClick={ () => setShowPassword(true) } />
							<input type={ showPassword ? 'text' : 'password' } name="conf_password" placeholder="Confirme a senha" value={ confPassword } onChange={ ev => setConfPassword(ev.target.value) } />
						</div>

					</div>

					<div className="footer">
						<button className="btn btn-secondary" onClick={ handleChangeSection }>
							Entrar
						</button>

						<button className="btn btn-primary" onClick={ () => handleAuthentication(false) }>
							Criar Conta
						</button>
					</div>
				</div>
			</div>

			{ showLoading && <Loading message="Autenticando os dados..." /> }
			{ userContextError != '' && <Alert message={ userContextError } onClose={ clearUserContextError } /> }

		</div>
	);

}

export default Auth;
