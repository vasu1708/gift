fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    
    display_info(data.basics);
    edu_details(data.basics.Education)
})
bodyref=document.querySelector("#root");
function display_info(info)
{ let div=document.createElement("div");
//   div.text-align:"center";
div.classList.add("style");
 bodyref.append(div);

 //heading
 let h1=document.createElement("h1");
 h1.textContent=info.name;
 div.append(h1);

 //age 
 let ag=document.createElement("h2");
 ag.textContent=info.age;
 div.append(ag);
 //mail
 let ei=document.createElement("a");
 ei.href="mailto:"+"balasrinivas1708@gmail.com";
 ei.textContent=info.email;
 div.append(ei);

 div.append(document.createElement("br"));

 //mobile no
 let pl=document.createElement("a");
 pl.href="tel:"+info.mobile_no;
 pl.textContent=info.mobile_no;
 div.append(pl);

 div.append(document.createElement("br"));
 //button
 let button=document.createElement("button");
 button.textContent="go to google";
 let bl=document.createElement("a");
 button.classList.add("btn");
 bl.href="https://www.google.com";
 bl.append(button);
 div.append(bl);

}function edu_details(par){
    for(i in par){
        let sec=document.createElement("section");
        sec.classList.add("secstyle");
        bodyref.append(sec);
        let head=document.createElement("h3");
        head.textContent=par[i].degree;
        sec.append(head);
        let p=document.createElement("p");
        p.textContent="percentage is: "+par[i].percentage;
        sec.append(p);
    }
}
