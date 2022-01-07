import {Habito, DescriptionHabito, Check} from './style';
import { BsCheckLg as IconeCheck } from 'react-icons/bs';

export default function Habitos({name,currentSequence,highestSequence, done, id}){
    let record=false;
    if(currentSequence==highestSequence) record=true;
    return(
        <Habito>
            <DescriptionHabito done={done} record = {record}>
                <h1>{name}</h1>
                <span>Sequência atual: <h3>{currentSequence} dias</h3></span>
                <span>Seu recorde: <h4>{highestSequence} dias</h4></span>
            </DescriptionHabito>
            <Check done={done}>
                <BsCheckLg className="icone"/>
            </Check>
        </Habito>
    );
}