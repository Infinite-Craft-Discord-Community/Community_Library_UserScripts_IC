
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
  
  
  
  constructor() {

   }


};