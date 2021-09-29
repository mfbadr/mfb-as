import './style.scss';

function Schedule({schedule}) {
    if(schedule.length === 0) {
        return (
            <div className="schedule-wrapper">
                <h3>Schedule</h3>
                <h4>
                    Click an eligible flight to begin building the schedule
                </h4>    
            </div>
        )
    }
    return (
        <div className={'schedule-wrapper'}>
       
            
            {schedule.map((scheduleItem) => {

                //TODO: add button to remove last item
                return (
                    <div className="schedule-item">
                        <div className={`flight`} >
                            <span>{`${scheduleItem.origin} -> ${scheduleItem.destination}`}</span>
                            <p>{` ${scheduleItem.readable_departure} -> ${scheduleItem.readable_arrival}`}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
  }
  
  export default Schedule;
  