import './style.scss';
// import {aircrafts, flights} from '../../data';
import _ from 'lodash'
function FlightSelector({flights, currentSchedule, setCurrentSchedule}) {
  
  const sortedFlights = _.sortBy(flights, 'departuretime');
  console.log({sortedFlights});

  const addFlight = (flight, isDisabled) => {
    if(isDisabled) {
      return;
    }
    setCurrentSchedule(prevSchedule => [...prevSchedule, flight]);
  }

  return (
    <div className="flight-selector-wrapper">
      <h3>Flights</h3>
      {sortedFlights.map((flight) => {

          const getIsDisabled = () => {
            
            if(currentSchedule.length === 0) {
              return false;
            }
            const lastFlight = currentSchedule.at(-1);
            const notEnoughTurnAroundTime = (flight.departuretime - lastFlight.arrivaltime) < 1200;
            const doesntDepartFromLastAirport = flight.origin !== lastFlight.destination;
            return notEnoughTurnAroundTime || doesntDepartFromLastAirport;
          }

          const isDisabled = getIsDisabled();

          return (
            <div className={`flight ${isDisabled ? 'disabled' : ''}`} onClick={() => {addFlight(flight, isDisabled)}}>
              <span>{`${flight.origin} -> ${flight.destination}`}</span>
              <p>{` ${flight.readable_departure} -> ${flight.readable_arrival}`}</p>
            </div>
          );
        })}
    </div>
  )
}

export default FlightSelector;
