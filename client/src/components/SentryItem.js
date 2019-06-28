import React from 'react';
import numeral from 'numeral';

const SentryItem = ({
  name,
  diameter,
  impacts,
  impactProb,
  lastObserved,
  palermo,
  yearMin,
  yearMax,
  orbitalUrl
}) => (
  <div className="asteroid-item" key={name}>
    <div className="asteroid-item__header">
      <h1>{name}</h1>
      <div>
        <p>Last observed:</p>
        <p>
          {lastObserved.split('.')[0].trim()}
        </p>
      </div>
    </div>
    <div className="asteroid-item__body">
      <p>Estimated diameter: {diameter} meters</p>
      <p>
        {impacts} potential{' '}
        {impacts === '1' ? <span>impact </span> : <span>impacts </span>}
        {yearMin === yearMax ? (
          <span>in {yearMin}</span>
        ) : (
          <span>
            between {yearMin} and {yearMax}
          </span>
        )}
        .
      </p>
      <p>
        Impact probability: {impactProb}% (1 in{' '}
        {numeral(Math.round(100 / impactProb / 10) * 10).format('0,0')})
      </p>
      {palermo >= -2 && <p>Hazardous object</p>}
      <a
        href={orbitalUrl}
        style={{ color: 'white', textDecoration: 'none', cursor: 'pointer' }}
      >
        View orbit ->
      </a>
    </div>
  </div>
);

export default SentryItem;
