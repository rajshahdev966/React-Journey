const About = ({name, children, age})=>{

    return(
        <div>
            <h2>I am coming from About and my Name is {name} and my age is {age}</h2>
            <children/>
        </div>
    )
}
export default About;