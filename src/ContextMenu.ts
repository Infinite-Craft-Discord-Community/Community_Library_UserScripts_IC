export enum ActionType {
    "button", "checkbox"
 }
 
 export interface ActionForm {
    textOn: string;
    textOff?: string;
    emojiOn?:string;
    emojiOff?:string;
    handler: any;
    initHandler?: (x: any) => boolean;
    type: ActionType;
 
 }
 
 export interface ContextMenuUiOptions {
    colorB: "#54C571",
    height: 40,
    borderWidth: 2,
    widthButton: 50
    , heightButton: 20,
    borderWidthButton: 1,
    radius: 4,
    minWidth: 100,
    xOffset: 120,
    xOffsetButton: 20,
    paddingButton: 1,
    duration: 1
 
 
 
 }
 
 
 
 
 
 
 export class ContextMenu {
    public triggerTypeVisible: string = "mouseover";
    public triggerTypeInvisible: string = "mouseleft";
    public complexTriggerIn: boolean = false;
    public complexTriggerOut: boolean = false;
    public complexTriggerInCondition: any;
    public complexTriggerOutCondition: any;
 
    public contextMenuQuery: string = ".contextMenu";
    public actions: ActionForm[] = [];
 
 
    setComplexTriggerIn(complex: any) {
       this.complexTriggerInCondition = complex;
       this.complexTriggerIn = true;
    }
    setComplexTriggerOut(complex: any) {
       this.complexTriggerOutCondition = complex;
       this.complexTriggerOut = true;
    }
 
    addAction(action: ActionForm) {
       this.actions.push(action);
    }
    addActions(actions: ActionForm[]) {
       this.actions.push(...actions);
    }
 
 
 
 
    buildContextMenu(item: any, e: any, options: ContextMenuUiOptions = {
       colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50
       , heightButton: 20, borderWidthButton: 1, radius: 4,
       minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
    })
 {   if(this.complexTriggerIn==false)
    {  item.addEventListener(this.triggerTypeVisible,()=>
       this.buildContextMenuWhenVisible(item,e,options)
 
 
    );
    
    }else
    {
 
     this.complexTriggerInCondition(item);
 
    }
    
 }
 
    buildContextMenuWhenVisible(item: any, e: any, options: ContextMenuUiOptions = {
       colorB: "#54C571", height: 40, borderWidth: 2, widthButton: 50
       , heightButton: 20, borderWidthButton: 1, radius: 4,
       minWidth: 100, xOffset: 120, xOffsetButton: 20, paddingButton: 1, duration: 1
    }, zIndex = 1000) {
 
         
 
       let parent = document.querySelector(".container");

       if(parent){
       let conMenu = parent.querySelector(this.contextMenuQuery);
 
       if (conMenu == null) {
          conMenu = document.createElement("div");
          conMenu.classList.add(this.contextMenuQuery.slice(1));
          parent.appendChild(conMenu);
       }
       else {
          conMenu.innerHTML = "";
          (<HTMLElement>conMenu).style.opacity = "1";
       }
 
 
       (<HTMLElement>conMenu).style.overflow = "auto";
       (<HTMLElement>conMenu).style.zIndex = zIndex.toString();
       (<HTMLElement>conMenu).style.position = "absolute";
       (<HTMLElement>conMenu).style.height = options.height.toString() + "px";
       (<HTMLElement>conMenu).style.minWidth = options.minWidth + "px";
       (<HTMLElement>conMenu).style.top = e.clientY.toString() + "px";
       (<HTMLElement>conMenu).style.left = (e.clientX - options.xOffset).toString() + "px";
       (<HTMLElement>conMenu).style.border = options.borderWidth.toString() + "px solid " + window.getComputedStyle(parent).getPropertyValue("--text-color").trim();
       (<HTMLElement>conMenu).style.borderRadius = options.radius.toString() + "px";
       (<HTMLElement>conMenu).style.backgroundColor = "var(--background-color)";
 
 
       this.actions.forEach(function (action, i) {
 
 
          let span = document.createElement("span");
          let textSpan = document.createElement("label");
 
 
          if (action.type == ActionType.checkbox) {
             let actionCheckbox = document.createElement("input");
             let label = document.createElement("label");
             actionCheckbox.id = "actionId" + i;
             actionCheckbox.style.opacity = "0";
             actionCheckbox.type = "checkbox";
             label.htmlFor = "actionId" + i;
             textSpan.htmlFor = "actionId" + i;
             span.style.backgroundColor = "var(--text-color)";
             label.style.width = options.widthButton.toString() + "px";
             label.style.height = options.heightButton.toString() + "px";
             label.style.border = "1px solid currentColor";
             label.style.padding = options.paddingButton.toString() + "px";
             label.style.marginTop = ((options.height - options.heightButton) / 2).toString() + "px";
             label.style.marginRight = ((options.height - options.heightButton) / 2).toString() + "px";
             span.textContent = " ";
             span.style.borderRadius = options.radius.toString() + "px";
             span.style.height = (options.heightButton - 2 * options.paddingButton).toString() + "px";
             span.style.width = (options.widthButton / 2).toString() + "px";
             span.style.display = "inline-block";
             label.style.display = "inline-block";
             span.style.transform = options.duration.toString() + "s";
             label.appendChild(span);
             let isOn = action.initHandler? action.initHandler(item):false;
             actionCheckbox.checked = isOn;
 
             if (isOn) {
                span.style.translate = options.xOffsetButton.toString() + "px 0px";
                span.style.backgroundColor = options.colorB;
                textSpan.style.color = options.colorB;
                label.style.borderColor = options.colorB;
                textSpan.textContent = action.emojiOn??""+action.textOn;
             } else {
                span.style.translate = "0px 0px";
                span.style.backgroundColor = "currentColor";
                textSpan.style.color = "currentColor";
                label.style.borderColor = "currentColor";
                textSpan.textContent =action.emojiOff??action.emojiOn??""+ action.textOff ?? action.textOn;
 
             }
 
 
 
 
 
             actionCheckbox.addEventListener("change", () => {
                action.handler(item, e, actionCheckbox.checked);
                if (actionCheckbox.checked) {
                   span.style.translate = options.xOffsetButton.toString() + "px 0px";
                   span.style.backgroundColor = options.colorB;
                   textSpan.style.color = options.colorB;
                   label.style.borderColor = options.colorB;
                   textSpan.textContent = action.emojiOn??""+action.textOn;
                } else {
                   span.style.translate = "0px 0px";
                   span.style.backgroundColor = "currentColor";
                   textSpan.style.color = "currentColor";
                   label.style.borderColor = "currentColor"
                   textSpan.textContent = action.emojiOff??action.emojiOn??""+ action.textOff ?? action.textOn;
 
                }
 
 
 
             });
 
 
 
             //  checkZombie.style,display="none";
             conMenu.appendChild(actionCheckbox);
             conMenu.appendChild(label);
             conMenu.appendChild(textSpan);
 
          }else
         {
          let actionButton = document.createElement("button");
            actionButton.textContent=action.emojiOn??""+action.textOn;
            if(action.initHandler)
             {
                action.initHandler(conMenu);
             }
             actionButton.addEventListener("click",()=>action.handler());
 
            conMenu.appendChild(actionButton);
 
          }
 
          conMenu.appendChild(document.createElement("br"));
          if(this.complexTriggerOut===false){
          conMenu.addEventListener(this.triggerTypeInvisible, (e) => {
 
             setTimeout(() => {
                parent.querySelectorAll(this.contextMenuQuery).forEach((elem) =>
                   (<HTMLElement>elem).style.opacity = "0");
 
             }, 500);
          
 
 
 
          });}
          else
          {
             this.complexTriggerOutCondition(conMenu);
          }
 
 
 
       });
 
 
    }}
 }