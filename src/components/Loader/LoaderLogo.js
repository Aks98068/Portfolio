import React from "react";
import "./LoaderLogo.css";
import { greeting } from "../../portfolio";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <svg
          className="raw_logo"
          width="50%"
          height="40%"
          viewBox="0 0 440 305"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="myHexagon"
            d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
            stroke={theme.body}
            stroke-width="4"
          />
          <path
            class="myHexagon"
            d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
            stroke={theme.body}
            stroke-width="4"
          />
          <path
            class="letter"
            d="M217.945 123.968V132H194.566V123.968H200.65L198.395 115.799H186.056L183.526 123.968H189.884V132H168.829V123.968H174.708L183.971 92.4883H177.647V84.4561H208.683V92.4883H202.291L212.271 123.968H217.945ZM196.446 108.826L192.481 94.5049L188.209 108.826H196.446Z"
            stroke={theme.body}
            stroke-width="3"
          />
          <path
            class="letter"
            d="M217.153 158V149.968H223.101V118.488H217.153V110.456H240.122V118.488H235.132V128.913H248.086V118.488H243.267V110.456H266.099V118.488H260.117V149.968H266.099V158H243.267V149.968H248.086V136.979H235.132V149.968H240.122V158H217.153Z"
            stroke={theme.body}
            stroke-width="3"
          />
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html: `

        .signature1{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 0.5s;
          -o-animation: dash 1s linear forwards 0.5s;
          -moz-animation: dash 1s linear forwards 0.5s;
          animation: dash 1s linear forwards 0.5s;
        }
        .signature2{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 0.7s;
          -o-animation: dash 1s linear forwards 0.7s;
          -moz-animation: dash 1s linear forwards 0.7s;
          animation: dash 1s linear forwards 0.7s;
        }
        .signature3{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 0.9s;
          -o-animation: dash 1s linear forwards 0.9s;
          -moz-animation: dash 1s linear forwards 0.9s;
          animation: dash 1s linear forwards 0.9s;
        }
        .signature4{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 1.1s;
          -o-animation: dash 1s linear forwards 1.1s;
          -moz-animation: dash 1s linear forwards 1.1s;
          animation: dash 1s linear forwards 1.1s;
        }
        .signature5{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 1.3s;
          -o-animation: dash 1s linear forwards 1.3s;
          -moz-animation: dash 1s linear forwards 1.3s;
          animation: dash 1s linear forwards 1.3s;
        }
        .signature6{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 1.5s;
          -o-animation: dash 1s linear forwards 1.5s;
          -moz-animation: dash 1s linear forwards 1.5s;
          animation: dash 1s linear forwards 1.5s;
        }
        .signature7{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 1.7s;
          -o-animation: dash 1s linear forwards 1.7s;
          -moz-animation: dash 1s linear forwards 1.7s;
          animation: dash 1s linear forwards 1.7s;
        }
        .signature8{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 1.9s;
          -o-animation: dash 1s linear forwards 1.9s;
          -moz-animation: dash 1s linear forwards 1.9s;
          animation: dash 1s linear forwards 1.9s;
        }
        .signature9{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 2.1s;
          -o-animation: dash 1s linear forwards 2.1s;
          -moz-animation: dash 1s linear forwards 2.1s;
          animation: dash 1s linear forwards 2.1s;
        }
        .signature10{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 2.3s;
          -o-animation: dash 1s linear forwards 2.3s;
          -moz-animation: dash 1s linear forwards 2.3s;
          animation: dash 1s linear forwards 2.3s;
        }
        .signature11{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 2.5s;
          -o-animation: dash 1s linear forwards 2.5s;
          -moz-animation: dash 1s linear forwards 2.5s;
          animation: dash 1s linear forwards 2.5s;
        }
        .signature12{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 2.7s;
          -o-animation: dash 1s linear forwards 2.7s;
          -moz-animation: dash 1s linear forwards 2.7s;
          animation: dash 1s linear forwards 2.7s;
        }
        .signature13{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 2.9s;
          -o-animation: dash 1s linear forwards 2.9s;
          -moz-animation: dash 1s linear forwards 2.9s;
          animation: dash 1s linear forwards 2.9s;
        }
        .signature14{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 3.1s;
          -o-animation: dash 1s linear forwards 3.1s;
          -moz-animation: dash 1s linear forwards 3.1s;
          animation: dash 1s linear forwards 3.1s;
        }
        .signature15{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 1s linear forwards 3.3s;
          -o-animation: dash 1s linear forwards 3.3s;
          -moz-animation: dash 1s linear forwards 3.3s;
          animation: dash 1s linear forwards 3.3s;
        }

        .signature{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 6s linear forwards 0.5s;
          -o-animation: dash 6s linear forwards 0.5s;
          -moz-animation: dash 6s linear forwards 0.5s;
          animation: dash 6s linear forwards 0.5s;
        }

        .letter{
          opacity: 0;
          -webkit-animation: fadein 2s linear forwards 2.5s;
          -o-animation: fadein 2s linear forwards 2.5s;
          -moz-animation: fadein 2s linear forwards 2.5s;
          animation: fadein 2s linear forwards 2.5s;
        }

        @-webkit-keyframes fadein{
          from{
            opacity: 0;
          }
          to{
            opacity: 1;
          }
        }

        .myHexagon{
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          -webkit-animation: dash 4s linear forwards 0.5s;
          -o-animation: dash 4s linear forwards 0.5s;
          -moz-animation: dash 4s linear forwards 0.5s;
          animation: dash 4s linear forwards 0.5s;
        }

        @-webkit-keyframes dash{
          from{
            stroke-dashoffset: 800;
          }
          to{
            stroke-dashoffset: 0;
          }
        }
      `,
              }}
            />
          </defs>
        </svg>
        <div className="user-name" style={{ color: theme.body, fontSize: "3rem", textAlign: "center", marginTop: "2rem", fontWeight: "bold" }}>
          {greeting.title}
        </div>
      </div>
    );
  }
}

export default LogoLoader;
