'use client';

import { useState, useEffect } from 'react';

interface KeyProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isPressed?: boolean;
  width?: string;
}

const Key = ({ children, className = '', onClick, isPressed = false, width = 'w-12' }: KeyProps) => {
  // Centralized styling for all key states
  const baseStyles = `
    ${width} h-12 rounded-lg border border-gray-600 bg-gray-800 text-white
    flex items-center justify-center text-sm font-medium
    transition-all duration-150 ease-in-out
  `;
  
  const hoverStyles = `
    hover:bg-gray-700 hover:border-gray-500
  `;
  
  const pressedStyles = `
    focus:outline-none
  `;
  
  const isPressedStyles = isPressed 
    ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-500/50' 
    : '';
  
  const combinedStyles = `
    ${baseStyles}
    ${hoverStyles}
    ${pressedStyles}
    ${isPressedStyles}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <button
      onClick={onClick}
      className={combinedStyles}
    >
      {children}
    </button>
  );
};

const Keyboard = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [lastPressedKey, setLastPressedKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      setPressedKeys(prev => new Set([...prev, key]));
      setLastPressedKey(key);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleKeyClick = (key: string) => {
    setPressedKeys(prev => new Set([...prev, key]));
    setLastPressedKey(key);
    
    // Simulate key press
    setTimeout(() => {
      setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    }, 150);
  };

  const isKeyPressed = (key: string) => pressedKeys.has(key.toLowerCase());

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-gray-900 rounded-2xl shadow-2xl">
      {/* Function Row */}
      <div className="flex gap-2">
        <Key 
          onClick={() => handleKeyClick('escape')} 
          isPressed={isKeyPressed('escape')}
          width="w-16"
        >
          esc
        </Key>
        <Key onClick={() => handleKeyClick('f1')} isPressed={isKeyPressed('f1')}>F1</Key>
        <Key onClick={() => handleKeyClick('f2')} isPressed={isKeyPressed('f2')}>F2</Key>
        <Key onClick={() => handleKeyClick('f3')} isPressed={isKeyPressed('f3')}>F3</Key>
        <Key onClick={() => handleKeyClick('f4')} isPressed={isKeyPressed('f4')}>F4</Key>
        <Key onClick={() => handleKeyClick('f5')} isPressed={isKeyPressed('f5')}>F5</Key>
        <Key onClick={() => handleKeyClick('f6')} isPressed={isKeyPressed('f6')}>F6</Key>
        <Key onClick={() => handleKeyClick('f7')} isPressed={isKeyPressed('f7')}>F7</Key>
        <Key onClick={() => handleKeyClick('f8')} isPressed={isKeyPressed('f8')}>F8</Key>
        <Key onClick={() => handleKeyClick('f9')} isPressed={isKeyPressed('f9')}>F9</Key>
        <Key onClick={() => handleKeyClick('f10')} isPressed={isKeyPressed('f10')}>F10</Key>
        <Key onClick={() => handleKeyClick('f11')} isPressed={isKeyPressed('f11')}>F11</Key>
        <Key onClick={() => handleKeyClick('f12')} isPressed={isKeyPressed('f12')}>F12</Key>
      </div>

      {/* Number Row */}
      <div className="flex gap-2">
        <Key onClick={() => handleKeyClick('`')} isPressed={isKeyPressed('`')}>`~</Key>
        <Key onClick={() => handleKeyClick('1')} isPressed={isKeyPressed('1')}>1!</Key>
        <Key onClick={() => handleKeyClick('2')} isPressed={isKeyPressed('2')}>2@</Key>
        <Key onClick={() => handleKeyClick('3')} isPressed={isKeyPressed('3')}>3#</Key>
        <Key onClick={() => handleKeyClick('4')} isPressed={isKeyPressed('4')}>4$</Key>
        <Key onClick={() => handleKeyClick('5')} isPressed={isKeyPressed('5')}>5%</Key>
        <Key onClick={() => handleKeyClick('6')} isPressed={isKeyPressed('6')}>6^</Key>
        <Key onClick={() => handleKeyClick('7')} isPressed={isKeyPressed('7')}>7&</Key>
        <Key onClick={() => handleKeyClick('8')} isPressed={isKeyPressed('8')}>8*</Key>
        <Key onClick={() => handleKeyClick('9')} isPressed={isKeyPressed('9')}>9(</Key>
        <Key onClick={() => handleKeyClick('0')} isPressed={isKeyPressed('0')}>0)</Key>
        <Key onClick={() => handleKeyClick('-')} isPressed={isKeyPressed('-')}>-_</Key>
        <Key onClick={() => handleKeyClick('=')} isPressed={isKeyPressed('=')}>+=</Key>
        <Key 
          onClick={() => handleKeyClick('backspace')} 
          isPressed={isKeyPressed('backspace')}
          width="w-20"
        >
          delete
        </Key>
      </div>

      {/* QWERTY Row 1 */}
      <div className="flex gap-2">
        <Key 
          onClick={() => handleKeyClick('tab')} 
          isPressed={isKeyPressed('tab')}
          width="w-16"
        >
          tab
        </Key>
        <Key onClick={() => handleKeyClick('q')} isPressed={isKeyPressed('q')}>Q</Key>
        <Key onClick={() => handleKeyClick('w')} isPressed={isKeyPressed('w')}>W</Key>
        <Key onClick={() => handleKeyClick('e')} isPressed={isKeyPressed('e')}>E</Key>
        <Key onClick={() => handleKeyClick('r')} isPressed={isKeyPressed('r')}>R</Key>
        <Key onClick={() => handleKeyClick('t')} isPressed={isKeyPressed('t')}>T</Key>
        <Key onClick={() => handleKeyClick('y')} isPressed={isKeyPressed('y')}>Y</Key>
        <Key onClick={() => handleKeyClick('u')} isPressed={isKeyPressed('u')}>U</Key>
        <Key onClick={() => handleKeyClick('i')} isPressed={isKeyPressed('i')}>I</Key>
        <Key onClick={() => handleKeyClick('o')} isPressed={isKeyPressed('o')}>O</Key>
        <Key onClick={() => handleKeyClick('p')} isPressed={isKeyPressed('p')}>P</Key>
        <Key onClick={() => handleKeyClick('[')} isPressed={isKeyPressed('[')}>{'[{'}</Key>
        <Key onClick={() => handleKeyClick(']')} isPressed={isKeyPressed(']')}>{']}'}</Key>
        <Key 
          onClick={() => handleKeyClick('\\')} 
          isPressed={isKeyPressed('\\')}
          width="w-16"
        >
          {'\\|'}
        </Key>
      </div>

      {/* QWERTY Row 2 */}
      <div className="flex gap-2">
        <Key 
          onClick={() => handleKeyClick('capslock')} 
          isPressed={isKeyPressed('capslock')}
          width="w-20"
        >
          caps lock
        </Key>
        <Key onClick={() => handleKeyClick('a')} isPressed={isKeyPressed('a')}>A</Key>
        <Key onClick={() => handleKeyClick('s')} isPressed={isKeyPressed('s')}>S</Key>
        <Key onClick={() => handleKeyClick('d')} isPressed={isKeyPressed('d')}>D</Key>
        <Key onClick={() => handleKeyClick('f')} isPressed={isKeyPressed('f')}>F</Key>
        <Key onClick={() => handleKeyClick('g')} isPressed={isKeyPressed('g')}>G</Key>
        <Key onClick={() => handleKeyClick('h')} isPressed={isKeyPressed('h')}>H</Key>
        <Key onClick={() => handleKeyClick('j')} isPressed={isKeyPressed('j')}>J</Key>
        <Key onClick={() => handleKeyClick('k')} isPressed={isKeyPressed('k')}>K</Key>
        <Key onClick={() => handleKeyClick('l')} isPressed={isKeyPressed('l')}>L</Key>
        <Key onClick={() => handleKeyClick(';')} isPressed={isKeyPressed(';')}>:;</Key>
        <Key onClick={() => handleKeyClick("'")} isPressed={isKeyPressed("'")}>{`'"`}</Key>
        <Key 
          onClick={() => handleKeyClick('enter')} 
          isPressed={isKeyPressed('enter')}
          width="w-20"
        >
          return
        </Key>
      </div>

      {/* QWERTY Row 3 */}
      <div className="flex gap-2">
        <Key 
          onClick={() => handleKeyClick('shift')} 
          isPressed={isKeyPressed('shift')}
          width="w-24"
        >
          shift
        </Key>
        <Key onClick={() => handleKeyClick('z')} isPressed={isKeyPressed('z')}>Z</Key>
        <Key onClick={() => handleKeyClick('x')} isPressed={isKeyPressed('x')}>X</Key>
        <Key onClick={() => handleKeyClick('c')} isPressed={isKeyPressed('c')}>C</Key>
        <Key onClick={() => handleKeyClick('v')} isPressed={isKeyPressed('v')}>V</Key>
        <Key onClick={() => handleKeyClick('b')} isPressed={isKeyPressed('b')}>B</Key>
        <Key onClick={() => handleKeyClick('n')} isPressed={isKeyPressed('n')}>N</Key>
        <Key onClick={() => handleKeyClick('m')} isPressed={isKeyPressed('m')}>M</Key>
        <Key onClick={() => handleKeyClick(',')} isPressed={isKeyPressed(',')}>{'<,'}</Key>
        <Key onClick={() => handleKeyClick('.')} isPressed={isKeyPressed('.')}>{'>.'}</Key>
        <Key onClick={() => handleKeyClick('/')} isPressed={isKeyPressed('/')}>?/</Key>
        <Key 
          onClick={() => handleKeyClick('shift')} 
          isPressed={isKeyPressed('shift')}
          width="w-24"
        >
          shift
        </Key>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-2">
        <Key 
          onClick={() => handleKeyClick('fn')} 
          isPressed={isKeyPressed('fn')}
          width="w-12"
        >
          fn
        </Key>
        <Key 
          onClick={() => handleKeyClick('control')} 
          isPressed={isKeyPressed('control')}
          width="w-16"
        >
          control
        </Key>
        <Key 
          onClick={() => handleKeyClick('alt')} 
          isPressed={isKeyPressed('alt')}
          width="w-16"
        >
          option
        </Key>
        <Key 
          onClick={() => handleKeyClick('meta')} 
          isPressed={isKeyPressed('meta')}
          width="w-16"
        >
          ⌘
        </Key>
        <Key 
          onClick={() => handleKeyClick('space')} 
          isPressed={isKeyPressed('space')}
          width="w-32"
        >
          space
        </Key>
        <Key 
          onClick={() => handleKeyClick('meta')} 
          isPressed={isKeyPressed('meta')}
          width="w-16"
        >
          ⌘
        </Key>
        <Key 
          onClick={() => handleKeyClick('alt')} 
          isPressed={isKeyPressed('alt')}
          width="w-16"
        >
          option
        </Key>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Key 
              onClick={() => handleKeyClick('arrowleft')} 
              isPressed={isKeyPressed('arrowleft')}
              width="w-12"
            >
              ←
            </Key>
          </div>
          <div className="flex gap-2">
            <Key 
              onClick={() => handleKeyClick('arrowdown')} 
              isPressed={isKeyPressed('arrowdown')}
              width="w-12"
            >
              ↓
            </Key>
            <Key 
              onClick={() => handleKeyClick('arrowup')} 
              isPressed={isKeyPressed('arrowup')}
              width="w-12"
            >
              ↑
            </Key>
            <Key 
              onClick={() => handleKeyClick('arrowright')} 
              isPressed={isKeyPressed('arrowright')}
              width="w-12"
            >
              →
            </Key>
          </div>
        </div>
      </div>

      {/* Status Display */}
      {lastPressedKey && (
        <div className="mt-4 text-center">
          <p className="text-gray-300 text-sm">Last pressed key: <span className="text-blue-400 font-mono">{lastPressedKey}</span></p>
          <p className="text-gray-400 text-xs">Press keys on your physical keyboard or click the keys above</p>
        </div>
      )}
    </div>
  );
};

export default Keyboard;
