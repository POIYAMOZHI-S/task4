let inputs= document.getElementById("input");
let list = document.getElementById("list")

function ADD() {
    if(inputs.value === ""){
    alert("Enter Your Message")
    }
    else{
        const list1= document.createElement("li");
        list1.innerHTML = inputs.value;
        list.appendChild(list1);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        list1.appendChild(span)
        inputs.value="";
        list1.querySelector("span").addEventListener("click", remove);
        function remove(){
            list1.remove()
        }
    }
}