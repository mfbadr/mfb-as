import './style.scss';

function Chart({schedule}) {
    const oneDay = 60 * 60 * 24;
    const twentyMinutes = 20 * 60;
    const totalUtilization = schedule.reduce((previousValue, currentFlight)=>{
        return previousValue + (currentFlight.arrivaltime - currentFlight.departuretime) + twentyMinutes;
    }, 0);


    const utilizationPercent = `${((totalUtilization/oneDay) * 100).toFixed(1)}%`; 
    return (
        <div className="chart-outer-wrapper">
            <h3>Utilization: {utilizationPercent}</h3>
            <div className={'chart-wrapper'}>
                {
                    schedule.map((flight) => {
                        const activeWidth = ((flight.arrivaltime - flight.departuretime)/oneDay) * 100; 
                        const idleWidth = (twentyMinutes/oneDay) * 100; 
                        return (
                            <>
                                <div className="chart-section active" style={{
                                    width: `${activeWidth}%`,
                                    left: `${(flight.departuretime / oneDay) * 100}%`
                                }} />
                                <div className="chart-section idle"
                                    style={{
                                        width: `${idleWidth}%`,
                                        left: `${((flight.arrivaltime)/ oneDay) * 100}%`
                                        
                                    }}
                                    />
                            </>
                        )
                    })
                }
            </div>
        </div>

    );
  }
  
  export default Chart;
  