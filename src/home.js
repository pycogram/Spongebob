const Home = ( props ) => {
    const justImg = props.ObjImg;
    
    return(
        <div className="homePage">
            <div className="homeTextPic">
                <div className="homeText">
                    <h1>Sponge</h1>
                    <h1>Bob</h1>
                    <h4>
                        Why did SpongeBob invest in Bitcoin? 
                        Because he wanted his money to go "under the sea" of volatility! Haha.    
                    </h4>
                    <p>
                        CA:
                        DwX46Leu1RgP5bCG1FSa9BY7cvqmwmaFerKNy4zoUMvG
                    </p>
                    <div className="allSC-Btn">
                        <button>Buy $SPONGE</button>
                        <div className="allSocHandle">
                            <span><img src={justImg.tw} alt="twitter logo" /></span>
                            <span><img src={justImg.tg} alt="telegram logo" /></span>
                            <span><img src={justImg.dc} alt="discord logo" /></span>
                            <span><img src={justImg.rd} alt="reddit logo" /></span>
                        </div>
                    </div>
                </div>
                <div className="homePic">
                    <img src={justImg.pepeR1} alt="pepe on the rock" />
                </div>
            </div>
        </div>
    )
}

export default Home;