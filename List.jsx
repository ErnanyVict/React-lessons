function List(props){
    
    const category = props.category
    const itemList = props.items

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); alfabeto
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) alfabeto inverso
    // fruits.sort((a, b) => a.calories - b.calories) numericamente
    // fruits.sort((a, b) => b.calories - a.calories) numericamente inverso
    
    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100) filtrar
    // const highCalFruit = fruits.filter(fruit => fruit.calories > 100)
    
    const listItems = itemList.map(items => <li key={items.id}>{items.name}: &nbsp;
    <b>{items.calories}</b>
    </li>)

    return(
        <>
            <h3 className="category">{category}</h3>
            <ol className="items">{listItems}</ol>
        </>
    );
}

export default List