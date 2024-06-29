export class ToggleButton
{

public handler:(checked:boolean,args:any)=>void;
public color:string="#70b565";
public size:number=22;
public innerRadius:string="50%";
public outerRadius:string="15px";
buildButton(handler?:any,color?:any,parent?:any,size?:any,innerRadius?:any,outerRadius?:any)
{

 if(handler!=null)
  this.handler=handler;

    if(color!=null)
{
    this.color=color;
}
if(size!=null)
    {
        this.size=size;
    }
 if(innerRadius!=null)
        {
            this.innerRadius=innerRadius;
        }
 if(outerRadius!=null)
    {
                this.outerRadius=outerRadius;
  }
 
 let css=
  `
.setting-block {
	color: var(--text-color);
	display: flex;
	flex-direction: column;
	gap: 7px;
	font-size: 16.4px;
}

.setting-block h1 {
	font-size: 20px;
	font-family: Roboto, sans-serif;
	line-height: 35px;
	color: var(--text-color);
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
	display: flex;
	justify-content: space-between;
}

.setting-block label[for*="input"] {
	float: left;
	margin-right: 7px;
	margin-top: 5px;
}

.checkbox-container {
	position: relative;
	display: inline-block;
	width: ${this.size+28}px;
	height: ${this.size+8}px;
	cursor: pointer;
}

.checkbox-container input {
	opacity: 0;
	width: 0;
	height: 0;
}

.checkbox-slider {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: var(--border-color);
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: ${this.outerRadius}px;
	z-index: 2000;
}

.checkbox-slider:before {
	position: absolute;
	content: "";
	height: ${size}px;
	width: ${size}px;
	left: 4px;
	bottom: 4px;
	background-color: var(--background-color);
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: ${this.innerRadius};
	z-index: 1999;
}

.dark-mode .checkbox-slider:before {
	background-color: var(--text-color);
}

input:checked + .checkbox-slider {
	background-color: ${color};
}

input:checked + .checkbox-slider:before {
	transform: translateX(19px);
}

.input-wrapper {
	transition: 0.4s;
}

`;
let style = document.createElement('style');
style.appendChild(document.createTextNode(css.trim()));
document.getElementsByTagName('head')[0].appendChild(style);



	        const block = document.createElement("div");
			block.classList.add("setting-block");
			const name = document.createElement("h1");
			block.appendChild(name);
	
				const checkboxContainer = document.createElement("label");
				checkboxContainer.classList.add("checkbox-container");
				const checkbox = document.createElement("input");
				checkbox.classList.add("checkbox");
				checkbox.setAttribute("type", "checkbox");
				checkboxContainer.appendChild(checkbox);
				
				checkbox.addEventListener("change", function() {
					this.handler(checkbox.checked);
				}.bind(this));
				const slider = document.createElement("span");
				slider.classList.add("checkbox-slider");
				checkboxContainer.appendChild(slider);
				name.appendChild(checkboxContainer);

              if(parent)
				parent.appendChild(block);
                return block;

			}
		



}

