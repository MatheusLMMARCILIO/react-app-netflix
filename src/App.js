import React from 'react';
import './App.css';



const Login = () => {

const Name = 'Matheus'


const InputName = document.querySelector('.InputName')
const Password = document.querySelector('.InputPassword')

function NextPage() {
    if (InputName.value == Name && Password.value == '123' ) {
window.location.href = './PAGES/WhoWatching/index.js'
    }
}





    return (
        <section className='AllPage'>
            <section className='Logo' >
                <img src='./IMAGE/NetflixLogo.webp' alt='Logo' />
            </section>
            <section className='Login' >
                <section className='LoginInputs' >

                    <div className='Enter' >
                        <span id='EnterPageNetflix' >Entrar</span>
                    </div>

                    <div className='InputLogin' >

                        <input type='text' className='InputName' placeholder='Email ou número de celular' />
                        <input type='password' className='InputPassword' placeholder='Senha' />

                        <button onClick={NextPage} >Entrar</button>

                    </div>

                    <div className='Or' >
                        <span>OU</span>
                    </div>


                    <div className='UseCodig' >
                        <button  ><span>Usar um código de acesso</span></button>
                    </div>

                    <div className='ForgetPassword' >
                        <span> esqueceu a senha? </span>
                    </div>

                </section>
            </section>
        </section>
    )
}

export default Login
