import React from 'react';
import cn from 'classnames';

interface TileProps {
  x: number;
  y: number;
  value: number;
  isDisabled?: boolean;
  isNew?: boolean;
  isMerged?: boolean;
}

export default function Tile({
  x,
  y,
  value,
  isDisabled,
  isMerged,
  isNew,
}: TileProps) {
  return (
    <div
      className={cn(`tile tile-${value} tile-position-${x}-${y}`, {
        'tile-merged': isMerged,
        'tile-new': isNew,
      })}
    >
      <div className="tile-inner">{value}</div>
    </div>
  );
}
