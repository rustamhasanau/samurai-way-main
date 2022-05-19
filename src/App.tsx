import React from 'react';
import './App.css';
/*import Header from "./Header";
import Technologies from "./Technologies";
import Footer from "./Footer";*/

const App = () => {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
                    alt=""/>
            </header>
            <nav className='nav'>
                <div><a href="">Profile</a></div>
                <div><a href="">Message</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Setting</a></div>

            </nav>
            <div className='content'>
                <div>
                    <img src="https://az617363.vo.msecnd.net/imgmodels/albums/academic_centerc38ff2917d951ff9d2733e472d3e80a9_thumb.jpg" alt=""/>
                </div>
                <div>ava+discription</div>
                <div>
                    <div>
                        My post
                        <div>New post</div>
                        <div>New post</div>

                    </div>

                </div>

            </div>


        </div>
    );
}

export default App;
