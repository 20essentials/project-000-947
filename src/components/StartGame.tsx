import { userQuestionStore } from '../hooks/useQuestionsStore';
import '#components/StartGame.css';

const NUMBER_OF_QUESTION = 12;

export const StartGame = () => {
  const fetchQuestion = userQuestionStore(state => state.fetchQuestion);
  const fillQuestions = () => {
    fetchQuestion(NUMBER_OF_QUESTION);
  };

  return (
    <button className='button' onClick={fillQuestions}>
      <div className='outline'></div>
      <div className='state state--default'>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            height='1.2em'
            width='1.2em'
          >
            <g style={{ filter: 'url(#shadow)' }}>
              <path
                fill='currentColor'
                d='M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z'
              />
              <path
                fill='currentColor'
                d='M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z'
              />
            </g>
            <defs>
              <filter id='shadow'>
                <feDropShadow
                  floodOpacity='0.6'
                  stdDeviation='0.8'
                  dy='1'
                  dx='0'
                />
              </filter>
            </defs>
          </svg>
        </div>
        <p>
          <span style={{ '--i': 0 } as React.CSSProperties}>S</span>
          <span style={{ '--i': 1 } as React.CSSProperties}>t</span>
          <span style={{ '--i': 2 } as React.CSSProperties}>a</span>
          <span style={{ '--i': 3 } as React.CSSProperties}>r</span>
          <span style={{ '--i': 4 } as React.CSSProperties}>t</span>
          <span style={{ '--i': 5 } as React.CSSProperties}> </span>
          <span style={{ '--i': 6 } as React.CSSProperties}>G</span>
          <span style={{ '--i': 7 } as React.CSSProperties}>a</span>
          <span style={{ '--i': 8 } as React.CSSProperties}>m</span>
          <span style={{ '--i': 9 } as React.CSSProperties}>e</span>
        </p>
      </div>
      <div className='state state--sent'>
        <div className='icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.2em'
            height='1.2em'
            fill='none'
            stroke='#000'
            strokeWidth={0.5}
            viewBox='0 0 24 24'
          >
            <g
              fill='currentColor'
              style={{
                filter: 'url(#shadow)'
              }}
            >
              <path d='M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z' />
              <path d='M10.58 15.58a.75.75 0 0 1-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 5.14-5.14c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.67 5.67a.75.75 0 0 1-.53.22Z' />
            </g>
          </svg>
        </div>
        <p>
          <span style={{ '--i': 5 } as React.CSSProperties}>B</span>
          <span style={{ '--i': 6 } as React.CSSProperties}>e</span>
          <span style={{ '--i': 7 } as React.CSSProperties}>g</span>
          <span style={{ '--i': 8 } as React.CSSProperties}>i</span>
          <span style={{ '--i': 9 } as React.CSSProperties}>n</span>
          <span style={{ '--i': 10 } as React.CSSProperties}>!</span>
        </p>
      </div>
    </button>
  );
};
