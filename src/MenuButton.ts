
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
 options:MenuOption[]=[];
 hiddenObject:boolean=true;
 public buttonClass:string="setting";
 public initAction:()=>number=()=>{return 0;};
 
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
 buttonDiv.classList.add("menu-button");
 buttonDiv.appendChild(document.createTextNode(this.menuText+" "+(this.menuEmoji==null?"":this.menuEmoji)));
 buttonDiv.style.height="fit-content";


 let selectionDiv=document.createElement("div");
 let selectedP=document.createElement("p");
 let optionsDiv=document.createElement("div");
 optionsDiv.classList.add("menu-button-options");
 optionsDiv.style.overflowY="scroll";
 optionsDiv.style.height="100px";


 buttonDiv.classList.add (this.buttonClass);


 let css = `
 .menu-button-option:hover
     {
       background:gray;

     }

.menu-button
{

scrollbar-width: none;

}
.menu-button-options {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */}
 .menu-button-options::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;}
`


let style = document.createElement('style');
style.appendChild(document.createTextNode(css.trim()));
document.getElementsByTagName('head')[0].appendChild(style);


let indexOption=0;
if(this.initAction)
  indexOption=this.initAction();

console.log("indexOption:",indexOption,"options:",this.options);
selectedP.textContent=this.options[indexOption].optionText+" "+(this.options[indexOption].optionEmoji==null?"":this.options[indexOption].optionEmoji);

 this.options.forEach( (option)=>{


  let optionDiv=document.createElement("div");
  optionDiv.classList.add("menu-button-option");
  optionDiv.appendChild(document.createTextNode(option.optionText+" "+(option.optionEmoji==null?"":option.optionEmoji)));
  optionDiv.style.whiteSpace="nowrap";
  optionDiv.style.overflow="hidden";
  optionDiv.addEventListener("mouseenter",()=>{optionDiv.style.backgroundColor="gray"});
  optionDiv.addEventListener("mouseleave",()=>{optionDiv.style.backgroundColor="var(--background-color)"});

  optionDiv.addEventListener("click",()=>{
  option.handler();
  selectedP.textContent=option.optionText+" "+(option.optionEmoji==null?"":option.optionEmoji);
    ;});

  optionsDiv.appendChild(optionDiv);


 });

  selectedP.addEventListener("click",function(){
  selectionDiv.appendChild(optionsDiv);
      this.hiddenObject=true;



  }.bind(this),false);

  selectionDiv.appendChild(selectedP);
  selectionDiv.appendChild(document.createElement("hr"));


  buttonDiv.addEventListener("click",function(){
    
  if(this.hiddenObject==true)
    {    console.log("got here");

        if(!buttonDiv.contains(selectionDiv))
       buttonDiv.appendChild(selectionDiv);

       this.hiddenObject = false;

    }else
      {   if(selectionDiv.contains(optionsDiv))
              selectionDiv.removeChild(optionsDiv);

         if(buttonDiv.contains(selectionDiv))
            buttonDiv.removeChild(selectionDiv);
        this.hiddenObject = true;
      }


  }.bind(this),false);


 parentDiv.appendChild(buttonDiv);

return buttonDiv;
}






}