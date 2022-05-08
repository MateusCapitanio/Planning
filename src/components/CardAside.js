import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

import '../styles/card-aside.css';
import Button from './Button';

const Cardaside = () => {

    const contextApi = useContext(MyContext);
    const {
        title,
        setTitle,
        description,
        setDescription,
        time,
        setTime,
        arrayCard,
        setArrayCard
     } = contextApi;

    const onChangeValue = ({ target }) => {
        if (target.className === 'input-title') {
            setTitle(target.value);
        } else if (target.className === 'text-description') {
            setDescription(target.value);
        } else {
            setTime(target.value);
        }
    }

    const onSubmitClick = (event) => {
        const inputsArr = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');
        event.preventDefault();
        inputsArr.forEach((e) => e.value = '')
        textarea.value = ''
        console.log('click submit')
    }

    const onClickButton = () => {
        const arrayInputs = document.querySelectorAll('input');
        const textarea = document.querySelector('textarea');
        const newObj = {
            title,
            description,
            time
        }

            if (arrayInputs[0].value !== '' && arrayInputs[1].value !== '' && textarea.value !== '') {
                setArrayCard([...arrayCard, newObj])
            }

            // if (input.value === '' && textarea.value === '') {
            //     console.log('inputs e textarea estão vazios')
            // }
        
    }

    return (
        <div>
            <header className="header">To-do list progress</header>
            <form onSubmit={onSubmitClick}>
                <label htmlFor='input-title' className="title-sec">
                    <h3>Título</h3>
                    <input
                        onChange={onChangeValue}
                        required
                        type="text"
                        placeholder='Seu título aqui...'
                        className="input-title"
                        maxLength={50}
                    />
                </label>
                <label htmlFor='text-description' className="description-sec">
                    <h3>Descrição</h3>
                    <textarea
                        onChange={onChangeValue}
                        placeholder='Descrição breve do projeto...'
                        className="text-description"
                        maxLength={100}
                    />
                </label>
                <label htmlFor='text-description' className="time-sec">
                    <h3>Prazo</h3>
                    <input
                        onChange={onChangeValue}
                        required
                        type="date"
                        placeholder='00/00/0000'
                        className="time"
                    />
                </label>
                <section>
                    <Button
                        type="submit"
                        label="Adicionar"
                        className="btn-submit"
                        onClick={onClickButton}
                    />
                </section>
                
            </form>
        </div>
    );
}

export default Cardaside;
