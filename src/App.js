import React from 'react';
import './App.css';



const Login = () => {

    return (
        <section className='AllPage'>
            <section className='Logo' >
                <img src='./IMAGE/NetflixLogo.webp' alt='Logo' />
            </section>

            <section className='LoginInputs' >

                <div className='Enter' >
                    <span id='EnterPageNetflix' >Entrar</span>
                </div>

                <div className='InputLogin' >

                    <input type='text' placeholder='  Email ou número de celular' />
                    <input type='password' placeholder='Senha' />

                    <button>Entrar</button>

                </div>

                <div className='Or' ><span>OU</span></div>

                <div className='UseCodig' >
                    <button><span>Usar um código de acesso</span></button>
                </div>

                <div className='ForgetPassword' >
                    <span> esqueceu a senha? </span>
                </div>

                <div className='rememberMe' >
                    <input type='checkbox' />
                    <span>Lembre-se de mim</span>
                </div>



            </section>

        </section>
    )
}

export default Login
