// function sendMail(){
//     var params={
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         message:document.getElementById("message").value,
//     };
    
//     const serviceID="service_52oog2z";
//     const templateID="template_z7nr53k"
    
//     emailjs.send(serviceID,templateID,params)
//     .then(res=>{
//         document.getElementById("name").value="";
//         document.getElementById("email").value="";
//         document.getElementById("message").value="";
//         console.log(res);
//         alert("Your message successfully sented");
//     })
//     .catch((err)=>console.log(err));
// }