import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email.includes('@')) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        setIsLoading(true);

        try {
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log('User created:', user);
            console.log('Data being saved:', { name, email, phone });

            // Salvar dados adicionais no Firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                name,
                email,
                phone,
                createdAt: new Date().toISOString(),
            });

            alert('Usuário cadastrado com sucesso!');
            navigate('/login');
        } catch (error) {
            const errorMessages = {
                'auth/email-already-in-use': 'O e-mail já está em uso.',
                'auth/invalid-email': 'E-mail inválido.',
                'auth/weak-password': 'A senha é muito fraca.',
            };
            alert(errorMessages[error.code] || 'Erro ao registrar. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="main-register">
            <form className="container-register" onSubmit={handleRegister}>
                <h2>Cadastro</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome completo"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Telefone"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
};

export default Register;
