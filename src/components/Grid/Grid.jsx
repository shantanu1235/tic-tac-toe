import { useState } from "react"
import Card from "../Card/Card"
import "./Grid.css"
import iswinner from "../helpers/checkWinner.js"

function Grid({numberOfCard}){
const [board,setBoard]=useState(Array(numberOfCard).fill(""))
const [turn,setTurn]=useState(true)
const [winner, setWinner] = useState(null)

function play(index){
    if(turn==true){
        board [index] = 'X' 
    }else{
        board[index]="O"

        setBoard([...board])
        setTurn(!turn)

    }
    const win=iswinner(board,turn ? "X": "O")
    
    if (win){
        setWinner(win)
    }
}
return(
    <div className="grid-wrap">
        {
            winner&&(
                <>
                <h1 className="turn-highlight">Winner is {winner}</h1>
                </>
            )
        }
        <h1 className="turn-highlight">Current Turn :{(true) ? 'X' : 'O'}</h1>

    <div className="grid">
    {board.map((el,idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
    </div>
    </div>
)
}


export default Grid