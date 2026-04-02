import PropTypes from "prop-types"

function Student({name="Fulano", age=0, isStudent=false}) {    
    return(
        <div className="Student">
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Estudante: {isStudent ? "Sim" : "Não"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}


export default Student