import React from 'react';
import classNames from 'classnames';

/**
 * Props for the Button component
 * Defines the properties needed for a like/dislike button with counter functionality
 */
interface ButtonProps {
  /** Function to handle click events */
  onClick?: () => void;
  /** Type of button, either 'like' or 'dislike' */
  btnType: 'like' | 'dislike';
  /** Number of likes or dislikes to display */
  num: number;
  /** Indicates if the button has been clicked/activated */
  isClicked: boolean;
}


const Btn = React.memo(({
  onClick = () => {},
  btnType = 'like',
  num = 0,
  isClicked = false
}: ButtonProps) => {
 
  const isLikeBtn = btnType === 'like';
  const buttonText = btnType === 'like' ? 'Like' : 'Dislike';
  
  return (
    <button
      className={classNames({
        [`${btnType}-button`]: true,
        liked: isLikeBtn && isClicked,
        disliked: !isLikeBtn && isClicked
      })}
      onClick={onClick}
    >
      {buttonText} | <span className={`${btnType}-counter`}>{num}</span>
    </button>
  );
});


export default Btn;