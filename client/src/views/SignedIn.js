import KanbanDivorceProcess from "../components/KanbanDivorceProcess";
import Card from "../components/Card";


const SignedIn = () => {
    return ( 
        <div>
        
            <p style={{fontSize : '80px'}}>hello</p>
            <KanbanDivorceProcess id="board-1" className="board">
            <Card id="card-1" className="card" draggable="true">
                <p>Card One</p>
            </Card>
            </KanbanDivorceProcess>

            <KanbanDivorceProcess id="board-2" className="board">
            <Card id="card-2" className="card" draggable="true">
                <p>Card Two</p>
            </Card>
            </KanbanDivorceProcess>

        </div>
     );
}
 
export default SignedIn;