
import unsafeWindow from "greasemonkey";
//source must be initiated with unsafeWindow.$nuxt.$root.$children[2].$children[0].$children[0]
export class data
{
   public  source:any=null;
   public  sourceWindow:any=null;
   public  expF:any=null;
  
  public getElements()
  {
   return this.source._data.elements;
  }
    getInstances()
  {
   return this.source._data.instances;
  }
     onSorting(addSortingMethod:(x:any,y:any)=>any=x=>x)
  {
  let before=this.source._computedWatchers.sortedElements.getter;
  this.source._computedWatchers.sortedElements.getter=this.expF(() => {
  let previous=[...before()];
  return addSortingMethod(previous,this.getElements());
  },unsafeWindow);
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