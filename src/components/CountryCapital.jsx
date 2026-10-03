
import React, { useState } from 'react'

const CountryCapital = ({ onContentChange }) => {
    const [next, setNext] = useState(0)
    const [details, setDetails] = useState(false);


    const countries = [
        {
            name: "India",
            capital: "New Delhi",
            img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
            funFacts: [
                "India is the world's most populous country.",
                "Chess is believed to have originated in India.",
                "India has 22 officially recognized languages."
            ]
        },
        {
            name: "Japan",
            capital: "Tokyo",
            img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
            funFacts: [
                "Japan has thousands of islands.",
                "Tokyo is the capital of Japan.",
                "Mount Fuji is Japan's highest mountain."
            ]
        },
        {
            name: "France",
            capital: "Paris",
            img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            funFacts: [
                "Paris is the capital of France.",
                "France is famous for its cuisine.",
                "The Eiffel Tower is in Paris."
            ]
        },
        {
            name: "Australia",
            capital: "Canberra",
            img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
            funFacts: [
                "Australia is both a country and a continent.",
                "Canberra is its capital.",
                "Australia is home to kangaroos and koalas."
            ]
        }
    ];

    function onRightMove() {
        // next = next % data.length;
        setNext(next => (next + 1) % countries.length);
    }
    function onLeftMove() {
        // next = next % data.length;
        setNext(next => (next - 1) % countries.length);
    }


    //  console.log(countries.at(-2))


    const handleDetails = () => {
        setDetails((details) => !details);
    }

    const btn_style = {
        padding: "2px 15px",
        border: "1px solid grey",
        fontSize: "30px",
        borderRadius: "8px",
        backgroundColor: "#6fcac4"
    }

    const container_style =
    {
        border: "1px solid grey", padding: "30px",
        borderRadius: "8px", display: "inline-flex", gap: "30px",
        alignItems: "center", justifyContent: "space-around",
        // it doesn't work
        "@media(maxWidth:700)": {
            display: "flex",
            flexDirection: "column",
            gap: "30px",
        }
    }


    return (

        <div style={container_style}>

            {/* leftmost item */}
            <div>
                <button style={btn_style} onClick={onLeftMove}>👈</button> <br /><br />

            </div>


            {/* second item */}
            <div>
                <h1>Capital of {countries.at(next).name} is <span style={{ color: "#ca18d0" }}>{countries.at(next).capital}</span></h1> <br />
                <p>({`${next}`} of {countries.length})</p>

                {/* <button onClick={showDetails}>Details</button>   */}
                <button onClick={handleDetails}>Show Details</button>

                <ol style={{ display: `${details ? "block" : "none"}` }} >
                    {
                        countries.at(next).funFacts.map((item, index) => (
                            <li style={{
                                fontSize: "2rem",
                            }}
                                key={index}>{item}</li>
                        ))
                    }
                </ol>

            </div>

            {/* right side */}

            <div>
                <img style={{ height: "200px", width: "200px", borderRadius: "50%" }} src={countries.at(next).img} alt="country image" />
            </div>

            {/* rightmost item */}
            <div>
                <button style={btn_style} onClick={onRightMove}>👉</button> <br /><br />

            </div>

        </div >


    )
}


export default CountryCapital;