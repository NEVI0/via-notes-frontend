import React, { useState, useContext, useEffect } from 'react';
import { FiMail, FiLock, FiUnlock, FiUser } from 'react-icons/fi';

import './styles.css';

const Auth: React.FC = () => {

	const [ showPassword, setShowPassword ] = useState<boolean>(false);

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

	return (
		<div className="Auth">

			<div className="box">
				<div className="col signin active" id="signin">
					<div className="header">
						<h2>Via Notes</h2>
					</div>

					<div className="content">
						
						<div className="input-box-2">
							<FiMail size={ 24 } className="icon" />
							<input type="text" placeholder="E-mail" />
						</div>
						<div className="input-box-2">
							{
								showPassword ? (
									<FiUnlock size={ 24 } className="icon" onClick={ () => setShowPassword(false) } />
								) : (
									<FiLock size={ 24 } className="icon" onClick={ () => setShowPassword(true) } />
								)
							}
							<input type={ showPassword ? 'text' : 'password' } placeholder="Senha" />
						</div>

					</div>

					<div className="footer">
						<button className="btn btn-secondary" onClick={ handleChangeSection }>
							Criar Conta
						</button>

						<button className="btn btn-primary">
							Entrar
						</button>
					</div>
				</div>

				<div className="col wallpaper"></div>

				<div className="col signup" id="signup">
					<div className="header">
						<h2>Via Notes</h2>
					</div>

					<div className="content">
						<div className="input-box-2">
							<FiUser size={ 24 } className="icon" />
							<input type="text" placeholder="Seu Nome" />
						</div>
						<div className="input-box-2">
							<FiMail size={ 24 } className="icon" />
							<input type="text" placeholder="E-mail" />
						</div>
						<div className="input-box-2">
							{
								showPassword ? (
									<FiUnlock size={ 24 } className="icon" onClick={ () => setShowPassword(false) } />
								) : (
									<FiLock size={ 24 } className="icon" onClick={ () => setShowPassword(true) } />
								)
							}
							<input type={ showPassword ? 'text' : 'password' } placeholder="Senha" />
						</div>
						<div className="input-box-2">
							<FiLock size={ 24 } className="icon" />
							<input type={ showPassword ? 'text' : 'password' } placeholder="Confirme a Senha" />
						</div>
					</div>

					<div className="footer">
						<button className="btn btn-secondary" onClick={ handleChangeSection }>
							Fazer Login
						</button>

						<button className="btn btn-primary">
							Criar Conta
						</button>
					</div>
				</div>
			</div>

		</div>
	);

}

export default Auth;
