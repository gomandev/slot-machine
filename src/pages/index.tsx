import React, { Component, PureComponent } from 'react';
//UI - components

// Spring React
import { Spring } from 'react-spring';
// Store
const audioSlot = require('../audios/reel.wav');
const audioWin = require('../audios/winner.wav');
import { lines, prizes, sliders } from 'mock/data';
import { LineInterface, PrizeInterface } from 'mock/data';
import Spinner from '@modules/atoms/Spin';
import BalanceArea from '@modules/sections/Balance';
import WinningLines from '@modules/sections/Lines';
import PayTable from '@modules/sections/Paytable';
import WinnerSign from '@modules/sections/Sign';
import DebuggerY from '@modules/sections/Debugger';
import Symbols from '@modules/sections/Options';
import Reel from '@modules/sections/Reels/Reels';
import SwitchDebugger from '@modules/sections/Debug';

const linesList: Array<LineInterface> = lines;
const prizesList: PrizeInterface = prizes;
const slidersList: Array<LineInterface> = lines;

interface IProps {
  winner: null;
}

interface IState {
  winner: any;
  balance: number;
  debugMode: boolean;
  slider1: number;
  slider2: number;
  slider3: number;
  select1: string;
  select2: string;
  select3: string;

  totalWin: number;
  winnerLine: any[];
  winnerTable: any[];
  vibrate: boolean;
}

class Index extends PureComponent<any, any> {
  _child1: any;
  _child2: any;
  _child3: any;
  constructor(props) {
    super(props);

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeSlider = this.handleChangeSlider.bind(this);
    this.finishHandler = this.finishHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateWinner = this.updateWinner.bind(this);

    this.state = {
      winner: null,
      debugMode: true,
      slider1: 1,
      slider2: 1,
      slider3: 1,
      select1: '',
      select2: '',
      select3: '',
      balance: 5000,
      totalWin: 0,
      winnerLine: [],
      winnerTable: [],
      vibrate: true,
    };
  }

  // Handles Spin Buttom action.
  handleClick = () => {
    this.setState({ winner: null });
    this.setState({ balance: this.state.balance - 1 });
    this.setState({ totalWin: 0 });
    this.setState({ winnerLine: [] });
    this.setState({ winnerTable: [] });
    this.setState({ vibrate: true });
    this.emptyArray();
    this._child1.forceUpdateHandler();
    this._child2.forceUpdateHandler();
    this._child3.forceUpdateHandler();
  };

  // Handles chages in the slider on debug mode.
  handleChangeSlider = (name: string) => (e, value) => {
    this.setState({ [name]: value });
  };

  // Handles vertical change on debug mode.
  handleChangeSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Handles the change in the input balance.
  handleChangeBalance = event => {
    this.setState({ balance: event.target.value });
  };

  // Updating states for winner lines in reels and pay table
  updateWinner = (line, prize) => {
    var winnerLine = this.state.winnerLine;
    winnerLine = winnerLine.concat(line);
    this.setState({ winnerLine });

    var winnerTable = this.state.winnerTable;
    winnerTable = winnerTable.concat(prize);
    this.setState({ winnerTable });
  };

  // Debug Mode Switch
  debugMode = event => {
    this.setState({ debugMode: !event.target.checked });
  };

  // Image height values in the Reels
  static symbols = {
    bar: 0,
    twoBar: 121,
    threeBar: 242,
    seven: 363,
    cherry: 484,
  };

  // Positioning horizontal Arrays when spinning finishes.
  static topLine = [];
  static centerLine = [];
  static bottomLine = [];

  // Pushes values into arrays to get the positions of the figures
  finishHandler = value => {
    let imagePosition = value * -1;
    let sumCenterArray;
    let sumBottomArray;
    if (imagePosition < Index.symbols.seven) {
      sumCenterArray = Index.symbols.twoBar;
      sumBottomArray = Index.symbols.threeBar;
    } else if (imagePosition === Index.symbols.seven) {
      sumCenterArray = Index.symbols.twoBar;
      sumBottomArray = -imagePosition;
    } else {
      sumCenterArray = -imagePosition;
      sumBottomArray = -(imagePosition - Index.symbols.twoBar);
    }
    Index.topLine.push(imagePosition);
    Index.centerLine.push(imagePosition + sumCenterArray);
    Index.bottomLine.push(imagePosition + sumBottomArray);

    if (Index.topLine.length === 3) {
      this.getPrizes();
      this.setState({ winner: false });
      this.setState({ vibrate: false });
    }
  };

  /**
   *  Prizes Values
   *
   *  3 CHERRY symbols on top line 2000
   *  3 CHERRY symbols on center line 1000
   *  3 CHERRY symbols on bottom line 4000
   *  3 7 symbols on any line 150
   *  3 3xBAR symbols on any line 50
   *  3 2xBAR symbols on any line 20
   *  3 BAR symbols on any line 10
   *  Combination of any BAR symbols on any line 5
   *  Any combination of CHERRY and 7 on any line 75
   *
   */

  // Gets the prizes according the array lines setting balance's state.

  getPrizes = () => {
    let sumatories = [Index.topLine, Index.centerLine, Index.bottomLine];
    let lookUp = Object.entries(prizesList);
    let totalPrize = 0;

    for (const [index, suma] of sumatories.entries()) {
      let sumatorie = suma.reduce((sum, x) => sum + x); // Sumatory Row
      let triplet = suma.every(match => match === suma[0]); // Triplet Row
      let barPair = suma.filter(num => num === Index.symbols.bar); // BAR Pair
      let cherry = suma.includes(Index.symbols.cherry);
      let seven = suma.includes(Index.symbols.seven);
      let prize = 0;

      for (const key of lookUp) {
        //Check any triplets

        if (key[1].position * 3 === sumatorie && triplet) {
          if (key[1].tripletLineWin) {
            prize = key[1].tripletLineWin;
            this.updateWinner(index, prize);
          } else if (key[1].topLineWin && index === 0) {
            prize = key[1].topLineWin;
            this.updateWinner(index, prize);
          } else if (key[1].centerLineWin && index === 1) {
            prize = key[1].centerLineWin;
            this.updateWinner(index, prize);
          } else if (key[1].bottomLineWin && index === 2) {
            prize = key[1].bottomLineWin;

            this.updateWinner(index, prize);
          }
        }
        // Check BAR pair
        if (key[1].pairAnyLine && barPair.length === 2) {
          prize = key[1].pairAnyLine;
          this.updateWinner(index, prize);
        }
        // Check Cherry/Seven combination
        if (key[1].combinedSeven && cherry && seven) {
          prize = key[1].combinedSeven;
          this.updateWinner(index, prize);
        }
      }

      totalPrize += prize;
    }
    let { balance } = this.state;
    this.setState({ balance: balance + totalPrize });
    this.setState({ totalWin: totalPrize });
  };

  // Cleans arrays at spinning
  emptyArray = () => {
    Index.topLine = [];
    Index.centerLine = [];
    Index.bottomLine = [];
  };

  render() {
    //States values
    const {
      winner,
      debugMode,
      balance,
      winnerLine,
      winnerTable,
      vibrate,
      totalWin,
    } = this.state;

    const { slider1, slider2, slider3 } = this.state;
    const { select1, select2, select3 } = this.state;
    let selectsList = [select1, select2, select3];
    let slidersList = [slider1, slider2, slider3];

    // Switching OFF/ON components, animations, and sound effects.
    let disabled = winner !== null ? false : true;
    let vibration = vibrate !== false ? 'vibrate-' : '';
    let audioSlotItem =
      vibrate !== false ? <audio ref="audio_tag" src={audioSlot} autoPlay /> : '';
    let audioWinItem = winnerLine.length ? (
      <audio ref="audio_tag" src={audioWin} autoPlay />
    ) : (
      ''
    );

    // Assigninig components to be render.
    const repeatButton = <Spinner onClick={this.handleClick} disabled={disabled} />;
    const balanceArea = (
      <BalanceArea
        balance={this.handleChangeBalance}
        value={balance}
        disabled={disabled}
      />
    );
    const debugSwitch = <SwitchDebugger debug={this.debugMode} />;
    const lineSections = <WinningLines winnerLine={winnerLine} />;
    const payTable = <PayTable vibrate={winnerTable} />;
    const winnerSign = (
      <WinnerSign total={totalWin} winnerLine={winnerLine.length} />
    );
    const debugMenu = linesList.map((line, index) => {
      return (
        <td key={index}>
          <DebuggerY
            onChange={this.handleChangeSelect}
            disabled={this.state.debugMode}
            value={selectsList[index]}
            name={line.state}
            position={line.position}
          ></DebuggerY>
          <Symbols
            onChange={this.handleChangeSlider(sliders[index].name)}
            value={slidersList[index + 1]}
            disabled={this.state.debugMode}
          ></Symbols>
        </td>
      );
    });

    return (
      <div style={{ maxWidth: '80%', margin: '0 auto', overflow: 'hidden' }}>
        <div className="main-wrapper">
          <div className="right">
            <Spring
              from={{ opacity: 0, marginTop: -500 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ duration: 500 }}
            >
              {(props: any) => (
                <div
                  style={props}
                  className="spinner-container br3 shadow-5 bg-dark-gray"
                >
                  <Reel
                    key="Reel1"
                    onFinish={this.finishHandler}
                    ref={child => {
                      this._child1 = child;
                    }}
                    timer="1000"
                    debug={!debugMode}
                    selectReil={select1}
                    sliderReil={slider1}
                    vibrate={vibration + '1'}
                  />
                  <Reel
                    key="Reel2"
                    onFinish={this.finishHandler}
                    ref={child => {
                      this._child2 = child;
                    }}
                    timer="1500"
                    debug={!debugMode}
                    selectReil={select2}
                    sliderReil={slider2}
                    vibrate={vibration + '2'}
                  />
                  <Reel
                    key="Reel3"
                    onFinish={this.finishHandler}
                    ref={child => {
                      this._child3 = child;
                    }}
                    timer="2000"
                    debug={!debugMode}
                    selectReil={select3}
                    sliderReil={slider3}
                    vibrate={vibration + '3'}
                  />
                  <div className="gradient-fade"></div>
                  {lineSections}
                  {audioSlotItem}
                  {audioWinItem}
                  {winnerSign}
                </div>
              )}
            </Spring>
            <Spring
              from={{ opacity: 0, marginLeft: -500 }}
              to={{ opacity: 1, marginLeft: 0 }}
              config={{ duration: 500 }}
            >
              {(props: any) => (
                <table
                  style={props}
                  className="tc center center pa1 shadow-5 br2 bg-dark-gray debugger"
                >
                  <tr>
                    {repeatButton}
                    {balanceArea}
                    {debugSwitch}
                  </tr>
                  <tr>{debugMenu}</tr>
                </table>
              )}
            </Spring>
          </div>
          <div className="pay-table">{payTable}</div>
        </div>
      </div>
    );
  }
}

export default Index;
