import './style.scss';
// import {aircrafts, flights} from '../../data';

function AircraftSelector({aircrafts, setCurrentAircraft}) {

  return (
    <div className="aircrafts-selector">
      <h3>Current flight: </h3>
      {aircrafts.map((aircraft) => {
        return (
          <>
            <div className="aircraft" onClick={() => {
              setCurrentAircraft(aircraft.ident)
            }}>
              {aircraft.ident} - {aircraft.type}
            </div>
          </>
        )

      })}
    </div>
  );
}

export default AircraftSelector;
