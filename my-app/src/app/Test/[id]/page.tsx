type Params = {
    params : { 
      id : number,
      }
    }

export const Composant = ({ params }:Params) => { 
    const id = params.id;
    return ( <h1> {id} </h1> )
    }
    
export default Composant;