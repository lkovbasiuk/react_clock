import React from 'react';

type Props = {
  clockName: string;
  today: Date;
  hasClock: boolean;
};

export class Clock extends React.Component<Props> {
  render() {
    const { clockName, today, hasClock } = this.props;

    if (!hasClock) {
      return null;
    }

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
