import React from 'react'
import CoinTail from './tail.png'
import CoinHead from './head.png'

const Coin = () => {
  return (
    <div>
      <div className={`Coin ${rotate && 'Coin-rotate'}`}>
        <img
          src={CoinTail}
          alt=""
          className={currentStatus === 'yazi' ? 'Coin-back' : 'Coin-front'}
        />
        <img
          src={CoinHead}
          alt=""
          className={currentStatus === 'yazi' ? 'Coin-front' : 'Coin-back'}
        />
      </div>
      <br />

      <button onClick={start}>Atis Yap</button>
    </div>
  )
}

export default Coin
