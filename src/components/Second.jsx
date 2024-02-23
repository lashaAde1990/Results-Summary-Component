import './second.css';
import reaction from '/images/icon-reaction.svg';
import memory from '/images/icon-memory.svg';
import verbal from '/images/icon-verbal.svg';
import visual from '/images/icon-visual.svg';

function SecondSide(){
    return (
        <>
        <div className='second'>
            <h1 className='summery'>Summary</h1>
            <div className='flashed'>
                <div className='fleshChild'><img src={reaction}/> <p>Reaction</p> </div>
                <div className='point'>80 <span>/100</span></div>
            </div>
            
            <div className='brane'>
                    <div className='memori'><img src={memory}/> <p>Memory</p></div>
                    <div className='point'>92 <span>/100</span></div>
            </div>
            
            <div className='verb'>
                <div className='verbalIcon'>
                    <img src={verbal}/> 
                    <p>Verbal</p>
                </div>
                <div className='point'>61 <span>/100</span></div>
            </div>
            <div className='visualIcon'>
                <div className='visible'><img src={visual}/> <p>Visula</p></div>
                <div className='point'>73 <span>/100</span></div>
            </div>
            <button className='but'>Continue</button>
        </div>
        </>
    )
}

export default SecondSide;
