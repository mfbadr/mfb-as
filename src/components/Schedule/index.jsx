import './style.scss';

function Schedule({schedule}) {
    return (
        <div className={'schedule-wrapper'}>
            <h3>Schedule</h3>
            
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
  