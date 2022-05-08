import React, { useContext } from 'react';
import Cardaside from '../../components/CardAside';
import Cardproject from '../../components/CardProject';
import MyContext from '../../context/MyContext';
import "./home-style.css";

const Home = () => {
    const context = useContext(MyContext);
    const { arrayCard } = context;
    
    // useEffect(() => {
    //    console.log(arrayCard)
    // }, [arrayCard]);

    return (
        <>
            <main>
                <aside className="aside">
                    <Cardaside />
                </aside>
                <section className="content">
                    <header>
                        <p>Projetos ativos</p>
                    </header>
                    {arrayCard.length > 0 ? arrayCard.map((card, index) => {
                        const { title, description, time } = card;
                        const trace = /-/g;
                        const timeStrReplace = time.replace(trace, '/');
                        return(
                            <Cardproject 
                                key={ index }
                                projectName={ title }
                                description={ description }
                                days={ timeStrReplace }
                                progress='23%'
                            />
                        )
                    }) : ''}
                    {/* <h1>Ola mundo</h1>
                    <h1>bye bye mundo</h1> */}
                </section>
            </main>
        </>
    );
}

export default Home;
