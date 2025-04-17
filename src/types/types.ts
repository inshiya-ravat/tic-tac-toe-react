type Box = {
    row: number,
    col:number
}
export type AllowedSymbol = 'X' | '0'
export type GameTurn = {
    box:Box,
    player: AllowedSymbol
}
export type AllowedEntries = AllowedSymbol | null
export interface GameOverProp {
    winner: AllowedEntries,
    rematch: ()=>void
}
export interface LogProp{
    turns : GameTurn[]
}
export interface GameBoardProp {
    togglePlayer: (rowIndex:number,colIndex:number)=>void,
    gameboard: AllowedEntries[][]
}
export interface PlayerProp{
    isActive: boolean
    name:string,
    symbol:AllowedSymbol
}