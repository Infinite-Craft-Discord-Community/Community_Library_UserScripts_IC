export class ColorPicker
{
 public  callback:any;
 public  pickedColor:string;

makeColorPicker(localColback?:any)
{
   if(localColback!=null)
    this.callback=localColback;
      
    var ua = navigator.userAgent.toLowerCase();
    var  isAndroid = ua.indexOf("android") > -1;
    var  isMobile = ua.indexOf("android") > -1;
    var  isWebOs = ua.indexOf("webos") > -1;
    var  isIphone = ua.indexOf("iphone") > -1;
    var  isIpad = ua.indexOf("ipad") > -1;
    var  isLinux = ua.indexOf("linux") > -1;
    let parent=document.querySelector(".container");
  if((isAndroid || isMobile || isLinux || isWebOs || isIphone || isIpad))
    {
      
       let diag=document.createElement("dialog");

       let lr=document.createElement("label");
       lr.innerText="R (0-255)";
       lr.style.color="red";
       let lg=document.createElement("label");
       lg.innerText="G (0-255)";
       lg.style.color="green";
       let lb=document.createElement("label");
       lb.innerText="B (0-255)";
       lb.style.color="blue";
       let Previews=document.createElement("label");
       Previews.innerText="Preview color";
       let previewDiv=document.createElement("div");
          previewDiv.style.width="100px";
          previewDiv.style.height="100px";





       let ri=document.createElement("input");
        ri.type="number";
        ri.min="0";
        ri.max="255";
        ri.value="0";
       let gi=document.createElement("input");
       gi.type="number";
       gi.min="0";
       gi.max="255";
       gi.value="0";
       let bi=document.createElement("input");
       bi.type="number";
       bi.min="0";
       bi.max="255";
       bi.value="0";
       let rgb2Hex = (s:any) => s.match(/[0-9]+/g).reduce((a:any, b:any) => a+(b|256).toString(16).slice(1), '#');
       previewDiv.style.background="rgb("+ri.value+","+gi.value+","+bi.value+")";


         ri.addEventListener("input",function(event:any){


         // console.log("ri:",ri.value,"something");

          if(ri.value=="")
           {

             ri.value="0";
           }


         if(Number.parseInt(ri.value)<0)
             ri.value="0";


         if(Number.parseInt(ri.value)>255)
             ri.value="255";



         previewDiv.style.background="rgb("+ri.value+","+gi.value+","+bi.value+")";
         this.pickedColor=rgb2Hex("rgb("+ri.value+","+gi.value+","+bi.value+")");
         console.log("oneColor:",this.pickedColor);
         this.callback(this.pickedColor);
         }.bind(this));
         gi.addEventListener("input",function(even:any){

         console.log("gi:",gi.value,"something");

         if(gi.value=="")
           {

             gi.value="0";
           }



         if(Number.parseInt(gi.value)<0)
             gi.value="0";

         if(Number.parseInt(gi.value)>255)
             gi.value="255";




         previewDiv.style.background="rgb("+ri.value+","+gi.value+","+bi.value+")";
         localStorage.setItem("saved_color",rgb2Hex("rgb("+ri.value+","+gi.value+","+bi.value+")"));
        this.pickedColor=rgb2Hex("rgb("+ri.value+","+gi.value+","+bi.value+")");
         console.log("oneColor:",this.pickedColor);
         this.callback(this.pickedColor);
         }.bind(this));

         bi.addEventListener("input",function(event:any){

          console.log("bi:",bi.value,"something");
          if(bi.value=="")
           {

             bi.value="0";
           }


           if(Number.parseInt(bi.value)<0)
              bi.value="0";

           if(Number.parseInt(bi.value)>255)
             bi.value="255";




         previewDiv.style.background="rgb("+ri.value+","+gi.value+","+bi.value+")";
         this.pickedColor=rgb2Hex("rgb("+ri.value+","+gi.value+","+bi.value+")");
         console.log("oneColor:",this.pickedColor);
         this.callback(this.pickedColor);

         }.bind(this));






        let closeButton=document.createElement("button");
         closeButton.appendChild(document.createTextNode("Close"));
         closeButton.addEventListener("click", function() {
         diag.close();
               });
       let inputDiv=document.createElement("div");
       let previewsDiv=document.createElement("div");
       let mainLogic=document.createElement("div");
       inputDiv.appendChild(lr);
       inputDiv.appendChild(document.createElement("br"));
       inputDiv.appendChild(ri);
       inputDiv.appendChild(document.createElement("br"));
       inputDiv.appendChild(lg);
       inputDiv.appendChild(document.createElement("br"));
       inputDiv.appendChild(gi);
       inputDiv.appendChild(document.createElement("br"));
       inputDiv.appendChild(lb);
       inputDiv.appendChild(document.createElement("br"));
       inputDiv.appendChild(bi);
       inputDiv.appendChild(document.createElement("br"));
       inputDiv.style.float="left";
       inputDiv.style.margin = "10px";
       mainLogic.appendChild(inputDiv);

       previewsDiv.appendChild(Previews);
       previewsDiv.appendChild(document.createElement("br"));
       previewsDiv.appendChild(previewDiv);
       previewsDiv.appendChild(document.createElement("br"));
       previewsDiv.style.float="right";
       mainLogic.appendChild(previewsDiv);
       diag.appendChild(mainLogic);

       diag.appendChild( closeButton);
       diag.style.position="absolute";
       diag.style.top="33%";
       diag.style.left="25%";
       diag.style.background="var(--background-color)";
       diag.style.color=("var(--text-color)").trim();
       if(parent)
        parent.appendChild(diag);
        diag.showModal();
}else
{


  let input = document.createElement("input");
  input.setAttribute("type", "color");

  input.addEventListener("click",function(event)
                           {event.stopPropagation();
   });




  input.addEventListener("input",function(event:any)
{
   this.pickedColor= event.target.value;
  this.handler(this.pickedColor);

   }.bind(this));
   if(parent)
    parent.appendChild(input);
  // hidden=0;
   input.click();
 

}





}





}

