import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addTag} from './Redux/Action'


function Student({el}) {


    const [viewed, setVidewed] = useState(false)
    const [text, setText] = useState("");
    const dispatch = useDispatch()
    const tags = useSelector(state => state.tags)

    const handleAdd = (e) => {
        if (e.charCode == 13) {
        e.preventDefault();
        dispatch(addTag(el.id,text));
        setText("");
    }
    }


    return(
        <div style={{backgroundColor:'white', display:'inline'}}>

        
        <input
            style={{width:'99%', height:'30px', border:'0', borderBottom:'1px solid grey', backgroundColor:'white'}}
            type="text"
            placeholder="Add a tag"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyPress={handleAdd} 
        />

        {viewed && 
            <div style={{backgroundColor:'white'}}>
                {el.grades.map(
                    (grade, i) => 
                    <p style={{backgroundColor:'white', textAlign:'justify', marginLeft:'20px', height:'5px', marginBottom:'30px', fontSize:'15px'}}>
                        Test {i+1}:    {Number(grade)}%
                    </p>
                )}
            </div>
        }
        <button onClick={() => setVidewed(!viewed)} style={{backgroundColor:'white', height:'20px', float:'right', marginBottom:'30px', border:'0', fontSize:'50px'}}>
            {viewed ? <>-</> : <>+</>} 
        </button> 

        {tags.map(tag => tag.id == el.id && <p style={{display:'inline-block', margin:'5px'}}>{tag.text}</p>)}

        </div>
    )
}

export default Student