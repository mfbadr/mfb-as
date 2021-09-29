import './style.scss';
import {aircrafts, flights} from '../../data';
import FlightSelector from '../FlightSelector';
import AircraftSelector from '../AircraftSelector';
import Chart from '../Chart';
import Schedule from '../Schedule';
import {useState} from 'react';


function AircraftScheduler() {
  const [currentAircraft, setCurrentAircraft] = useState(aircrafts[0]);
  const [currentSchedule, setCurrentSchedule] = useState([]);

  //TODO: fetch Data from API with useEffect
  return (
    <div className="as-outer-wrapper">
        <h2>AlphaSights Airlines Scheduler</h2>
        <div className="as-inner-wrapper">
          <Chart schedule={currentSchedule} />
          <AircraftSelector aircrafts={aircrafts} setCurrentAircraft={setCurrentAircraft} />
          <Schedule currentAircraft={currentAircraft} schedule={currentSchedule} />
          <FlightSelector currentSchedule={currentSchedule} flights={flights} setCurrentSchedule={setCurrentSchedule} />
        </div>
    </div>
  );
}

export default AircraftScheduler;
