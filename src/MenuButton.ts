
export interface MenuOption
{
 
    optionText:string;
    optionEmoji?:string;
    handler:any;


}


export class MenuButton
{
 public parentQuery:string=".settings-content";
 menuText:string="Click On Me";
 menuEmoji:string="";
 options:MenuOption[];
 hidden:boolean=true;
 public buttonClass:string="setting";
 public initAction:()=>void=()=>{};
 
setOptions(options:MenuOption[])
{
 this.options=options;
}
addOption(option:MenuOption)
{
 this.options.push(option);
}


 constructor(menuText:any,menuEmoji?:any,initAction?:any,options:MenuOption[]=[])
 { 
    this.menuText=menuText;
    this.initAction=initAction;
    this.menuEmoji=menuEmoji;
    this.options.push(...options);

 }



buildButton(otherParent?:string)
{
 let parentDiv=document.querySelector(otherParent??this.parentQuery);
 let buttonDiv=document.createElement("div");
 let selectionDiv=document.createElement("div");
 let selectedP=document.createElement("p");
 let optionsDiv=document.createElement("div");
 optionsDiv.style.overflowY="scroll";
 optionsDiv.style.height="100px";


 buttonDiv.classList.add(this.buttonClass);
 

 this.options.forEach( (option)=>{


  let optionDiv=document.createElement("div");
  optionDiv.appendChild(document.createTextNode(option.optionText+" "+option.optionEmoji??""));
  optionDiv.style.whiteSpace="nowrap";
  optionDiv.style.overflow="hidden";
  optionDiv.addEventListener("click",()=>{
  option.handler();
  selectedP.textContent=option.optionText+" "+option.optionEmoji??"";
    ;});

  optionsDiv.appendChild(optionDiv);


 });

  selectedP.addEventListener("click",function(){
  selectionDiv.appendChild(optionsDiv);
      this.hidden=true;

  },false);

  selectionDiv.appendChild(selectedP);
  selectionDiv.appendChild(document.createElement("hr"));


  buttonDiv.addEventListener("click",function(){
    
  if(this.hidden==true)
    {

        if(!buttonDiv.contains(selectionDiv))
       buttonDiv.appendChild(selectionDiv);

       this.hidden = false;

    }else
      {   if(selectionDiv.contains(optionsDiv))
              selectionDiv.removeChild(optionsDiv);

         if(buttonDiv.contains(selectionDiv))
            buttonDiv.removeChild(selectionDiv);
        this.hidden = true;
      }


  },false);


 parentDiv.appendChild(buttonDiv);
 this.initAction();
return buttonDiv;
}






}