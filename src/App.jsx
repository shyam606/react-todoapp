import React, {useEffect, useState } from 'react';
import Todolist from './Todolist';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const App = ()=>{
    const [inputList,setInputList] = useState();
    const [Items,setItems] = useState([]);

    const itemEvent= (event)=>{
        setInputList(event.target.value);

    }
    const listOfItems  = (event)=>{ 
        event.preventDefault();
        setItems((oldItems)=>{
            // console.log(oldItems);
            return [...oldItems,inputList]
        });
        setInputList("")
    }
    useEffect(() => {
        const items2 = JSON.parse(localStorage.getItem('Items'));
        if (items2) {
          setItems(items2);
        }
      }, []);
    
    useEffect(() => {
        localStorage.setItem('Items', JSON.stringify(Items));
      }, [Items]);

        const keyboardClick = (event)=>{
            //it triggers by pressing the enter key
            if (event.keyCode === 13) {
                listOfItems();
            }
        }
    const deleteItems = (id)=>{
       setItems((oldItems)=>{
           return oldItems.filter((arrElem,index)=>{
               return index !== id;
           })
       })
    }

    return(<>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>Todo List App</h1>
                <br/>
                <form>
                <input type="text" placeholder="Add a items" value={inputList} onChange={itemEvent} />
                <button onClick={listOfItems} onKeyPress={keyboardClick}><AddIcon/></button>
                </form>
                <ol>
                    {/* <li>{Items}</li> */}
                    {Items.map((itemval,index)=>{
                        return (<Todolist
                        key={index}
                        id={index}
                        text={itemval}
                        onSelect={deleteItems} />)
                    })}
                </ol>
            </div>
        </div>
    </>)
}
export default App