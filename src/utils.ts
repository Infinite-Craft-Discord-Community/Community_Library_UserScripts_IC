export class utils
{


    public userAddedMethods:any[]=[];
    public ExportSaveButtonQuery:string =".setting[for=import-save] + .setting";
    public saveFileName:string="infinitecraft.json";


    saveSaveFileOnPC() {
    return new Promise((resolve, reject) => {
        const handleClick = HTMLElement.prototype.click;
        HTMLElement.prototype.click = () => {HTMLElement.prototype.click = handleClick}
        const bodyObserver = new MutationObserver((mutations, observer) => {
            for (const mutation of mutations) {
                if (mutation.type !== "childList") continue;
                const anchor = Array.from(mutation.addedNodes).find((node) =>{

          

                (<any>node).download === this.saveFileName});
            
            
                
                if (anchor) return fetch((<HTMLAnchorElement>anchor).href).then(resolve);
            }
        });
        bodyObserver.observe(document.body, { childList: true, subtree: true });
        handleClick.call(document.querySelector(this.ExportSaveButtonQuery));
        setTimeout(() => {
            bodyObserver.disconnect();
            reject("Timed out")
        }, 1500);
    });
}
constructor()
{

}
addFunction(name:string,callback:any)
{
    this.userAddedMethods.push({name:name,handler:callback});
}

}