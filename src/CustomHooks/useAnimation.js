import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

const useAnimation = () => {
    
    // AOS animation initialization
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1300,
            easing: 'ease',
        });
    });

};

export default useAnimation;