import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';

import animationData from '../../assets/animations/animation.json';

import '../../styles/style-btn.css';
import Button from '../../components/Button';

const Login = () => {
    // const [isLiked, setIsLiked] = useState(false);
    // const [animationState, setAnimationState] = useState({
    //     isStopped: true,
    //     isPaused: false,
    //     direction: 1,
    // });

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    

    return (
        <div>
            <main>
                <section className="initial-section">
                    <div className="animation">
                        <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                            // isStopped={animationState.isStopped}
                            // isPaused={animationState.isPaused}
                        />
                    </div>
                    <Link to="/home">
                        <Button
                            label="Continuar"
                            className="btn-next"
                        />
                    </Link>
                </section>
            </main>
        </div>
    );
}

export default Login;
