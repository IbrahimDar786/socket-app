import React, { useState } from "react";
import { questions } from '../../data/staticQuestions'
import Button from "./Button/Button";

const TestKnowledge = ({ handleLeftMove, rightHandler }) => {

    const [next, setNext] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false);
    function handleLeftMove() {
        // next = next % data.length;
        setNext(next => (next - 1) % questions.length);
    }
    function handleRightMove() {
        // next = next % data.length;
        setNext(next => (next + 1) % questions.length);
    }
    const container_style =
    {
        border: "1px solid grey", padding: "10px",
        borderRadius: "8px", display: "inline-flex", gap: "30px",
        alignItems: "center", justifyContent: "space-around",
        width: "700px",
        // it doesn't work
        "@media(maxWidth:700)": {
            display: "flex",
            flexDirection: "column",
            gap: "30px",
        }
    }
    return (


        <div style={container_style}>
            {/* Left Arrow */}
            <Button onClick={handleLeftMove}>←</Button>

            {/* Question Container */}
            <div >
                <h1 style={{ margin: 0 }}>GAT Questions - CDS Level</h1>
                {/* Content */}
                <div >
                    <h2 >{questions.at(next).question}</h2>

                    {/* Options */}
                    <div >
                        <ol  >
                            {
                                questions.at(next).options.map((item, index) => (
                                    <li style={{
                                        fontSize: "1.5rem",
                                        marginBottom: "5px",
                                        // backgroundColor:"#95bec2"    
                                    }}
                                        key={index}>{item}</li>
                                ))
                            }
                        </ol>
                    </div>

                    {/* Answer */}
                    <Button onClick={() => setShowAnswer(!showAnswer)}>
                        Show Answer
                    </Button>

                    {showAnswer &&
                        <p style={{ color: "green", fontSize: "1.5rem" }}>{questions.at(next).answer}</p>
                    }
                </div>
            </div>

            {/* Image */}
            <div>
                <img style={{ height: "200px", width: "200px", borderRadius: "50%" }} src={questions.at(next).img} alt="Question topic" />
            </div>

            {/* Right Arrow */}
            <Button onClick={handleRightMove}>→</Button>
        </div >

    );
};

export default TestKnowledge;