function Cptst(){
    const[ cpt,setcpt]=useState(0);
    const incrementer=()=>setcpt(cpt+1);
    return(
        <div> 
            <h3> compteur:{cpt}</h3>
                <button onClick={incrementer}>inc+</button>
        </div>
    )
}export default Cptst;
