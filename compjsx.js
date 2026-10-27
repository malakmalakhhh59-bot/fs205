function compjsx(){
   const carre=(x)=x*x;
    let message="bienvenue";
    return <div>
        <h1>{message}</h1>
        <h1>{1+5}</h1>
        <h3>carre de 10 : {carre(10)} </h3>
    
      <h3>Maximum : {(x>=y)? x: y}</h3>
      <h3>
        {(nombre % 2 === 0)
          ? ${nombre} est pair : ${nombre} est impair}
      </h3>
       <h3>
        Nom : {nom} - Prénom : {prenom}
      </h3>
            {afficherPrenom && <h3>Prénom : {prenom}</h3>}

    </div>
}
//afficher le nom dans la couleur defenie une variable
//si x est pair afficher en bleu , si impaire afficher en vert
