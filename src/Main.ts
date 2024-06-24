let message: string = 'Hello, World!';
console.log(message);
import {UI} from  "./UI"
import {data} from  "./data"
import {utils} from  "./utils"
class Main
{
 public $ui:UI;
 public $data:data;
 public $utils:utils;
 constructor()
 {
  this.$ui=new UI();
  this.$data=new data();
  this.$utils=new utils();
 }


}
let $=new Main();