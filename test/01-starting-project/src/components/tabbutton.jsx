export default function TabButton ({children}){
    

// document.querySelector('button').addEventListener('click', () => {
//         console.log('Button clicked!');
//     });

function handleClick(){
    console.log("hello SLA people");
    
}

    return (
        <li>
            <button onClick={handleClick}>{children}</button></li>
    )
}