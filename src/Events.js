
// alert ("hello");
function Events()
{
    let data = "Satyam chandiwala";
    function Apple()
    {
        alert(data);
        data = "Satyam Yadav";
    }
    
    return(
        <div>
            <h1>{data}</h1>
            {/* Apple() aise likoge to nhi kaam krega click event */}
            <button onClick={Apple}>Click me</button>
            <button onClick={() => alert("Ram Ram saryanuu")}>Click me</button>
        </div>
    )
}

export default Events;