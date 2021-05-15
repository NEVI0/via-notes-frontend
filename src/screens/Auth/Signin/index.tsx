import React, { useState, useContext } from 'react';
import { FiMail, FiLock, FiUnlock } from 'react-icons/fi';
import { RouteComponentProps } from 'react-router-dom';

import Alert from '../../../components/Alert';
import Loading from '../../../components/Loading';

import UserContext, { UserContextType } from '../../../contexts/UserContext';

import icon from '../../../assets/icon.png';
import vialaser from '../../../assets/vialaser.png';

import './styles.css';

const Signin: React.FC<RouteComponentProps> = ({ history }) => {

	const {
		userContextError,
		signin,
		signup,
		createUserContextError,
		clearUserContextError
	} = useContext<UserContextType>(UserContext);

	const [ showLoading, setShowLoading ] = useState<boolean>(false);
	const [ showPassword, setShowPassword ] = useState<boolean>(false);
	
	const [ email, setEmail ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');

	const handleSignin = async () => {
		try {
			const resp = await signin(email, password);
			if (!resp) setShowLoading(false);
		} catch (err) {
			createUserContextError(err);
		}
	}

	return (
		<div className="Signin">
			<div className="box">
				<div className="col col-sm">
					<div className="header">
						<h2>Via Notes</h2>
						<img src={ icon } />
					</div>

					<div className="content">
						
						<div className="input-box">
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

						<div className="forgot-password">
							<p>Esqueceu a senha? <a href="#">Click Aqui!</a></p>
						</div>

					</div>

					<div className="footer">
						<button className="btn btn-secondary" onClick={ () => history.push('/signup') }>
							Criar Conta
						</button>

						<button className="btn btn-primary" onClick={ handleSignin }>
							Entrar
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

export default Signin;
