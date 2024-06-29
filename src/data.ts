
import * as GM from "greasemonkey";
//source must be initiated with unsafeWindow
export class data
{
   public  source:any=null;
   public  expF:any=null;



  //uW=unsafeWindow must be done from userscript
  //expF=exportFunction

public addDataSource(expF:any,uW:any=self)
{ 
   this.source=uW.$nuxt.$root.$children[2].$children[0].$children[0]
   this.expF=expF;

}


  public getElements()
  {
   return this.source._data.elements;
  }
    getInstances()
  {
   return this.source._data.instances;
  }
     onSorting(methodName:string,newSvg:string,addSortingMethod:(x:any,y:any)=>any=x=>x,addStyleChanges?:any)
  {
  let before=this.source._computedWatchers.sortedElements.getter;


  this.source._computedWatchers.sortedElements.getter=this.expF(() => {

   if (this.source.$nuxt.$root.$children[2].$children[0].$children[0]._data.sortBy === methodName)
     {
      let previous=[...before()];
      return addSortingMethod(previous,this.getElements());
     }else
     {
       return before();

     }

  },unsafeWindow);
  
this.source.$nuxt.$root.$children[2].$children[0].$children[0].sorts.push(methodName);
const sortButtonObserver = new MutationObserver((mutations) => {
   

         if(this.source.$nuxt.$root.$children[2].$children[0].$children[0]._data.sortBy === methodName)
           {    let img=document.querySelector(".sidebar-sort > img");

             if( (<HTMLImageElement>img).src.trim()=="https://neal.fun/infinite-craft/"+methodName+".svg")
               {

                 (<HTMLImageElement>img).src=newSvg;
                 if(addStyleChanges!=null)
                  {
                     addStyleChanges(img,true);
                  }
                 //img.style.filter="none";

               }
           }else
                 {
                  addStyleChanges(img,false);
                 }


     });

       let img=document.querySelector(".sidebar-sort > img");
       console.log(img,img.textContent)
       var config = { characterData: false, attributes: true, childList: false, subtree: false };
       sortButtonObserver.observe(img,config);


  
  }
  
      onFiltering(addFilterMethodOnQuery:(x:any,y:any)=>any=(x:any,y:any)=>y())
  {
  let before=this.source._computedWatchers.searchResults.getter;
  this.source._computedWatchers.searchResults.getter=this.expF(() => {
  let query= this.source.searchQuery
 
 
 
  return addFilterMethodOnQuery(query,before);
  
  
  },unsafeWindow) ;
  }
  
  
addInToolTipsAsync(callback:(text:string,emoji:string)=> Promise<string>)
{    
  
  let style = document.createElement('style');
  style.appendChild(document.createTextNode(`.item.instance::before {text-align: center;}`.trim()));
  document.getElementsByTagName('head')[0].appendChild(style);



  const instanceObserver = new MutationObserver( async (mutations) => {
    for (const mutation of mutations) {
     if (mutation.addedNodes.length > 0)
       for (const node of Array.from(mutation.addedNodes)){

                
               if((<HTMLElement>node).classList.contains("instance"))
                 {
                   let text= (<HTMLElement>node).getAttribute("tooltip");
                    let nodeText=""

                         console.log("exist",node.childNodes)

                     for(let n of Array.from((<HTMLElement>node).childNodes))
                     {

                       if(n.nodeType==3 && (<Text>n).length!=0)
                         {
                           console.log("n:",n,"node-type:",n.nodeType)
                           nodeText+=n.textContent.trim();

                         }

                     }

                     let  emoji=(<HTMLElement>node).querySelector(".instance-emoji");
                     nodeText=await callback(nodeText,emoji.textContent);
                     if(text==null)
                         text="";

                      text=text+"\n"+nodeText;
                      (<HTMLElement>node).setAttribute("tooltip",text);
                 }

              }}




});

instanceObserver.observe(document.getElementsByClassName("instances")[0], {
    childList: true,
    subtree  : true,

});


}
addInToolTips(callback:(text:string,emoji:string)=> string)
{


  let style = document.createElement('style');
  style.appendChild(document.createTextNode(`.item.instance::before {text-align: center;}`.trim()));
  document.getElementsByTagName('head')[0].appendChild(style);
  
  const instanceObserver = new MutationObserver( async (mutations) => {
    for (const mutation of mutations) {
     if (mutation.addedNodes.length > 0)
       for (const node of Array.from(mutation.addedNodes)){

                
               if((<HTMLElement>node).classList.contains("instance"))
                 {
                   let text= (<HTMLElement>node).getAttribute("tooltip");
                    let nodeText=""

                         console.log("exist",node.childNodes)

                     for(let n of Array.from((<HTMLElement>node).childNodes))
                     {

                       if(n.nodeType==3 && (<Text>n).length!=0)
                         {
                           console.log("n:",n,"node-type:",n.nodeType)
                           nodeText+=n.textContent.trim();

                         }

                     }

                     let  emoji=(<HTMLElement>node).querySelector(".instance-emoji");
                     nodeText=callback(nodeText,emoji.textContent);
                     if(text==null)
                         text="";

                      text=text+"\n"+nodeText;
                      (<HTMLElement>node).setAttribute("tooltip",text);
                 }

              }}
            });

            instanceObserver.observe(document.getElementsByClassName("instances")[0], {
                childList: true,
                subtree  : true,
            
            });
            
            
    }


  
  constructor() {

   }


};