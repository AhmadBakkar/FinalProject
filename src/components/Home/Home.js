import React, {useEffect} from 'react';
import VisualData from '../Data Visualization/VisualData';
import Carou from './Carou';
import './Home.css'
import { useDispatch } from 'react-redux';

const Home = (props) => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({type:'RESET'})
        localStorage.clear();
    }, [])


    return (
        <div className="container">
            <main>
                <header className="title">
                    <h1 >Welcome to UsatoLebanon</h1>  
                    <p >From USA tech companies to lebanese consumers. Our business aim is to bring the best value for your money!</p>
                </header>
            </main>
            <div>
                <Carou />
            </div>
            

        </div>

    )
};
const mapStateToProps = (state) =>{
    return {
      cart:state.cart
  
    }
  }  



export default Home;