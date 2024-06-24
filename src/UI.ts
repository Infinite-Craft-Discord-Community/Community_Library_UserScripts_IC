
import {ContextMenu,ActionType,ActionForm} from "./ContextMenu"
import {MenuButton,MenuOption} from "./MenuButton"
export class UI {
   public contextMenus:ContextMenu[]=[new ContextMenu()];
   public MenuButtons:MenuButton[]=[];
   public defaultSettingsButtonQuery: string;
   public defaultContextMenuQuery: string = "";
   public defaultModalQuery: string = "";
   public instancesClass: string = "instances";
   public itemsClass: string = "items-inner";
   constructor() {
      this.defaultModalQuery = ".modal:nth-child(3)";
      this.defaultSettingsButtonQuery = ".settings-content";
   }


   onObservingInstance(applyOnOneElement: any) {
      const instanceObserver = new MutationObserver((mutations) => {
         for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
               for (const node of Array.from(mutation.addedNodes)) {


                  if ((<HTMLElement>node).id != "instance-0") {
                     applyOnOneElement(node);

                  }
               }
            }
         }



      });

      instanceObserver.observe(document.getElementsByClassName(this.instancesClass)[0], {
         childList: true,
         subtree: true,

      });


   }
   onObservingItems(applyOnOneElement: any) {
      const instanceObserver = new MutationObserver((mutations) => {
         for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
               for (const node of Array.from(mutation.addedNodes)) {
                  {
                     applyOnOneElement(node);

                  }
               }
            }
         }



      });

      instanceObserver.observe(document.getElementsByClassName(this.instancesClass)[0], {
         childList: true,
         subtree: true,

      });


   }




};
