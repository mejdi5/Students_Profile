import React,{useState,useEffect} from 'react'
import './App.css';
import Student from './Student'
import {useSelector, useDispatch} from "react-redux"
import { getAllStudents, filterByTags} from './Redux/Action';



function App () {

const [name, setName] = useState('')
const dispatch = useDispatch()
const Students = useSelector(state => state.Students)
const tags = useSelector(state => state.tags)
const FilterString = useSelector(state => state.filterString)



useEffect(() => {
    dispatch(getAllStudents())
  }, [])

let array = Students.map(student => student = {...student, Tags: tags.filter(tag => tag.id == student.id) })
console.log(array)


if(FilterString != ''){
    array = array.filter(el => el.Tags && el.Tags.find(tag => tag.text.toLowerCase().startsWith(FilterString.toLowerCase().trim())))
    console.log(array)
} 



return( 
    <>
    <div style={{width:'50%', margin:'100px 20%', border:'1px solid grey', backgroundColor:'white'}}>
    <input style={{width:'99%', height:'30px', border:'0', borderBottom:'1px solid grey', backgroundColor:'white'}} 
            type='text' 
            placeholder="Search By Name" 
            value={name} 
            onChange={e => setName(e.target.value)}
    /> 

    <input
            style={{width:'99%', height:'30px', border:'0', borderBottom:'1px solid grey', backgroundColor:'white'}}
            type="text"
            placeholder="Search By Tag"
            value={FilterString}
            onChange={e => dispatch(filterByTags(e.target.value))} 
    />

    {array && array 
    .filter(el => el.firstName.toLowerCase().startsWith(name.toLowerCase().trim()) || el.lastName.toLowerCase().startsWith(name.toLowerCase().trim()))
    .map(el => 
        <div key={el.id} style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', borderBottom:'1px solid grey', backgroundColor:'white'}}> 
            <img src={el.pic} style={{height:'100px', borderRadius:'50%', border: '0.1px solid grey', backgroundColor:'white'}}/>
        <div style={{backgroundColor:'white', marginTop:'20px'}} >
            <p style={{fontWeight:'bold', fontSize:'40px', width:'500px', textAlign:'justify', backgroundColor:'white'}}>
                {el.firstName} {el.lastName}
            </p>
            <p style={{textAlign:'justify', marginLeft:'20px', height:'5px', backgroundColor:'white', fontSize:'15px'}}>
                Email: {el.email}
            </p>
            <p style={{textAlign:'justify', marginLeft:'20px', height:'5px', backgroundColor:'white', fontSize:'15px'}}>
                Company: {el.company}
            </p>
            <p style={{textAlign:'justify', marginLeft:'20px', height:'5px', backgroundColor:'white', fontSize:'15px'}}>
                Skill: {el.skill}
            </p> 
            <p style={{textAlign:'justify', marginLeft:'20px', height:'5px', marginBottom:'30px',backgroundColor:'white', fontSize:'15px'}}>
                Average: {el.grades.reduce(( p, c ) => Number(p) + Number(c), 0)/el.grades.length}
            </p>
            <Student el={el} />
        </div>
        </div>
    
        )}
    </div>
    </>
)


}

export default App; 

