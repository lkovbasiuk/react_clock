import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string;
  today: Date;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  private nameTimerId?: number;

  private dateTimerId?: number;

  componentDidMount(): void {
    this.nameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
      // eslint-disable-next-line no-console
      console.log(this.state.clockName);
    }, 3300);

    this.dateTimerId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
    }

    if (this.dateTimerId) {
      window.clearInterval(this.dateTimerId);
    }
  }

  componentDidUpdate(): void {
    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock clockName={clockName} today={today} hasClock={hasClock} />
      </div>
    );
  }
}
