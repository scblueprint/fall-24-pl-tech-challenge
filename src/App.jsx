import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { totalCards } from './js/cardGenerator';

import './App.css';

function App() {
  const [card, setCard] = useState(null);
  const [cardGuess, setCardGuess] = useState("");
  /**
   * Boolean to check if the card has been guessed
   */
  const [guessed, setGuessed] = useState(false);
  /**
   * Track the current and longest streak
   */
  const [currentStreak, setCStreak] = useState(0);
  const [longestStreak, setLStreak] = useState(0);
  
  /**
   * Add implmentation a random card to display when the page loads below this comment
   *
   */
  
  /*---------------------------------------------------------------------------------*/
  
  const [isFront, setIsFront] = useState(true);
  const handleNext = () => {
    setIsFront(true);
    setGuessed(false);
    /**
     * Find the function to display the next card
     * Hint: It has been implemented for you in another file
     */
    setCard({});
  };

  const handlePrev = () => {
    setIsFront(true);
    setGuessed(false);
    /**
     * Find the function to display the next card
     * Hint: It has been implemented for you in another file
     */
    setCard({});
  };

  /**
   * Change what side of the card is displayed
   */
  const handleCardClick = () => {
      setIsFront(!isFront);
  }

  /**
   * What happens when the user guesses an answer to the card
   * @param {*} event
   */
  const handleSubmit = (event) => {
    /**
     * Please implement this function so that the user can guess the answer to the card
     * Note the following:
     * 1. If the user has already guessed the card, they should not be able to guess again
     * 2. If the user guesses the answer correctly, the current streak should be incremented
     * 3. If the user guesses the answer incorrectly, the current streak should be reset
     */
  }

  /**
   * Please add implementation for updating the longest steak when the current streak is greater
   */

  /*---------------------------------------------------------------------------------*/


  return (
    <>
      <div className="header">
        <h1 className='title'>Are you smarter than an elementary schooler?</h1>
        <div className="stats">
          <h2 className='subtitle'>Total cards: {totalCards()}</h2>
          <div className="row even">
            <h2 className="subtitle">Current Streak: {currentStreak}</h2>
            <h2 className="subtitle">Longest Streak: {longestStreak}</h2>
          </div>
        </div>
      </div>

      <div className="main-body row" >
        <button className="prev control-btn" onClick={handlePrev}>
          <FaChevronLeft className='icon' />
        </button>

        <div className="card-container">
          {/* 
           * There should be a card displayed here.
           * A basic card has been implemented for you in another file please use it appropriately here
          */}

          <form className="card-guess" onSubmit={(e) => handleSubmit(e)}>
            <input 
              type="text"
              id = "guess-input"
              className = "guess"
              value={cardGuess}
              onChange={(e) => setCardGuess(e.target.value)} />
            <input 
              type="submit" 
              value="Check Ans"
              className = "guess"
              id='guess-submit' />
          </form>
        </div>


        <button className="next control-btn" onClick={handleNext}>
          <FaChevronRight className='icon' />
        </button>
      </div>
    </>
  )
}

export default App;
