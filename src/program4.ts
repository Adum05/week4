import { Youth } from "./youth";
import { Veteran } from "./veteran";
import { Player } from "./player";

let veteran = new Veteran(`Luka Modrić`, 87, 70);
let youth = new Youth(`Arda Güler`, 79, 95);

logVeteran(veteran);
logYouth(youth);

function logVeteran(player: Veteran){
    console.log(`${player.getType()} ${player.name} ${player.overall} ${veteran.veteranPotential}`)
}

function logYouth(player: Youth){
    console.log(`${player.getType()} ${player.name} ${player.overall} ${youth.youthPotential}`)

}