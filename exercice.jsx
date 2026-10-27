function Compnpm({ nom, age, sexe, message, couleur, retour1 }) {
    return (
        <div>
            <h3 style={{ color: couleur }}>
                {message ? message : "Bienvenue"}{" "}
                {sexe === "F" ? "Mme" : "Mr"} {nom}
            </h3>

            {retour1 && <br />}

           