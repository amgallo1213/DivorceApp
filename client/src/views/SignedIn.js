import KanbanDivorceProcess from "../components/KanbanDivorceProcess";
import Card from "../components/Card";


const SignedIn = () => {
    return ( 
        <div>
            <p style={{fontSize : '120px'}}>hello</p>

            <div className="column">
                <KanbanDivorceProcess className="board">
                    <Card id="card-1" className="card" draggable="true">
                        <p>Read the Damn Manual!</p>
                    </Card>
                </KanbanDivorceProcess>

                <KanbanDivorceProcess className="board">
                    <Card id="card-2" className="card" draggable="true" droppable="true">
                        <p>Gather Yo Shit!</p>
                    </Card>
                </KanbanDivorceProcess>
        
                <KanbanDivorceProcess  className="board">
                    <Card id="card-3" className="card" draggable="true">
                        <p>What the f do you want from this shit?</p>
                    </Card>
                </KanbanDivorceProcess>

                <KanbanDivorceProcess  className="board">
                    <Card id="card-4" className="card" draggable="true">
                        <p>Fill out the fucking forms!</p>
                    </Card>
                </KanbanDivorceProcess>
            </div>

            
            <KanbanDivorceProcess>
                <div id="blah"></div>
            </KanbanDivorceProcess>

        </div>
     );
}
 
export default SignedIn;