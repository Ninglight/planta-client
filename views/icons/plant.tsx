import React from 'react'

type Props = {
    size?: number;
    className?: string;
}

const PlantIcon: React.FC<Props> = ({ size, className }) => {
    return (
        <svg width={size} height={size} className={className} viewBox="0 0 247 79">
        <defs>
          <polygon id="plant-a" points="0 .591 49 .591 49 57.754 0 57.754"/>
          <polygon id="plant-c" points=".333 .465 7.668 .465 7.668 21 .333 21"/>
        </defs>
        <g fill="none" fill-rule="evenodd" transform="translate(0 -19)">
          <g transform="translate(0 20)">
            <mask id="plant-b" fill="#fff">
              <use xlinkHref="#plant-a"/>
            </mask>
            <path fill="#7AC4A0" d="M42.0900577,50.7253032 C38.0711154,54.5561097 33.0995,56.8227871 27.9554423,57.5206581 C26.8105385,57.6768839 25.6543269,57.7535935 24.5,57.7535935 C23.3456731,57.7535935 22.1894615,57.6768839 21.0445577,57.5206581 C15.9005,56.8227871 10.9288846,54.5561097 6.90994231,50.7253032 C2.303,46.1517226 0,40.1590129 0,34.1634968 C0,28.1698516 2.303,22.1762065 6.90994231,17.6035613 L20.9060385,2.02681935 C22.9140962,0.111883871 26.0859038,0.111883871 28.0939615,2.02681935 L42.0900577,17.6035613 C51.303,26.7497871 51.303,41.5790774 42.0900577,50.7253032" mask="url(#plant-b)"/>
            <g transform="translate(21 57)">
              <mask id="plant-d" fill="#fff">
                <use xlinkHref="#plant-c"/>
              </mask>
              <path fill="#AEE5C6" d="M7.6675,0.46515 L7.6675,17.4999682 C7.6675,19.4329227 6.0265,21.0002864 4.0005,21.0002864 C1.9735,21.0002864 0.3325,19.4329227 0.3325,17.4999682 L0.3325,0.46515 C1.5485,0.624559091 2.7745,0.702831818 4.0005,0.702831818 C5.2255,0.702831818 6.4515,0.624559091 7.6675,0.46515" mask="url(#plant-d)"/>
            </g>
          </g>
          <text fill="#466E75" fontFamily="AvenirNext-Medium, Avenir Next" fontSize="79" font-Weight="400">
            <tspan x="63" y="79">plant</tspan>
          </text>
        </g>
      </svg>
    )
}

export default PlantIcon